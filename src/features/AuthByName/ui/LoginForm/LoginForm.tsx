import { classNames } from "shared/lib/classNames/classNames";

import styles from "./LoginForm.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButtonChanger } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { useDispatch, useSelector, useStore } from "react-redux";
import { memo, useCallback, useEffect } from "react";
import { loginActions, loginReducer } from "features/AuthByName/model/slice/loginSlice";
import { getLoginState } from "features/AuthByName/model/selectors/getLogin/getLoginState";
import { loginByUserName } from "features/AuthByName/services/loginByUsername/loginByUsername";
import { Text, TextTheme } from "shared/ui/Text/Text";
import {  ReduxStoreWithManager } from "app/providers/StoreProvider/config/StateSheme";
import { getLoginUsername } from "features/AuthByName/model/selectors/getLoginUsername/getLoginUsername";
import { getLoginPassword } from "features/AuthByName/model/selectors/getLoginPassword/getLoginPassword";
import { getLoginIsLoading } from "features/AuthByName/model/selectors/getLoginIsLoading/getLoginIsLoading";
import { getLoginError } from "features/AuthByName/model/selectors/getLoginError/getLoginError";
import { DynamicModuleLoader, ReducerList } from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";

export interface LoginFormProps {
  className?: string;
}

const initialReducers:ReducerList = {
  loginForm: loginReducer,
}

const LoginForm = memo(({ className }: LoginFormProps) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  
  const username = useSelector(getLoginUsername)
  const password = useSelector(getLoginPassword)
  const isLoading = useSelector(getLoginIsLoading)
  const error = useSelector(getLoginError)

 
  console.log(error)
  const loginForm = useSelector(getLoginState);
  
  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );
  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );
  const onClickLogin = useCallback(() => {
    dispatch(loginByUserName({username,password}))
  }, [username,password,dispatch]);
  return (
    <DynamicModuleLoader removeAfterUnmount={true}  reducers={initialReducers}>
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Text title={t('Форма авторизации')} />
      {error !== 'error' && <Text text={error} theme={TextTheme.ERROR} />}
      <Input
        autoFocus
        placeholder={t("Введите имя")}
        className={styles.input}
        onChange={onChangeUsername}
        value={username}
        type="text"
      />
      <Input
        onChange={onChangePassword}
        placeholder={t("Введите пароль")}
        className={styles.input}
        value={password}
        type="text"
      />
      <Button
        onClick={onClickLogin}
        theme={ThemeButtonChanger.OUTLINE}
        className={styles.loginBtn}
        disabled={isLoading}
      >
        {t("Войти")}
      </Button>
    </div>
    </DynamicModuleLoader>
  );
});
export default LoginForm