import React, { memo } from 'react'

const Todos = ({ todos, addTodo }) => {
    console.log('Child render')
    return (
        <div>
            <h2>My Todos </h2>
            {todos.map((todo, index) => {
                return <p key={index} > {todo + index}</p>
            })}
            <button onClick={addTodo}>Add Todo</button>
        </div>
    )
}

export default memo(Todos);
