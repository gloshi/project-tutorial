import { classNames } from "shared/lib/classNames/classNames";

import styles from "./ArticleListItem.module.scss";
import {
  Article,
  ArticleBlockType,
  ArticleTextBlock,
  ArticleView,
} from "entities/Article/model/types/article";
import { Button, ThemeButtonChanger } from "shared/ui/Button/Button";
import { ArticleTextBlockComponent } from "../ArticleTextBlockComponent/ArticleTextBlockComponent";
import { Text } from "shared/ui/Text/Text";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { useTranslation } from "react-i18next";
import { Card } from "shared/ui/Card/Card";
import { Icon } from "shared/ui/Icon/Icon";
import EyeIcon from "shared/assets/icons/eye-20-20.svg";
import { useHover } from "shared/lib/hooks/useHover";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

interface ArticleListItemProps {
  className?: string;
  article: Article;
  view: ArticleView;
}



export const ArticleListItem = (props: ArticleListItemProps) => {
  const { className, article, view } = props;
  const { t } = useTranslation();
  const navigate = useNavigate()

  const onClickArticle = useCallback(() => {
    navigate(RoutePath.articles_details + article.id)
  },[article.id,navigate])

  const types = (
    <Text text={article.type.join(", ")} className={styles.types} />
  );
  const views = (
    <>
      <Text text={String(article.views)} className={styles.views} />
      <Icon Svg={EyeIcon} />
    </>
  );


  if (view === ArticleView.BIG) {
    const textBlock = article.blocks.find(
        (block) => block.type === ArticleBlockType.TEXT,
    ) as ArticleTextBlock;

    return (
        <div className={classNames(styles.ArticleListItem, {}, [className, styles[view]])}>
            <Card className={styles.card}>
                <div className={styles.header}>
                    <Avatar size={30} src={article.user.avatar} />
                    <Text text={article.user.username} className={styles.username} />
                    <Text text={article.createdAt} className={styles.date} />
                </div>
                <Text title={article.title} className={styles.title} />
                {types}
                <img src={article.img} className={styles.img} alt={article.title} />
                {textBlock && (
                    <ArticleTextBlockComponent block={textBlock} className={styles.textBlock} />
                )}
                <div className={styles.footer}>
                    <Button onClick={onClickArticle} theme={ThemeButtonChanger.OUTLINE}>
                        {t('Читать далее...')}
                    </Button>
                    {views}
                </div>
            </Card>
        </div>
    );
}

  return (
    <div
    
      className={classNames(styles.ArticleListItem, {}, [
        className,
        styles[view],
      ])}
    >
      <Card className={styles.card}>
        <div className={styles.imageWrapper}>
          <img alt={article.title} src={article.img} className={styles.img} />
          <Text text={article.createdAt} className={styles.date} />
        </div>
        <div className={styles.infoWrapper}>
          {types}
          {views}
        </div>
        <Text text={article.title} className={styles.title} />
      </Card>
    </div>
  );
};
