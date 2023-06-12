import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from './providers/ThemeProvider'

import './styles/index.scss'
import { AppRouter } from './providers/router'
import { NavBar } from 'widgets/NavBar'
import { SideBar } from 'widgets/SideBar'
import { Suspense, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInit, userActions } from 'entities/User'
import { useNavigate } from 'react-router-dom'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()
  const init = useSelector(getUserInit)
  
  useEffect(() => {
    dispatch(userActions.initAuthData())
  },[dispatch])

    return (
      <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
              <NavBar />
              <div className="content-page">
                    <SideBar />
                    {init && <AppRouter /> }
                </div>
          </Suspense>
        </div>
  );
}

export default App
