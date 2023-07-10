import { classNames } from 'shared/lib/classNames/classNames';

import styles from './Card.module.scss'
import { HTMLAttributes, ReactNode, memo } from 'react';

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?:string
  children: ReactNode
}

export const Card = memo((props:CardProps) => {

    const {className,children,...other} = props

  return (
    <div className={classNames(styles.Card, {}, [className])}
    {...other}
    >
        {children}
    </div>
  )
})
