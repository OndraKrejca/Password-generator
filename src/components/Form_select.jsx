import React from 'react'

const FormSelect = ({
  name,
  type,
  classa,
  value,
  handleChange,
  id,
  textItem,
}) => {
  return (
    <div className='forms__uppercase'>
      <label htmlFor={name}>
        <input
          type={type}
          className={classa}
          value={value}
          onChange={handleChange}
          id={id}
          name={name}
        ></input>
        {textItem}
      </label>
    </div>
  )
}

export default FormSelect
