import { createSelector } from "@reduxjs/toolkit";
import { getUserAuth } from "entities/User";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import ProfileIcon from 'shared/assets/icons/profile-20-20.svg';
import ArticleIcon from 'shared/assets/icons/article-20-20.svg'
import { SidebarItemType } from "../Items";

export const getSideBarItem = createSelector(getUserAuth, (userdata) => {
    const SidebarItemsList: SidebarItemType[] = [
        {
            path: RoutePath.main,
            Icon: MainIcon,
            text: 'На главную',
        },
        {
            path: RoutePath.about,
            Icon: AboutIcon,
            text: 'О нас',
        },

    ];
    if (userdata) {
        SidebarItemsList.push({
            path: RoutePath.profile + userdata?.id,
            Icon: ProfileIcon,
            text: 'Профиль',
            authOnly: true
        },
            {
                path: RoutePath.articles,
                Icon: ArticleIcon,
                text: 'Статьи',
                authOnly: true
            },)
    }
    return SidebarItemsList
})