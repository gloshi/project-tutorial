import { classNames } from "shared/lib/classNames/classNames";

import styles from "./ArticleList.module.scss";
import { Article, ArticleView } from "entities/Article";
import { ArticleListItem } from "../ArticleListItem/ArticleListItem";
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton";

interface ArticleListProps {
  className?: string;
  articles: Article[];
  isLoading?: boolean;
  view?: ArticleView;
}

export const ArticleList = (props: ArticleListProps) => {
  const { className, view = ArticleView.BIG, isLoading, articles } = props;

  if (isLoading) {
    return (
      <div className={classNames(styles.ArticleList, {}, [className, styles[view]])}>
        {new Array(view === ArticleView.SMALL ? 9 : 3)
          .fill(0)
          .map((item, i) => (
            <ArticleListItemSkeleton view={item} key={i} />
          ))}
      </div>
    );
  }

  const renderArticle = (article: Article) => (
    <ArticleListItem
      article={article}
      view={view}
      className={styles.card}
      key={article.id}
    />
  );

  return (
    <div
      className={classNames(styles.ArticleList, {}, [className, styles[view]])}
    >
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  );
};
