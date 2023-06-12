import { classNames } from "shared/lib/classNames/classNames";

import styles from "./ArticleDetailPage.module.scss";
import { memo } from "react";
import { ArticleDetails } from "entities/Article";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

interface ArticleDetailPageProps {
  className?: string;
}

const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  if (!id) {
    return (
      <div className={classNames(styles.ArticleDetailPage, {}, [className])}>
        {t("Статья не найдена")}
      </div>
    );
  }

  return (
    <div className={classNames(styles.ArticleDetailPage, {}, [className])}>
      <ArticleDetails id={id} />
    </div>
  );
};

export default memo(ArticleDetailPage);
