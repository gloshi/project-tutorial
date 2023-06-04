import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Currency } from 'shared/conts/Currency';
import { Select } from 'shared/ui/Select/Select';

interface CurrencySelectProps {
  className?:string
  value?: Currency
  onChange?: (value: Currency) => void
  readOnly?: boolean
}

const options = [{ value: Currency.RUB, content:Currency.RUB },
    { value: Currency.EUR, content:Currency.EUR },
    { value: Currency.USD, content:Currency.USD }
  ]

export const CurrencySelect = memo(({className,value,onChange,readOnly}:CurrencySelectProps) => {
    const {t} = useTranslation()

    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Currency)
    },[value])

  return (
    <Select
    label={t("Укажите валюту")}
    options={options}
    value={value}
    onChange={onChangeHandler}
    readOnly={readOnly}
  />
  )
})