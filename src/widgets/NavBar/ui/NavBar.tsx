
import { classNames } from 'shared/lib/classNames/classNames'

import styles from './NavBar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { useTranslation } from 'react-i18next'

interface NavBarProps {
  className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t, i18n } = useTranslation()

    return (
      <div className={classNames(styles.Navbar, {}, [])}>
            <div className={styles.links}>
              
            </div>

        </div>
  )
}
