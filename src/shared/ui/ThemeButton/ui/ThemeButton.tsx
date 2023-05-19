import { classNames } from "shared/lib/classNames/classNames";
import { Theme, useTheme } from "app/providers/ThemeProvider";
import styles from "./ThemeButton.module.scss";
import Light from 'shared/assets/icons/theme-light.svg'
import Dark from 'shared/assets/icons/theme-dark.svg'
import { Button, ThemeButtonChanger } from "shared/ui/Button/Button";


interface ThemeButtonProps {
  className?: string;
}

export const ThemeButton = ({ className }: ThemeButtonProps) => {
  console.log(className)
  const {theme, toggleTheme } = useTheme();

  return (
    <Button
    theme={ThemeButtonChanger.CLEAR}
      className={classNames(styles.ThemeButton, {}, [className])}
      onClick={toggleTheme}
    >
       {theme === Theme.DARK ? <Dark/> : <Light/>} 
    </Button>
  );
};
