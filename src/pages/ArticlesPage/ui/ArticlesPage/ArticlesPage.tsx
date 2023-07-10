import { classNames } from "shared/lib/classNames/classNames";

import styles from "./ArticlesPage.module.scss";
import { memo } from "react";
import { Article, ArticleList, ArticleView } from "entities/Article";
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { ArticlePageReducer, getArticles } from "pages/ArticlesPage/model/slices/ArticlePageSlice";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { fetchArticlesList } from "pages/ArticlesPage/model/services/fetchArticleList/fetchArticleList";
import { useSelector } from "react-redux";
import { getArticlesPageError, getArticlesPageIsLoading, getArticlesPageView } from "pages/ArticlesPage/model/selectors/ArticlesPageSelector";

interface ArticlesPageProps {
  className?: string;
}
 const ArticlesPage = ({ className }: ArticlesPageProps) => {
  const redusers: ReducerList = {
    articlesPage: ArticlePageReducer
  }
  const articles = useSelector(getArticles.selectAll)
  const dispatch = useAppDispatch()
  const isLoading = useSelector(getArticlesPageIsLoading)
  const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)

  useInitialEffect(() => {
    dispatch(fetchArticlesList())
  })

  
  return (
    <DynamicModuleLoader reducers={redusers}>
    <div className={classNames(styles.ArticlesPage, {}, [className])}>
        <ArticleList isLoading={isLoading}  view={ArticleView.BIG} articles={articles} />
    </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticlesPage)