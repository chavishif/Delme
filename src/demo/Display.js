import React from 'react'
import { useSelector } from 'react-redux'
import { selectCount } from './testSlice'

const Display = (props) => {
    const display = useSelector(selectCount)
  return (
    <div style={{width:'70%'}}>
        Display:
        <h1>{display}</h1>
        {props.n1}
        {props.n2}
    
        </div>
  )
}

export default Display