import { classNames } from 'shared/lib/classNames/classNames';

import styles from './ArticleImageBlockComponent.module.scss'
import { memo } from 'react';
import { ArticleImageBlock } from 'entities/Article/model/types/article';
import { Text, TextAlign } from 'shared/ui/Text/Text';

interface ArticleImageBlockComponentProps {
  className?:string
  block: ArticleImageBlock
}

export const ArticleImageBlockComponent = memo((props:ArticleImageBlockComponentProps) => {
  const {className,block} = props
  return (
    <div className={classNames(styles.ArticleImageBlockComponent, {}, [className])}>
      <img alt={block.title} src={block.src} className={styles.img} />
      {block.title && (
        <Text text={block.title} align={TextAlign.CENTER} />
      )}
    </div>
  )
})