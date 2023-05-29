import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Modal.module.scss'
import { ReactNode, useCallback, useEffect, useRef, useState } from 'react';
import { Portal } from '../Portal/ui/Portal';
import { useTheme } from 'app/providers/ThemeProvider';

interface ModalProps {
  className?:string
  children?: ReactNode
  isOpen? : boolean
  onClose?: () => void
  lazy?: boolean
}
export const Modal = (props:ModalProps) => {
    const delay = 300
    const[isClosed, setIsClose] = useState<boolean>(false)
    const [isInDom,setIsInDom] = useState(false)
    const timeRef = useRef<ReturnType<typeof setTimeout>>()
    const {theme} = useTheme()
    
 

    const  {
        className,
        children,
        isOpen,
        onClose,
        lazy
    } = props

    const mods: Record<string, boolean> ={
        [styles.opened]: isOpen,
        [styles.isClosed]: isClosed,
    }
    useEffect(() => {
        if(isOpen){
            setIsInDom(true)
        }
    },[isOpen])
    const closeHandler = useCallback(() =>{
        if(onClose){
            setIsClose(true)
            timeRef.current = setTimeout(() => {
                onClose()
                setIsClose(false)
            }, delay);
        }
    },[onClose])

    //Новая ссылка при перерендере
    const onKeyDown = useCallback((e:KeyboardEvent) => {
        if(e.key === 'Escape'){
            closeHandler()
        }
    },[closeHandler])

    const onContentClick = (e:React.MouseEvent) => {
        e.stopPropagation()
    }

    useEffect(() => {
        if(isOpen){
            window.addEventListener('keydown', onKeyDown)
        }
        return () => {
            clearTimeout(timeRef.current)
            window.removeEventListener('keydown', onKeyDown)
        }
    },[isOpen])

  
    if(lazy && !isInDom){
        return null
    }

  return (
    <Portal>
    <div className={classNames(styles.Modal, mods, [className])}>
        <div className={styles.overlay} onClick={closeHandler}>
            <div className={classNames(styles.content, {[styles.contentOpen]: isOpen}, [theme, 'app_modal'])} onClick={onContentClick}>
                 {children}
            </div>
        </div>
    </div>
    </Portal>
  )
}
