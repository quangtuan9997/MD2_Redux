import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import * as act from '../actions'
export default function CountComp() {
const count=useSelector(state=>state.count)
const dispatch=useDispatch();
  return (
    <div>
        <h2>Demo Redux 01</h2>
        <p>Current Value:{count}</p>
        <button onClick={()=>dispatch(act.act_up(5))} >Up</button>
        <button onClick={()=>dispatch(act.act_down(3))}>Down</button>
    </div>
  )
}
