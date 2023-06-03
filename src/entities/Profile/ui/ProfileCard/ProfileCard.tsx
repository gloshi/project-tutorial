import { classNames } from "shared/lib/classNames/classNames";

import styles from "./ProfileCard.module.scss";
import { useSelector } from "react-redux";
import { getProfileData } from "entities/Profile/model/selectors/getProfileData/getProfileData";
import { useTranslation } from "react-i18next";
import { getProfileIsLoading } from "entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading";
import { getProfileError } from "entities/Profile/model/selectors/getProfileError/getProfileError";
import { Text } from "shared/ui/Text/Text";
import { Button, ThemeButtonChanger } from "shared/ui/Button/Button";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";
import { useEffect } from "react";
import { fetchProfileData } from "entities/Profile/model/services/fetchProfileData/fetchProfileData";
import { Input } from "shared/ui/Input/Input";

interface ProfileCardProps {
  className?: string;
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const data = useSelector(getProfileData);
  const loading = useSelector(getProfileIsLoading);
  const error = useSelector(getProfileError);
  const { t } = useTranslation('profile');
  const dispatch = useAppDispatch()
    useEffect(()=>{
      dispatch(fetchProfileData())
    },[dispatch])
    console.log(data)
  return (
    <div className={classNames(styles.ProfileCard, {}, [className])}>
      <div className={styles.header}>
        <Text title={t('Профиль')} />
        <Button className={styles.editBtn} theme={ThemeButtonChanger.OUTLINE}>
          {t('Редактировать')}
        </Button>
      </div>
      <div className={styles.data}>
          <Input value={data?.first} placeholder={t('Ваше имя')} className={styles.input}/>
          <Input value={data?.lastname} placeholder={t('Ваше имя')} className={styles.input}/>
          <Input value={data?.first} placeholder={t('Ваше имя')} className={styles.input}  />
          <Input value={data?.first} placeholder={t('Ваше имя')} className={styles.input} />
      </div>
    </div>
  );
};
