import { useTranslation } from 'react-i18next'
import styles from './LanguageSwitcher.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ThemeButtonChanger } from '../Button/Button'

interface LanguageSwitcherProps {
  className?: string
}

export const LanguageSwitcher = ({ className }: LanguageSwitcherProps) => {
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
          {t('Язык')}
      </Button>
  );
}
