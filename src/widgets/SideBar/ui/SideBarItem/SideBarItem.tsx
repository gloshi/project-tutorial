import MainIcon from "shared/assets/icons/main-20-20.svg";
import styles from "./SideBarItem.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { RoutePath } from "shared/config/routeConfig/routeConfig";
import { useTranslation } from "react-i18next";
import { SidebarItemType } from "../model/Items";
import { classNames } from "shared/lib/classNames/classNames";
import { memo } from "react";

interface SideBarItemsProps {
  item?: SidebarItemType;
  isVisible?: boolean;
}
// @ts-ignore какой-то баг с item
export const SideBarItem = memo(({ item, isVisible }: SideBarItemsProps) => {
  const { t } = useTranslation();

  if(!item){
    return
  }

  return (
    <div>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        className={classNames(styles.item, { [styles.isVisible]: isVisible })}
        to={item.path}
      >
        <item.Icon className={styles.icon} />
        <span className={styles.link}>{t(item.text)}</span>
      </AppLink>
    </div>
  );
});
