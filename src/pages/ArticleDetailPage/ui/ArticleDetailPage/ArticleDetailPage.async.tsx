import { lazy } from "react";

export const ArticleDetailPageAsync = lazy( () => new Promise((resolve) => {
     // @ts-ignore
    setTimeout(() => resolve(import('./ArticleDetailPage')), 500);
}))  
