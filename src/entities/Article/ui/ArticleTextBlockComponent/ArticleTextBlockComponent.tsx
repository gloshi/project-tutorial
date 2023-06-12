import { classNames } from 'shared/lib/classNames/classNames';

import styles from './ArticleTextBlockComponent.module.scss'
import { memo } from 'react';
import { ArticleTextBlock } from 'entities/Article/model/types/article';
import { Text } from 'shared/ui/Text/Text';

interface ArticleTextBlockComponentProps {
  className?:string
  block: ArticleTextBlock
}

export const ArticleTextBlockComponent = memo((props:ArticleTextBlockComponentProps) => {

  const {className,block} = props

  return (
    <div className={classNames(styles.ArticleTextBlockComponent, {}, [className])}>
    {block.title && (
      <Text title={block.title} className={styles.title} />
    )}
    {block.paragraphs && block.paragraphs.map((el,i) => (
      <Text key={i} text={el}  className={styles.paragraph}/>
    ))}
    </div>
  )
})