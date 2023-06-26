import { classNames } from "shared/lib/classNames/classNames";

import styles from "./ProfilePage.module.scss";
import { useTranslation } from "react-i18next";
import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  ProfileCard,
  ValidateProfileErr,
  fetchProfileData,
  getProfileForm,
  getProfileReadOnly,
  getProfileValidateError,
  profileActions,
  profileReducer,
} from "entities/Profile";
import { useCallback, useEffect } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { Country } from "shared/conts/Country";
import { Currency } from "entities/Currency";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { useInitialEffect } from "shared/lib/hooks/useInitialEffect";
import { useParams } from "react-router-dom";

const reducers: ReducerList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const { t } = useTranslation("profile");

  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readOnly = useSelector(getProfileReadOnly);
  const dataForm = useSelector(getProfileForm);
  const validateErr = useSelector(getProfileValidateError);
  const { id } = useParams<{ id: string }>();



  const validateText = {
    [ValidateProfileErr.SERVER_ERROR]: t("Ошибка сервера"),
    [ValidateProfileErr.INCORRECT_COUNTRY]: t("Некорректная страна"),
    [ValidateProfileErr.NO_DATA]: t("Заполните все поля"),
    [ValidateProfileErr.INCORRECT_USER_DATA]: t("Поля имя и фамилия должны быть заполненны"),
    [ValidateProfileErr.INCORRECT_AGE]: t("Некорректный возраст"),
  };

  const dispatch = useAppDispatch();

  useInitialEffect(() => {
    if(id){
      dispatch(fetchProfileData(id));
    }
  })



  const onChangeFirstname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ first: value || "" }));
    },
    [dispatch]
  );
  const onChangeLastname = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ lastname: value || "" }));
    },
    [dispatch]
  );
  const onChangeAge = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ age: Number(value || "") }));
      console.log(value);
    },
    [dispatch]
  );
  const onChangeCity = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ city: value || "" }));
    },
    [dispatch]
  );
  const onChangeCountry = useCallback(
    (country?: Country) => {
      dispatch(profileActions.updateProfile({ country }));
    },
    [dispatch]
  );
  const onChangeAvatar = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ avatar: value || "" }));
    },
    [dispatch]
  );
  const onChangeUsername = useCallback(
    (value?: string) => {
      dispatch(profileActions.updateProfile({ username: value || "" }));
    },
    [dispatch]
  );
  const onChangeCurrency = useCallback(
    (currency?: Currency) => {
      dispatch(profileActions.updateProfile({ currency }));
    },
    [dispatch]
  );
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(styles.ProfilePage, {}, [className])}>
        {validateErr?.length &&
          validateErr.map((el) => (
            <Text theme={TextTheme.ERROR} key={el} text={validateText[el]} />
          ))}
        <ProfileCard
          onChangeLastname={onChangeLastname}
          onChangeFirstname={onChangeFirstname}
          onChangeAge={onChangeAge}
          onChangeCountry={onChangeCountry}
          onChangeAvatar={onChangeAvatar}
          onChangeCity={onChangeCity}
          onChangeUsername={onChangeUsername}
          onChangeCurrency={onChangeCurrency}
          data={dataForm}
          isLoading={isLoading}
          error={error}
          readOnly={readOnly}
        />
      </div>
    </DynamicModuleLoader>
  );
};
export default ProfilePage;
