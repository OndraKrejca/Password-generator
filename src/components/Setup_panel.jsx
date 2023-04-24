import React from 'react'
import FormSelect from './Form_select'
import { useGlobalContext } from '../context/context'

const Setup_panel = () => {
  const { passLength, handleChange } = useGlobalContext()

  return (
    <section className='card_setup'>
      <article className='c-setup__forms'>
        <form>
          <label htmlFor='rangeForm'>
            <input
              type='range'
              value={passLength}
              onChange={handleChange}
              id='rangeForm'
              name='passLength'
              max={20}
            />
          </label>
          <FormSelect
            type={'checkbox'}
            classa={'Doplnit'}
            value={'passUpper'}
            handleChange={handleChange}
            id={'passUpper'}
            name={'passUpper'}
            textItem={'Include UpperCase letters'}
          />
          <FormSelect
            type={'checkbox'}
            classa={'Doplnit'}
            value={'passLower'}
            handleChange={handleChange}
            id={'passLower'}
            name={'passLower'}
            textItem={'Include LowerCase letters'}
          />
          <FormSelect
            type={'checkbox'}
            classa={'Doplnit'}
            value={'passNumbers'}
            handleChange={handleChange}
            id={'passNumbers'}
            name={'passNumbers'}
            textItem={'Include numbers'}
          />
          <FormSelect
            type={'checkbox'}
            classa={'Doplnit'}
            value={'passSymbols'}
            handleChange={handleChange}
            id={'passSymbols'}
            name={'passSymbols'}
            textItem={'Include symbols'}
          />

          <div>
            <div>
              <p>strenght</p>
            </div>

            <div>
              <p>{'medium'}</p>

              <div>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          <button>Generate</button>
        </form>
      </article>
    </section>
  )
}

export default Setup_panel
