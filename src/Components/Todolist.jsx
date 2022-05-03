import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteTodo, getTodos, toggleTodo } from '../redux/todosSlice'

export const Todolist = () => {
    const {todos} = useSelector(state => state)
    const dispatch = useDispatch() 
  return (
    <ul className='bg-base-100 border rounded-box'  style={{width:500, margin:'auto'}}>
        <button onClick={() => dispatch(getTodos())}>fetch todos</button>
        {todos.map((todo , index) => {
            return (
                <li style={{display:'flex' , justifyContent:'space-between'}} key={todo.id}>{todo.title}
                    <span className=''>
                        <button className='btn btn-outline  mx-2' onClick={() => dispatch(toggleTodo(todo.id))}>check</button>
                        <button className='btn btn-outline' onClick={() => dispatch(deleteTodo(todo.id))}>delete</button>
                    </span>
                  </li>
            )
        })}
    </ul>
  )
}