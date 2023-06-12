import { AboutPage } from 'pages/AboutPage'
import { ArticleDetailPage } from 'pages/ArticleDetailPage'
import { ArticlesPage } from 'pages/ArticlesPage'
import { ErrorPage } from 'pages/ErrorPage'
import { MainPage } from 'pages/MainPage'
import { ProfilePage } from 'pages/ProfilePage'

import { type RouteProps } from 'react-router-dom'


export type AppRouteProps = RouteProps & {
    authOnly?: boolean
}

export enum AppRoutes {
  MAIN = 'main',
  ABOUT = 'about',
  PROFILE = "profile",  
  ARTICLES = 'articles',
  ARTICLES_DETAILS = 'articles_details',  

  //last
  NOT_FOUND = 'error'  
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.MAIN]: '/',
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.PROFILE]: '/profile',
    [AppRoutes.ARTICLES]: '/articles',
    [AppRoutes.ARTICLES_DETAILS]: '/articles/', //:id
    [AppRoutes.NOT_FOUND]: '*',
}

export const routeConfig: Record<AppRoutes, AppRouteProps> = {
    [AppRoutes.MAIN]: {
        path: RoutePath.main,
        element: <MainPage />
    },
    [AppRoutes.ABOUT]: {
        path: RoutePath.about,
        element: <AboutPage />
    },
    [AppRoutes.PROFILE]: {
        path: RoutePath.profile,
        element: <ProfilePage />,
        authOnly: true
    },
    [AppRoutes.ARTICLES]: {
        path: RoutePath.articles,
        element: <ArticlesPage />,
        authOnly: true
    },
    [AppRoutes.ARTICLES_DETAILS]: {
        path: `${RoutePath.articles_details}:id`,
        element: <ArticleDetailPage />,
        authOnly: true
    },
    [AppRoutes.NOT_FOUND]: {
        path: RoutePath.error,
        element: <ErrorPage />
    },
   
   
}
