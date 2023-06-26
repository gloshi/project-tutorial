import { classNames } from "shared/lib/classNames/classNames";

import styles from "./CommentList.module.scss";
import { memo } from "react";
import { Text } from "shared/ui/Text/Text";
import { useTranslation } from "react-i18next";
import { CommentCard } from "../CommentCard/CommentCard";
import { Comment } from "entities/Comment/model/types/comment";

interface CommentListProps {
  className?: string;
  comments?: Comment[];
  isLoading?: boolean;
}

export const CommentList = memo((props: CommentListProps) => {
  const { t } = useTranslation("comments");
  const { className, comments, isLoading } = props;

  if (isLoading) {
    return (
      <div className={classNames(styles.CommentList, {}, [className])}>
        <CommentCard  isLoading />
        <CommentCard  isLoading />
        <CommentCard  isLoading />
        <CommentCard  isLoading />
      </div>
    );
  }

  return (
    <div className={classNames(styles.CommentList, {}, [className])}>
      {comments?.length ? (
        comments.map((el) => (
          <CommentCard
            className={styles.commnet}
            isLoading={isLoading}
            comment={el}
          />
        ))
      ) : (
        <Text text={t("Комментарии отсутвуют")} />
      )}
    </div>
  );
});
