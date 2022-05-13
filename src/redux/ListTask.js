import React from 'react'
import {useSelector} from 'react-redux'
import Task from './Task'

function ListTask(){
    const todos = useSelector(state=>state.todos)
    console.log(todos)
    return(
        <div>
            <ul className='list-group'>
                {
                    todos.map((el)=>(<Task todo={el}/>))
                }

            </ul>
        </div>
    )
}

export default ListTask