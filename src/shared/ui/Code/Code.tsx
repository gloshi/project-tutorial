import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Code.module.scss'
import CopyIcon from 'shared/assets/icons/copy-20-20.svg'

import { ReactNode, useCallback } from 'react';
import { Button, ThemeButtonChanger } from '../Button/Button';
import { Icon } from '../Icon/Icon';
import { ThemeButton } from '../ThemeButton';

interface CodeProps {
  className?:string
  text: string
}

export const Code = (props:CodeProps) => {

    const {className,text} = props

    const codeCopy = useCallback(() => {
        navigator.clipboard.writeText(text)
    },[text])

  return (
    <pre className={classNames(styles.Code, {}, [className])}>
        <Button onClick={codeCopy} className={styles.copyBtn} theme={ThemeButtonChanger.CLEAR} >
            <Icon Svg={CopyIcon} />
        </Button>
    <code >
        {text}
    </code>
    </pre>
  )
}