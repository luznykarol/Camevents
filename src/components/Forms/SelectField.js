import React from 'react'

const SelectField = (props) => {
  const {
    label,
    name,
    error,
    type,
    placeholder,
    required,
    onChange,
    errorMessage,
    register,
    value,
    className,
    errorLeft,
    options,
  } = props

  const inputError = error && (
    <span
      className={
        errorLeft ? 'field__error field__error--left' : 'field__error'
      }>
      {errorMessage}
    </span>
  )
  return (
    <div className={className ? `field ${className}` : 'field'}>
      <label className='field__label' htmlFor={name}>
        {label}
      </label>
      <select
        className={
          !error
            ? 'field__input bg-white border-grey-input '
            : 'field__input bg-white border-red'
        }
        onChange={onChange}
        type={type}
        name={name}
        id={name}
        defaultValue={value}
        ref={register}
        placeholder={placeholder}
        required={required}>
        <option value='' selected>
          Select Reason
        </option>
        {options.map((option, i) => {
          let isObject = typeof option !== 'string'
          return (
            <option key={i} value={isObject ? option.value : option}>
              {isObject ? option.label : option}
            </option>
          )
        })}
      </select>
      {inputError}
    </div>
  )
}

export default SelectField
