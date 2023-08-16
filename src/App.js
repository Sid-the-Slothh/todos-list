import './App.css';
import Header from "./MyComponents/Header"
import Todos from "./MyComponents/Todos";
import Footer from "./MyComponents/Footer";
import React, { useState, useEffect } from 'react'
import AddToDo from "./MyComponents/AddTodo"
import ToDosDone from './MyComponents/ToDosDone'

function App() {
  let initTodo = [];
  if (localStorage.getItem("todos") == null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  let initDone = []
  if (localStorage.getItem("toDone") == null) {
    initDone = [];
  }
  else {
    initDone = JSON.parse(localStorage.getItem("todosDone"));
  }

  const [todos, setTodos] = useState(initTodo);
  const [todosDone, setTodosDone] = useState(initDone);

  console.log("test not in comp", todosDone, typeof todosDone[0]);

  const moveToComplete = (todo) => {
    console.log("Moving in progress");
    let sno = 0;
    if (todosDone.length > 0) {
      sno = todosDone[todosDone.length - 1].sno + 1;
    }

    const myTodoDone = {
      sno: sno,
      title: todo.title,
      desc: todo.desc
    }

    setTodosDone([...todosDone, myTodoDone]);
    onDelete(todo);
  }

  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }))
  }

  const onDeleteComp = (todo) => {
    console.log("test from onDeleteComp", todosDone, typeof todosDone[0], todo);
    setTodosDone(todosDone.filter((e) => {
      return e !== todo;
    }))
  }

  const addTodo = (title, desc) => {
    let sno = 0
    if (todos.length > 0) {
      sno = todos[todos.length - 1].sno + 1
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc
    }
    console.log("I am adding this todo", myTodo)
    setTodos([...todos, myTodo]);
  }

  const moveToTodo = (todo) => {
    console.log(todo)
    addTodo(todo.title, todo.desc);
    onDeleteComp(todo);
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    localStorage.setItem("todosDone", JSON.stringify(todosDone));
  }, [todosDone]);
  
  return (
    <>
      <Header title="Todos" searchBar={true} />
      <AddToDo addTodo={addTodo} />
      <Todos todos={todos} onDelete={onDelete} moveToComplete={moveToComplete} moveToTodo={moveToTodo}/>
      <ToDosDone todosDone={todosDone} onDeleteComp={onDeleteComp} moveToTodo={moveToTodo}/>
      <Footer />
    </>
  );
}

export default App;