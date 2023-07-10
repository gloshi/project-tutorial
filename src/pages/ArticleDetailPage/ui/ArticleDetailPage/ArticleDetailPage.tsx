import { classNames } from "shared/lib/classNames/classNames";

import styles from "./ArticleDetailPage.module.scss";
import { memo, useCallback } from "react";
import { ArticleDetails } from "entities/Article";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Text } from "shared/ui/Text/Text";
import { CommentList } from "entities/Comment";
import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsCommentsReducer, getArticleComments } from "pages/ArticleDetailPage/model/slices/ArticleDetailCommentSlice";
import { useSelector } from "react-redux";
import { getArticleCommentsIsLoading } from "pages/ArticleDetailPage/model/selectors/comments";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { fetchCommentsByArticleId } from "pages/ArticleDetailPage/model/services/fetchCommentsById/fetchCommentsById";
import { AddCommentForm } from "features/AddCommentForm";
import { addCommentForArticle } from "pages/ArticleDetailPage/model/services/addCommentForArticle/addCommentForArticle";
import { Button, ThemeButtonChanger } from "shared/ui/Button/Button";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

export interface ArticleDetailPageProps {
  className?: string;
}

 const ArticleDetailPage = ({ className }: ArticleDetailPageProps) => {
  const { id } = useParams<{ id: string }>();
  const { t } = useTranslation();
  const comments = useSelector(getArticleComments.selectAll)
  const isLoading = useSelector(getArticleCommentsIsLoading)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  if (!id) {
    return (
      <div className={classNames(styles.ArticleDetailPage, {}, [className])}>
        {t("Статья не найдена")}
      </div>
    );
  }

  const onSendComment = useCallback((text:string) => {
    dispatch(addCommentForArticle(text))
  },[])

  const reducers: ReducerList = {
    articleDetailsComments: articleDetailsCommentsReducer,
  };

  const onClickBack = useCallback(() => {
    navigate(RoutePath.articles)
  },[navigate])

  useInitialEffect(() => {
    dispatch(fetchCommentsByArticleId(id))
  })

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(styles.ArticleDetailPage, {}, [className])}>
        <Button onClick={onClickBack} theme={ThemeButtonChanger.OUTLINE}>{t('Назад к списку')}</Button>
        <ArticleDetails id={id} />
        <Text className={styles.commentTitle} title={t("Комментарии")} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList isLoading={isLoading} comments={comments} />
      </div>
    </DynamicModuleLoader>
  );
};

export default memo(ArticleDetailPage);
