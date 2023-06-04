import { classNames } from 'shared/lib/classNames/classNames';

import styles from './ProfilePageHeader.module.scss'
import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text/Text';
import { Button, ThemeButtonChanger } from 'shared/ui/Button/Button';
import { useSelector } from 'react-redux';
import { getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile';
import { useCallback } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';

interface ProfilePageHeaderProps {
  className?:string
}

export const ProfilePageHeader = ({className}:ProfilePageHeaderProps) => {
    const { t } = useTranslation("profile");
    const readonly = useSelector(getProfileReadOnly)

    const dispatch = useAppDispatch()

    const onEdit = useCallback(() => {
      dispatch(profileActions.setReadonly(false))
    },[dispatch])
    const onCancel = useCallback(() => {
      dispatch(profileActions.cancelEdit())
    },[dispatch])

    const onChangeInputs = useCallback(() => {
      dispatch(updateProfileData())
    },[dispatch])

  return (
    <div className={classNames(styles.ProfilePageHeader, {}, [className])}>
     
        <Text title={t("Профиль")} />
        {readonly? <>
          <Button onClick={onEdit} className={styles.editBtn} theme={ThemeButtonChanger.OUTLINE}>
          {t("Редактировать")}
        </Button>
        </> : <>
        <Button onClick={onCancel} className={styles.editBtn} theme={ThemeButtonChanger.OUTLINE_RED}>
          {t("Отменить")}
        </Button>
        <Button onClick={onChangeInputs} className={styles.saveBtn} theme={ThemeButtonChanger.OUTLINE}>
          {t("Сохранить")}
        </Button>
        </>
        }

    </div>
  )
}