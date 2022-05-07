import { useState } from "react"

const TodoVideo = () => {
    const [todos, setTodos] = useState([
        { id: "1", title: 'retirar lixo', done: false },
        { id: "2", title: 'varrer casa', done: false },
        { id: "3", title: 'lavar chão', done: false },
    ]);


    const [todo, setTodo] = useState()

    const handleFormSubmit = e => {
        e.preventDefault()
        setTodos([
            ...todos,
            todo,
        ])
    }

    const handleImputChange = e => {
        setTodo({
            ...todo,
            id: todos.length + 1,
            title: e.target.value,
            done: false,
        })
    }

    return (
        <div>
            {
                todos.map(i => (
                    <div key={i.id}>{i.title}</div>
                ))
            }

            <form onSubmit={handleFormSubmit}>
                <input type='text' name='todo' id='title' placeholder='adicionar tarefa' onChange={handleImputChange} />
                <button>Adicionar tarefa</button>
            </form>
        </div>
    )
}

export default TodoVideo