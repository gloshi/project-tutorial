import { classNames } from "shared/lib/classNames/classNames";

import styles from "./ArticleDetails.module.scss";
import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { articleDetailsReducer } from "entities/Article/model/slice/articleDetailsSlice";
import { memo, useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { fetchArticleById } from "entities/Article/model/services/fetchArticleById/fetchArticleById";
import { useSelector } from "react-redux";
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "entities/Article/model/selectors/aticleDetails";
import { Text, TextAlign, TextSize } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { Skeleton } from "shared/ui/Skeleton/Skeleton";
import { Avatar } from "shared/ui/Avatar/Avatar";

import Eye from "shared/assets/icons/eye-20-20.svg";
import Calendar from "shared/assets/icons/calendar-20-20.svg";
import { Icon } from "shared/ui/Icon/Icon";
import {
  ArticleBlock,
  ArticleBlockType,
} from "entities/Article/model/types/article";
import { ArticleCodeBlockComponent } from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent";
import { ArticleImageBlockComponent } from "../ArticleImageBlockComponent/ArticleImageBlockComponent";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
interface ArticleDetailsProps {
  className?: string;
  id: string;
}

const reducers: ReducerList = {
  articleDetails: articleDetailsReducer,
};

export const ArticleDetails = memo((props: ArticleDetailsProps) => {
  const { className, id } = props;
  const { t } = useTranslation("article");

  const dispatch = useAppDispatch();
  const isLoading = useSelector(getArticleDetailsIsLoading);
  const article = useSelector(getArticleDetailsData);
  const error = useSelector(getArticleDetailsError);

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return (
          <ArticleCodeBlockComponent
            key={block.id}
            block={block}
            className={styles.block}
          />
        );
      case ArticleBlockType.IMAGE:
        return (
          <ArticleImageBlockComponent
            key={block.id}
            block={block}
            className={styles.block}
          />
        );
      case ArticleBlockType.TEXT:
        return (
          <ArticleTextBlockComponent
            key={block.id}
            className={styles.block}
            block={block}
          />
        );
      default:
        return null;
    }
  }, []);

  useEffect(() => {
    if (__PROJECT__ !== "storybook") {
      dispatch(fetchArticleById(id));
    }
  }, [dispatch, id]);

  let content;

  if (isLoading) {
    content = (
      <>
        <Skeleton
          className={styles.avatar}
          width={200}
          height={200}
          border="50%"
        />
        <Skeleton className={styles.title} width={300} height={32} />
        <Skeleton className={styles.skeleton} width={600} height={24} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
        <Skeleton className={styles.skeleton} width="100%" height={200} />
      </>
    );
  } else if (error) {
    content = (
      <Text
        align={TextAlign.CENTER}
        title={t("Произошла ошибка при загрузке статьи.")}
      />
    );
  } else {
    content = (
      <>
        <div className={styles.avatarWrapper}>
          <Avatar size={200} src={article?.img} className={styles.avatar} />
        </div>
        <Text
          size={TextSize.L}
          className={styles.title}
          title={article?.title}
          text={article?.subtitle}
        />
        <div className={styles.articleInfo}>
          <Icon className={styles.icon} Svg={Eye} />
          <Text text={String(article?.views)} />
        </div>
        <div className={styles.articleInfo}>
          <Icon className={styles.icon} Svg={Calendar} />
          <Text text={article?.createdAt} />
        </div>
        {article?.blocks.map(renderBlock)}
      </>
    );
  }
  console.log(content);
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div className={classNames(styles.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  );
});
