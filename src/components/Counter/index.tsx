import { Minus, Plus } from '@phosphor-icons/react'
import { CouterStl } from './styles'
import { useState } from 'react'

export function Counter() {
  // interface Contador {
  //   count: number
  // }

  let [count, setCount] = useState(0)

  function handleMinusCounter() {
    setCount(--count)
  }

  function handlePlusCounter() {
    setCount(++count)
  }

  return (
    <CouterStl>
      <button onClick={handleMinusCounter}>
        <Minus size={14} />
      </button>
      <span>{count}</span>
      <button onClick={handlePlusCounter}>
        <Plus size={14} />
      </button>
    </CouterStl>
  )
}
