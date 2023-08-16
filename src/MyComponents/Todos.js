import React from 'react'
import TodoItem from '../MyComponents/TodoItem'

const Todos = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "10px auto"
  }
  console.log("From todos", typeof props.moveToTodo)
  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">Todos List </h3>
      {props.todos.length === 0 ? <h3>No todos to display</h3> :
        props.todos.map((todo) => {
          return (
          <>
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} moveToComplete={props.moveToComplete} moveTodo={props.moveToTodo}/> <hr />
          </>
          )
        })
      }
    </div>
  )
}

export default Todos
