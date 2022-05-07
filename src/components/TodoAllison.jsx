import React, { useState } from 'react'

const TodoAllison = () => {

    const [todos, setTodos] = useState(
        [
            { id: "1", tarefa: "limpar chão", done: false },
            { id: "2", tarefa: "Estudar", done: false },
            { id: "3", tarefa: "Jogar lixo fora", done: false },
        ]
    )
    const [todo, setTodo] = useState()
    const [input, setInput] = useState("")


    setTodos([
        ...todos,
        todo,
    ])

    setTodo({
        ...todo,
        id: todos.length + 1,
        tarefa: "input",
        done: false,
    })
console.log(todo)

    return (
        <div>
            {
                todos.map(i => (
                    <div key={i.id}>{i.tarefa}</div>
                ))
            }
            <input value={input} type="text" onChange={(e) => setInput(e.target.value)} />
            <button onClick={setTodo}>Add</button>
        </div>
    )
}

export default TodoAllison