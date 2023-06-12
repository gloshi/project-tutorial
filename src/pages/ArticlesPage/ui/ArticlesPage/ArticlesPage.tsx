import { classNames } from "shared/lib/classNames/classNames";

import styles from "./ArticlesPage.module.scss";
import { memo } from "react";

interface ArticlesPageProps {
  className?: string;
}
 const ArticlesPage = ({ className }: ArticlesPageProps) => {
  return (
    <div className={classNames(styles.ArticlesPage, {}, [className])}>
      ArticlesPage
    </div>
  );
};

export default memo(ArticlesPage)