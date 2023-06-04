import { Country } from 'entities/Country/model/types/country';
import { memo, useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { Select } from 'shared/ui/Select/Select';

interface CountrySelectProps {
  className?:string
  value?: Country | string
  onChange?: (value: Country) => void
  readOnly?: boolean
}

const options = [{ value: Country.Russia, content:Country.Russia },
    { value: Country.Ukraine, content:Country.Ukraine },
    { value: Country.Armenia, content:Country.Armenia },
    { value: Country.Belarus, content:Country.Belarus },
    { value: Country.Kazakhstan, content:Country.Kazakhstan },
    
  ]

export const CountrySelect = memo(({className,value,onChange,readOnly}:CountrySelectProps) => {
    const {t} = useTranslation()

    const onChangeHandler = useCallback((value:string) => {
        onChange?.(value as Country)
    },[value])

  return (
    <Select
    label={t("Укажите страну")}
    options={options}
    value={value}
    onChange={onChangeHandler}
    readOnly={readOnly}
  />
  )
})