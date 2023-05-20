import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/classNames/classNames";

import styles from "./PageLoader.module.scss";
import Loader from "shared/ui/Loader/Loader";

interface PageLoaderProps {
  className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => {

  return (
    <div className={classNames(styles.PageLoader, {}, [className])}>
      <Loader/>
    </div>
  );
};

export default PageLoader;
