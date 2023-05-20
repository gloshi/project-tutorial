import { classNames } from 'shared/lib/classNames/classNames';

import styles from './PageError.module.scss'
import { useTranslation } from 'react-i18next';

interface PageErrorProps {
  className?:string
}

export const PageError = ({className}:PageErrorProps) => {

  const {t} = useTranslation()

  return (
    <div className={classNames(styles.PageError, {}, [])}>
      <span>{t('Произошла ошибка 500')}</span>
        <button onClick={() => location.reload()}>
          {t('Обновить страницу')}
        </button>
    </div>
  )
}