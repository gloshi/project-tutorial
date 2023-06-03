import { useTranslation } from 'react-i18next'
import styles from './LanguageSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButtonChanger } from '../Button/Button'
import { memo } from 'react'

interface LanguageSwitcherProps {
  className?: string
  short?: boolean

}

export const LanguageSwitcher = memo(({ className,short }: LanguageSwitcherProps) => {
  const { t, i18n } = useTranslation()

    const toggle = () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    };

  return (
        <Button
          className={classNames(styles.switcher, {}, [className])}
          theme={ThemeButtonChanger.CLEAR}
          onClick={toggle}
        >
          {t( short?  'Короткий язык' :'Язык')}
      </Button>
  );
})
