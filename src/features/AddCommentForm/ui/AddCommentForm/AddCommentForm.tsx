import { classNames } from "shared/lib/classNames/classNames";

import styles from "./AddCommentForm.module.scss";
import {
  DynamicModuleLoader,
  ReducerList,
} from "shared/lib/components/DynamicModuleLoader/DynamicModuleLoader";
import { Input } from "shared/ui/Input/Input";
import { Button, ThemeButtonChanger } from "shared/ui/Button/Button";
import { useTranslation } from "react-i18next";
import {
  addCommentFormActions,
  addCommentFormReducer,
} from "features/AddCommentForm/model/slices/AddCommentFormSlice";
import { useSelector } from "react-redux";
import {
  getAddCommentFormError,
  getAddCommentFormText,
} from "features/AddCommentForm/model/selectors/AddCommentFormSelectors";
import { useCallback } from "react";
import { useAppDispatch } from "shared/lib/hooks/useAppDispatch";

interface AddCommentFormProps {
  className?: string;
  onSendComment: (text: string) => void
}

const reducers: ReducerList = {
  addCommentForm: addCommentFormReducer,
};

const AddCommentForm = ({ className,onSendComment }: AddCommentFormProps) => {
  const { t } = useTranslation();
  const text = useSelector(getAddCommentFormText);
  const error = useSelector(getAddCommentFormError);
  const dispatch = useAppDispatch();

  const onCommentChange = useCallback(
    (value: string) => {
      dispatch(addCommentFormActions.setText(value));
    },
    [dispatch]
  );

    const onSendHandler = useCallback(() => {
        onSendComment(text || '')
        onCommentChange('')
    },[text])

  return (
    <div className={classNames(styles.AddCommentForm, {}, [className])}>
      <DynamicModuleLoader reducers={reducers}>
        <div className={classNames(styles.AddCommentForm, {}, [className])}>
          <Input
            className={styles.input}
            placeholder={t("Введите текст комментария")}
            value={text}
            onChange={onCommentChange}
          />
          <Button onClick={onSendHandler} theme={ThemeButtonChanger.OUTLINE}>
            {t("Отправить")}
          </Button>
        </div>
      </DynamicModuleLoader>
    </div>
  );
};
export default AddCommentForm;
