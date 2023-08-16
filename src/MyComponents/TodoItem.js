import React from 'react'

const TodoItem = ({todo, onDelete, moveToComplete, showComplete, moveToTodo}) => {
  return (
    <div>
        <h4>{todo.title}</h4>
        <p>{todo.desc}</p>
        <button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button>
        {/* Make another function called "move_to_completed", and then call the delete. Make another object
        for the move_to_complete and save it to local storage and put a useEffect hook on it*/}
        {showComplete === false ? <button className="btn btn-sm btn-success" style={{margin: "0 0 0 5px"}} onClick={()=>{moveToTodo(todo)}}>Mark as uncompleted</button> : <button className="btn btn-sm btn-success" style={{margin: "0 0 0 5px"}} onClick={()=>{moveToComplete(todo)}}>Mark completed</button>}
    </div>
  )
}

export default TodoItem
