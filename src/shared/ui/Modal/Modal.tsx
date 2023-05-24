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
}
export const Modal = (props:ModalProps) => {
    const delay = 300
    const[isClosed, setIsClose] = useState<boolean>(false)
    const timeRef = useRef<ReturnType<typeof setTimeout>>()
    const {theme} = useTheme()
    console.log(theme)
    const  {
        className,
        children,
        isOpen,
        onClose
    } = props

    const mods: Record<string, boolean> ={
        [styles.opened]: isOpen,
        [styles.isClosed]: isClosed,
        [styles[theme]]: true
    }


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

  
  return (
    <Portal>
    <div className={classNames(styles.Modal, mods, [className])}>
        <div className={styles.overlay} onClick={closeHandler}>
            <div className={classNames(styles.content, {[styles.contentOpen]: isOpen}, [className])} onClick={onContentClick}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque vero doloribus laboriosam cum magni inventore velit possimus ea impedit beatae! Minima deleniti rem accusantium ab autem qui cumque ipsa possimus? {children}
            </div>
        </div>
    </div>
    </Portal>
  )
}
