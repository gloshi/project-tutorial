import React, { FC, useMemo, useState } from 'react'
import { ThemeContext,Theme, LOCAL_STORAGE_THEME_KEY } from '../lib/ThemeContext'


const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

const ThemeProvider:FC = ({children}) => {

    const [theme,setTreme] = useState<Theme>(defaultTheme)

    const toggleTheme = () => {
      setTreme(theme === Theme.DARK? Theme.LIGHT : Theme.DARK)
    }

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme:setTreme
    }),[theme])

  return (
    <ThemeContext.Provider value={
        defaultProps
    }>
        {children}
    </ThemeContext.Provider >
  )
}

export default ThemeProvider