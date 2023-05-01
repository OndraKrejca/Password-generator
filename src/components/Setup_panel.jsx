import React from 'react'
import FormSelect from './Form_select'
import { useGlobalContext } from '../context/context'

const Setup_panel = () => {
  const { passLength, handleChange, handleSubmit, sign } = useGlobalContext()

  return (
    <section className='card_setup'>
      <article className='c-setup__forms'>
        <form onSubmit={handleSubmit}>
          <label htmlFor='rangeForm' className='forms__rangeForm'>
            <div className='f-rangeForm--box'>
              <p className='f-rangeForm--title'>Délka hesla</p>
              <p className='f-rangeForm--number'>{passLength}</p>
            </div>
            <input
              type='range'
              value={passLength}
              onChange={handleChange}
              id='rangeForm'
              name='passLength'
              max={20}
              className='f-rangeForm--input'
            />
          </label>
          <FormSelect
            type={'checkbox'}
            classa={'Doplnit'}
            value={'passUpper'}
            handleChange={handleChange}
            id={'passUpper'}
            name={'passUpper'}
            textItem={'Zahrnout velká písmena'}
          />
          {/* <FormSelect
            type={'checkbox'}
            classa={'Doplnit'}
            value={'passLower'}
            handleChange={handleChange}
            id={'passLower'}
            name={'passLower'}
            textItem={'Include LowerCase letters'}
          /> */}
          <FormSelect
            type={'checkbox'}
            classa={'Doplnit'}
            value={'passNumbers'}
            handleChange={handleChange}
            id={'passNumbers'}
            name={'passNumbers'}
            textItem={'Zahrnout čísla'}
          />
          <FormSelect
            type={'checkbox'}
            classa={'Doplnit'}
            value={'passSymbols'}
            handleChange={handleChange}
            id={'passSymbols'}
            name={'passSymbols'}
            textItem={'Zahrnout symboly'}
          />

          <div className='c-setup__box--strenght'>
            <div className='c-setup__box--text'>
              <p>síla</p>
            </div>

            <div className='c-setup__box--diff'>
              <p>
                {sign.length === 0
                  ? 'velmi slabé'
                  : sign.length === 1
                  ? 'slabé'
                  : sign.length === 2
                  ? 'střední'
                  : 'silné'}
              </p>

              <div className='c-setup__box--graph'>
                {sign.map((_, index) => {
                  return <span key={index} className='item__alert' />
                })}
                <span className='span__alert'></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>

          <button type='submit' className='btn'>
            Generovat
          </button>
        </form>
      </article>
    </section>
  )
}

export default Setup_panel
