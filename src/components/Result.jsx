import React from 'react'
import { useGlobalContext } from '../context/context'
import { CgCopy } from 'react-icons/cg'
import { toast } from 'react-toastify'

const Result = () => {
  const { passWord } = useGlobalContext()
  return (
    <article className='card__result'>
      <p>{passWord}</p>
      <button
        type='button'
        className='btn__result'
        onClick={() => (
          toast.success('Kód byl vložen do schránky!'),
          navigator.clipboard.writeText(passWord)
        )}
      >
        <CgCopy />
      </button>
    </article>
  )
}

export default Result
