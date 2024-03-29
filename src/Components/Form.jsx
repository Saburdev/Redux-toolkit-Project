import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createTodo } from '../redux/todosSlice'

export const Form = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()

    const submitHandler = (event) => {
        event.preventDefault()
        if (!value.trim()) return

        const todo = {
            id:Date.now(),
            title:value,
            completed:false        
        }
        dispatch(createTodo(todo))
    }
  return (
    <form  className="input-group flex h-screen w-full items-center" onSubmit={submitHandler} style={{width:500, margin: '20px auto'}}>
        <input className='input input-bordered' value={value} onChange={(event) => setValue(event.target.value)} placeholder='todo text here...' type="text"  style={{width:'100%'}}/>
        <button className='btn btn-outline'>add</button>
    </form>
  )
}