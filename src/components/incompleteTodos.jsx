export const IncompleteTodos = (props) => {
  const { incompleteTodos, onClickComp, onClickDel } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTODO</p>
      <ul>
        {incompleteTodos.map((todo, index) => (
          <li key={todo}>
            <div className="list-row">
              <p className="todo-item">{todo}</p>
              <button onClick={() => onClickComp(index)}>完了</button>
              <button onClick={() => onClickDel(index)}>削除</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
