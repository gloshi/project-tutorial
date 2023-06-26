import { Mods, classNames } from "shared/lib/classNames/classNames";

import styles from "./ProfileCard.module.scss";
import { useTranslation } from "react-i18next";
import { Text, TextAlign, TextTheme } from "shared/ui/Text/Text";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useEffect } from "react";
import { fetchProfileData } from "entities/Profile/model/services/fetchProfileData/fetchProfileData";
import { Input } from "shared/ui/Input/Input";
import { Profile } from "entities/Profile/model/types/profile";
import Loader from "shared/ui/Loader/Loader";
import { ProfilePageHeader } from "pages/ProfilePage/ui/ProfilePageHeader/ProfilePageHeader";
import { Avatar } from "shared/ui/Avatar/Avatar";
import { Select } from "shared/ui/Select/Select";
import { Currency } from "shared/conts/Currency";
import { CurrencySelect } from "entities/Currency/ui/CurrencySelect/CurrencySelect";
import { Country } from "shared/conts/Country";
import { CountrySelect } from "entities/Country";
import { useParams } from "react-router-dom";

interface ProfileCardProps {
  className?: string;
  data?: Profile;
  isLoading?: boolean;
  error?: string;
  onChangeLastname?: (value?: string) => void;
  onChangeFirstname?: (value?: string) => void;
  onChangeAge?: (value?: string) => void;
  onChangeCity?: (value?: string) => void;
  onChangeCountry?: (value?: Country) => void;
  onChangeAvatar?: (value?: string) => void;
  onChangeUsername?: (value?: string) => void;
  onChangeCurrency?: (currency?: Currency) => void;
  readOnly?: boolean;
}

interface KeyboardEvent {
  preventDefault(): void;
  key: string;
}
export const ProfileCard = (props: ProfileCardProps) => {
  const {
    className,
    data,
    isLoading,
    error,
    readOnly,
    onChangeLastname,
    onChangeFirstname,
    onChangeAge,
    onChangeCity,
    onChangeCountry,
    onChangeAvatar,
    onChangeUsername,
    onChangeCurrency
  } = props;
  const { t } = useTranslation("profile");
  const { id } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();
  const onlyNumbers = (e: KeyboardEvent) => {
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };
  useEffect(() => {
    if(id){
      dispatch(fetchProfileData(id));
    }

  }, [dispatch]);

  const mods: Mods = {
    [styles.editing]: !readOnly,
  };

  if (isLoading) {
    return (
      <div
        className={classNames(styles.ProfileCard, { [styles.loading]: true }, [
          className,
        ])}
      >
        <Loader />
      </div>
    );
  }

  if (error) {
    return (
      <div
        className={classNames(styles.ProfileCard, {}, [
          className,
          styles.error,
        ])}
      >
        <Text
          theme={TextTheme.ERROR}
          title={error}
          text="Попробуйте обновить страницу/refresh page"
          align={TextAlign.CENTER}
        />
      </div>
    );
  }

  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <ProfilePageHeader />
      <div className={classNames(styles.header, mods, [className])}>
        <div className={styles.data}>
          <div className={styles.avatarWrapper}>
            {data?.avatar && <Avatar src={data?.avatar} />}
          </div>
          <Input
            value={data?.first}
            placeholder={t("Ваше имя")}
            className={styles.input}
            onChange={onChangeFirstname}
            readOnly={readOnly}
          />
          <Input
            value={data?.lastname}
            placeholder={t("Ваша фамилия")}
            className={styles.input}
            onChange={onChangeLastname}
            readOnly={readOnly}
          />
          <Input
            value={data?.age}
            placeholder={t("Ваш возраст")}
            className={styles.input}
            onChange={onChangeAge}
            readOnly={readOnly}
            onKeyPress={onlyNumbers}
          />
          <Input
            value={data?.city}
            placeholder={t("Ваш город")}
            className={styles.input}
            onChange={onChangeCity}
            readOnly={readOnly}
          />
          <Input
            value={data?.avatar}
            placeholder={t("Аватар")}
            className={styles.input}
            onChange={onChangeAvatar}
            readOnly={readOnly}
          />
          <Input
            value={data?.username}
            placeholder={t("Имя пользователя")}
            className={styles.input}
            onChange={onChangeUsername}
            readOnly={readOnly}
          />
          <CurrencySelect
          className={styles.input} 
          value={data?.currency} 
          onChange={onChangeCurrency}
          readOnly={readOnly} />
          <CountrySelect
          className={styles.input} 
          value={data?.country} 
          onChange={onChangeCountry}
          readOnly={readOnly} />
        </div>
      </div>
    </div>
  );
};
