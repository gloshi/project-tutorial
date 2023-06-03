import { classNames } from 'shared/lib/classNames/classNames';

import styles from './ProfilePage.module.scss'
import { useTranslation } from 'react-i18next';
import { DynamicModuleLoader, ReducerList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/Profile';
import { useEffect } from 'react';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';


const reducers: ReducerList = {
  profile: profileReducer
}

interface ProfilePageProps {
  className?:string
}

const ProfilePage = ({className}:ProfilePageProps) => {

    const {t} = useTranslation('profile')
    const dispatch = useAppDispatch()
    useEffect(()=>{
      dispatch(fetchProfileData())
    },[dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount>
    <div className={classNames(styles.ProfilePage, {}, [className])}>
        <ProfileCard/>
    </div>
    </DynamicModuleLoader>
  )
}
export default ProfilePage

