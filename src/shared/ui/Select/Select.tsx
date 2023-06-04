import { Mods, classNames } from "shared/lib/classNames/classNames";

import styles from "./Select.module.scss";
import { ChangeEvent, memo, useMemo } from "react";

export interface SelectOption {
  value: string;
  content: string;
}

interface SelectProps {
  className?: string;
  label?: string;
  options?: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  readOnly?: boolean
}

export const Select = memo((props: SelectProps) => {
  const { className, label, options, value, onChange,readOnly } = props;

    const onChangeOptions = (e:ChangeEvent<HTMLSelectElement>) => {
        onChange?.(e.target.value)
    }

  const optionList = useMemo(() => {
    return options?.map((el) => (
      <option key={el.value} value={el.value} className={styles.option}>
        {el.content}
      </option>
    ));
  }, [options]);

  const mods: Mods = {};

  return (
    <div className={classNames(styles.Wrapper, mods, [className])}>
      {label && <span className={styles.label}>{`${label}>`}</span>}
      <select disabled={readOnly} value={value} onChange={onChangeOptions} className={styles.select}>
        {optionList}
      </select>
    </div>
  );
});
