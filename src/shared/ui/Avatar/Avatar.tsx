import { Mods, classNames } from "shared/lib/classNames/classNames";

import styles from "./Avatar.module.scss";
import { CSSProperties, useMemo } from "react";

interface AvatarProps {
  className?: string;
  src?: string;
  size?: number;
  alt?: string
}

export const Avatar = ({ className, src, size,alt }: AvatarProps) => {
  const mods: Mods = {};
  const stylesObj = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      heigth: size || 100,
    }),
    [size]
  );
  return (
    <img
      src={src}
      style={ stylesObj }
      alt={alt? alt : 'image'}
      className={classNames(styles.Avatar, mods, [className])}
    />
  );
};