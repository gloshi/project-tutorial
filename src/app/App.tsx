import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'

import './styles/index.scss'
import { AppRouter } from './providers/router'
import { NavBar } from 'widgets/NavBar'
import { SideBar } from 'widgets/SideBar'
import { Suspense, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Modal } from 'shared/ui/Modal/Modal'

const App = () => {
  const { theme } = useTheme()


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
