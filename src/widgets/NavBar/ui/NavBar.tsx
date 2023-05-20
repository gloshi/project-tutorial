
import { classNames } from 'shared/lib/classNames/classNames'

import styles from './NavBar.module.scss'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeButton } from 'shared/ui/ThemeButton'
import { useTranslation } from 'react-i18next'

interface NavBarProps {
  className?: string
}

export const NavBar = ({ className }: NavBarProps) => {
    const { t, i18n } = useTranslation()

    return (
      <div className={classNames(styles.Navbar, {}, [])}>
            <div className={styles.links}>
              <AppLink theme={AppLinkTheme.SECONDARY} className={styles.main} to={'/'}>{t('На главную')}</AppLink>
              <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t('О нас')}</AppLink>
          </div>

        </div>
  )
}
