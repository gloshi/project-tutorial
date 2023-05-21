import { classNames } from "shared/lib/classNames/classNames";

import styles from "./SideBar.module.scss";
import { useState } from "react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeButton } from "shared/ui/ThemeButton";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher/LanguageSwitcher";
import { Button, ThemeButtonChanger } from "shared/ui/Button/Button";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import { useTranslation } from "react-i18next";
import { RoutePath } from "shared/config/routeConfig/routeConfig";

import AboutIcon from "shared/assets/icons/about-20-20.svg";
import MainIcon from "shared/assets/icons/main-20-20.svg";

interface SideBarProps {
  className?: string;
}

export const SideBar = ({ className }: SideBarProps) => {
  const { t } = useTranslation();

  const [isVisible, setIsVisible] = useState(false);

  const onToggle = () => {
    setIsVisible((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(
        Theme.LIGHT ? styles.SideBar : styles.SideBarDark,
        { [styles.isVisible]: isVisible },
        [className]
      )}
    >
      <Button
        data-testid="sidebarBtn"
        onClick={onToggle}
        className={styles.toggleBtn}
        theme={ThemeButtonChanger.BACKGROUND_INVERTED}
      >
        {isVisible ? ">" : "<"}
      </Button>
      <div className={styles.items}>
        <div>
          <AppLink
            theme={AppLinkTheme.SECONDARY}
            className={styles.item}
            to={RoutePath.main}
          >
            <MainIcon className={styles.icon} />
            <span className={styles.link}>{t("На главную")}</span>
          </AppLink>
        </div>
        <div>
          <AppLink
            className={styles.item}
            theme={AppLinkTheme.SECONDARY}
            to={RoutePath.about}
          >
            <AboutIcon className={styles.icon} />
            <span className={styles.link}>{t("О нас")}</span>
          </AppLink>
        </div>
      </div>
      <div className={styles.switchers}>
        <ThemeButton />
        <LanguageSwitcher short={isVisible} className={styles.lang} />
      </div>
    </div>
  );
};
