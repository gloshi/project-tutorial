import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'

import './styles/index.scss'
import { AppRouter } from './providers/router'
import { NavBar } from 'widgets/NavBar'
import { SideBar } from 'widgets/SideBar'
import { Suspense, useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  useEffect(() => {
    dispatch(userActions.initAuthData())
  },[dispatch])

    return (
      <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
              <NavBar />
              <div className="content-page">
                    <SideBar />
                    <AppRouter />
                </div>
          </Suspense>
        </div>
  );
}

export default App
