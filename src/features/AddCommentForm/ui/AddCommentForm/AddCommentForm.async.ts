import { FC, lazy } from 'react';

export const AddCommentFormAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // ТАК В РЕАЛЬНЫХ ПРОЕКТАХ НЕ ДЕЛАТЬ!!!!! ДЕЛАЕМ ДЛЯ КУРСА!
    setTimeout(() => resolve(import('./AddCommentForm')), 1500);
}));