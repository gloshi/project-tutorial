import { classNames } from "shared/lib/classNames/classNames";

import styles from "./SideBar.module.scss";
import { memo, useState } from "react";
import { Theme } from "app/providers/ThemeProvider";
import { ThemeButton } from "shared/ui/ThemeButton";
import { LanguageSwitcher } from "shared/ui/LanguageSwitcher/LanguageSwitcher";
import { Button, ThemeButtonChanger } from "shared/ui/Button/Button";

import { useTranslation } from "react-i18next";
import { SidebarItemsList } from "../model/Items";
import { SideBarItem } from "../SideBarItem/SideBarItem";

interface SideBarProps {
  className?: string;
}

export const SideBar = memo(({ className }: SideBarProps) => {
 
  
  const [isVisible, setIsVisible] = useState(false);

  const onToggle = () => {
    setIsVisible((prev: any) => !prev);
  };

  return (
    <>
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
          {SidebarItemsList.map((item) => (
            <SideBarItem item={item} isVisible={isVisible} key={item.path} />
          ))}
        </div>
        <div className={styles.switchers}>
          <ThemeButton />
          <LanguageSwitcher short={isVisible} className={styles.lang} />
        </div>
      </div>
    </>
  );
});
