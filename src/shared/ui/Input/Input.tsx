import { classNames } from "shared/lib/classNames/classNames";

import styles from "./Input.module.scss";
import { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";

type HtmlInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange"
>;

interface InputProps extends HtmlInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
}

export const Input = memo((props: InputProps) => {
  const {
    className,
    value,
    onChange,
    type = "text",
    placeholder,
    autoFocus,
    ...otherProps
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const [caretPos, setCaretPos] = useState(0);
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (autoFocus) {
      setIsFocused(true);
      ref.current.focus()
    }
  }, [autoFocus]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
    setCaretPos(e.target.value.length);
  };

  const onBlur = () => {
    setIsFocused(false);
  };

  const onFocus = () => {
    setIsFocused(true);
  };

  const onSelect = (e: any) => {
    setCaretPos(e?.target?.selectionStart || 0);
  };

  return (
    <div className={classNames(styles.InputWrapper, {}, [className])}>
      {placeholder && (
        <div className={styles.placeholder}>{`${placeholder}>`} </div>
      )}
      <div className={styles.caretWrapper}>
        <input
          ref={ref}
          className={styles.input}
          type={type}
          value={value}
          onChange={onChangeHandler}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          {...otherProps}
        />
        {isFocused && (
          <span
            style={{ left: `${caretPos * 9}px` }}
            className={styles.caret}
          ></span>
        )}
      </div>
    </div>
  );
});
