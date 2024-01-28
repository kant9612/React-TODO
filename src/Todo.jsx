import React, { useState } from "react";
import "./styles.css";

export const Todo = () => {
  const [todotext, setTodotext] = useState("");
  const [incompleteTodos, setIncompleteTodos] = useState([
    "TODO1です",
    "TODO2です",
  ]);
  const [completeTodos, setCompleteTodos] = useState([
    "TODO1でした",
    "TODO2でした",
  ]);
  //React.hook.form?でシンプルに修正可能？
  const onChangeTodoText = (event) => setTodotext(event.target.value);
  const onClickAdd = () => {
    if (todotext === "") return;
    const newTodos = [...incompleteTodos, todotext];
    setIncompleteTodos(newTodos);
    setTodotext("");
  };
  return (
    <>
      <div className="input-area">
        <input
          placeholder="TODOを入力"
          value={todotext}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div className="incomplete-area">
        <p className="title">未完了のTODO</p>
        <ul>
          {incompleteTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>完了</button>
                <button>削除</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="complete-area">
        <p className="title">完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => (
            <li key={todo}>
              <div className="list-row">
                <p className="todo-item">{todo}</p>
                <button>戻す</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
