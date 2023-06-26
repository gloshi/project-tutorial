import { lazy,FC } from "react";
import { ArticleDetailPageProps } from "./ArticleDetailPage";

export const ArticleDetailPageAsync = lazy<FC<ArticleDetailPageProps>>( () => new Promise((resolve) => {
     // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailPage')), 500);
}))  
