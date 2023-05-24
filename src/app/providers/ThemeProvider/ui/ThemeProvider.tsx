import React, { type FC, useMemo, useState } from 'react'
import { ThemeContext, Theme, LOCAL_STORAGE_THEME_KEY } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface ThemeProviderProps {
  initialTheme?: Theme
}


const ThemeProvider: FC<ThemeProviderProps> = ({ children,initialTheme }) => {
  const [theme, setTreme] = useState<Theme>( initialTheme || defaultTheme)

    const toggleTheme = () => {
    setTreme(theme === Theme.DARK ? Theme.LIGHT : Theme.DARK)
    }

    const defaultProps = useMemo(() => ({
        theme: theme,
        setTheme: setTreme
    }), [theme])

  return (
        <ThemeContext.Provider value={
            defaultProps
        }>
          {children}
      </ThemeContext.Provider >
  )
}

export default ThemeProvider
