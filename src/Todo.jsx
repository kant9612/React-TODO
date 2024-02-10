import React, { useState } from "react";
import { CompleteTodos } from "./components/CompleteTodos";
import { IncompleteTodos } from "./components/incompleteTodos";
import { InputTodo } from "./components/inputTodo";
import "./styles.css";

export const Todo = () => {
  const [todoText, setTodotext] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);
  //React.hook.form?でシンプルに修正可能？
  const onChangeTodoText = (event) => setTodotext(event.target.value);
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodotext("");
  };
  const onClickDel = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };
  const onClickComp = (index) => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1);
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };
  const isMaxLimitIncompleteTodos = incompleteTodos.length >= 5;
  return (
    <>
      <InputTodo
        disabled={isMaxLimitIncompleteTodos}
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      {isMaxLimitIncompleteTodos && (
        <p style={{ color: "red" }}>
          未完了のTODOが多すぎる。すぐに対応しよう！
        </p>
      )}
      <IncompleteTodos
        incompleteTodos={incompleteTodos}
        onClickComp={onClickComp}
        onClickDel={onClickDel}
      />
      <CompleteTodos completeTodos={completeTodos} onClick={onClickBack} />
    </>
  );
};
