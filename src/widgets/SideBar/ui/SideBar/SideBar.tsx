import { classNames } from 'shared/lib/classNames/classNames'

import styles from './SideBar.module.scss'
import { useState } from 'react'
import { Theme } from 'app/providers/ThemeProvider'
import { ThemeButton } from 'shared/ui/ThemeButton'
import { LanguageSwitcher } from 'shared/ui/LanguageSwitcher/LanguageSwitcher'
import { Button } from 'shared/ui/Button/Button'

interface SideBarProps {
  className?: string
}

export const SideBar = ({ className }: SideBarProps) => {
    const [isVisible, setIsVisible] = useState(false)

  const onToggle = () => {
    setIsVisible(prev => !prev)
  }
  return (
        <div data-testid='sidebar' className={classNames(Theme.LIGHT ? styles.SideBar : styles.SideBarDark, { [styles.isVisible]: isVisible }, [className])}>
          <Button data-testid="sidebarBtn" onClick={onToggle}>toggle</Button>
          <div className={styles.switchers}>
                <ThemeButton/>
                <LanguageSwitcher  className={styles.lang}/>
            </div>
      </div>
  )
}
