import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./ErrorPage.module.scss";

interface ErrorPageProps {
  className?: string;
}

const ErrorPage = ({ className }: ErrorPageProps) => {
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.ErrorPage, {}, [])}>
      <h3>{t('Страница не найдена')}</h3>
    </div>
  );
};

export default ErrorPage;
