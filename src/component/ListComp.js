import React from 'react'
import { useSelector } from 'react-redux'
import { act_dandom } from '../actions';
import { useDispatch } from 'react-redux';
export default function ListComp() {
  const dispatch=useDispatch();
    const list=useSelector(state=>state.list);
  return (
    <div>
        <h2>Demo Redux 02</h2>
        <p>Array:{list.toString()}</p>
        <button onClick={()=>dispatch(act_dandom())}>Random</button>
    </div>
  )
}
