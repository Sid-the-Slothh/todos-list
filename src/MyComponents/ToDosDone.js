import React from 'react'
import TodoItem from './TodoItem'

const ToDosDone = (props) => {
  let myStyle = {
    minHeight: "70vh",
    margin: "10px auto"
  }
  
  console.log("This is from ToDosDone, moveToTodo: ", props.moveToTodo);

  return (
    <div className="container" style={myStyle}>
      <h3 className="my-3">ToDos Completed </h3>
      {props['todosDone'].length === 0 ? <h3>No todos completed</h3> :
        props['todosDone'].map((todo) => {
          return (
          <>
            <TodoItem todo={todo} key={todo.sno} onDelete={props.onDeleteComp} showComplete={false} moveToComplete={props.moveToComplete} moveToTodo={props.moveToTodo}/> <hr />
          </>
          )
        })
      }
    </div>
  )
}

export default ToDosDone;

// import React from 'react'
// import TodoItem from './TodoItem'

// const ToDosDone = (todosDone, onDeleteComp) => {
//   let myStyle = {
//     minHeight: "70vh",
//     margin: "10px auto"
//   }
//   console.log("test in comp", typeof onDeleteComp)
//   let todosDonehere = todosDone['todosDone'];
//   return (
//     <div className="container" style={myStyle}>
//       <h3 className="my-3">ToDos Completed </h3>
//       {todosDone.length === 0 ? <h3>No todos completed</h3> :
//         todosDonehere.map((todo) => {
//           return (
//           <>
//             <TodoItem todo={todo} key={todo.sno} onDelete={onDeleteComp} showComplete={false}/> <hr />
//           </>
//           )
//         })
//       }
//     </div>
//   )
// }

// export default ToDosDone;
