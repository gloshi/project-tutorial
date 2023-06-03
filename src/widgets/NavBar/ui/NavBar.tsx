import { classNames } from "shared/lib/classNames/classNames";

import styles from "./NavBar.module.scss";
import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, ThemeButtonChanger } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByName";
import { useDispatch, useSelector } from "react-redux";
import { getUserAuth, userActions } from "entities/User";

interface NavBarProps {
  className?: string;
}

export const NavBar = memo(({ className }: NavBarProps) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const authData = useSelector(getUserAuth);
  const dispatch = useDispatch();
  const onClose = useCallback(() => {
    setIsOpen(false);
  }, []);

  const onShow = useCallback(() => {
    setIsOpen(true);
  }, []);

  const onLogout = useCallback(() => {
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(styles.Navbar, {}, [])}>
        <Button
          theme={ThemeButtonChanger.CLEAR}
          onClick={onLogout}
          className={styles.links}
        >
          {t("Выйти")}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(styles.Navbar, {}, [])}>
      <Button
        theme={ThemeButtonChanger.CLEAR}
        onClick={onShow}
        className={styles.links}
      >
        {t("Войти")}
      </Button>
      {isOpen && <LoginModal isOpen={isOpen} onClose={onClose} />}
    </div>
  );
});
