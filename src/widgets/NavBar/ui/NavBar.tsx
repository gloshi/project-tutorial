import { classNames } from "shared/lib/classNames/classNames";

import styles from "./NavBar.module.scss";
import { Modal } from "shared/ui/Modal/Modal";
import { useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ThemeButtonChanger } from "shared/ui/Button/Button";

interface NavBarProps {
  className?: string;
}

export const NavBar = ({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const onToggleModal = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <div className={classNames(styles.Navbar, {}, [])}>
      <Button theme={ThemeButtonChanger.CLEAR} onClick={onToggleModal} className={styles.links}>
        {t("Войти")}
      </Button>
      <Modal isOpen={isOpen} onClose={onToggleModal} />
    </div>
  );
};
