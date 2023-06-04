import { classNames } from "shared/lib/classNames/classNames";

import styles from "./ProfilePage.module.scss";
import { useTranslation } from "react-i18next";
import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import {
  ProfileCard,
  fetchProfileData,
  getProfileForm,
  getProfileReadOnly,
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

const reducers: ReducerList = {
  profile: profileReducer,
};

interface ProfilePageProps {
  className?: string;
}

const ProfilePage = ({ className }: ProfilePageProps) => {
  const data = useSelector(getProfileData);
  const isLoading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const readOnly = useSelector(getProfileReadOnly);
  const dataForm = useSelector(getProfileForm);
  const { t } = useTranslation("profile");

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchProfileData());
  }, [dispatch]);

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
      
      dispatch(profileActions.updateProfile({ age:  Number(value || "")}));
      console.log(value)
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
      dispatch(profileActions.updateProfile({ country}));
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
      dispatch(profileActions.updateProfile({ currency}));
    },
    [dispatch]
  );
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
      <div className={classNames(styles.ProfilePage, {}, [className])}>
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
