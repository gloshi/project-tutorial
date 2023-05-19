import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Button.module.scss'
import { ButtonHTMLAttributes, FC, HtmlHTMLAttributes } from 'react';

export enum ThemeButtonChanger {
    CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  className?:string,
  theme?: ThemeButtonChanger
}

export const Button:FC<ButtonProps> = (props) => {

    const {
        className,
        children,
        theme,
        ...otherProps
    } = props

  return (
    <button className={classNames(styles.button, {[styles[theme]]:true}, [className])}
    {...otherProps}>
        {children}
    </button>
  )
}