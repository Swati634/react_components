import React, { useCallback, useState } from 'react'
import Todos from './Todos';

const CallbackHook = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);

    const increment = () => {
        setCount(count + 1)
    }
    const addTodo = useCallback(() => {
        setTodos((prev) => [...prev, `new entry`])
    }, [todos])

    return (
        <div>
            <Todos todos={todos} addTodo={addTodo}></Todos>
            <hr />
            <div>
                count:{count}
                <button onClick={increment}>+</button>
            </div>
        </div >
    )
}

export default CallbackHook
