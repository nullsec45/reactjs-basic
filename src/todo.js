const root = document.querySelector("#root");

function App() {
    const [activity, setActivity] = React.useState("");
    const [todos, setTodos] = React.useState([]);
    const [edit, setEdit] = React.useState({});
    const [message, setMessage] = React.useState("");
    function generateId() {
        return Date.now();
    }

    function saveTodoHandler(event) {
        event.preventDefault();

        if (!activity || activity.trim("") === "") {
            return setMessage("Nama aktivitas jangan kosong!");
        }
        setMessage("");

        if (edit.id) {
            const updatedTodo = {
                ...edit,
                activity
            }

            const editTodoIndex = todos.findIndex(function (todo) {
                return todo.id == edit.id
            })

            const updatedTodos = [...todos];
            updatedTodos[editTodoIndex] = updatedTodo;

            setTodos(updatedTodos);
            return cancelEditHandler();
            // todos[editTodoIndex] = updatedTodo;

        }
        setTodos([
            ...todos,
            {
                id: generateId(),
                activity,
                done: false
            }
        ]);
        setActivity("");
    }

    function removeTodoHandler(todoId) {
        const filteredTodos = todos.filter(function (todo) {
            return todo.id !== todoId
        });
        setTodos(filteredTodos);

        if (edit.id) cancelEditHandler();
    }

    function editTodoHandler(todo) {
        setActivity(todo.activity);
        setEdit(todo);
    }

    function cancelEditHandler() {
        setEdit({});
        setActivity("");
    }

    function doneTodoHandler(todo) {
        const updatedTodo = {
            ...todo,
            done: todo.done ? false : true
        }

        const editTodoIndex = todos.findIndex(function (todo) {
            return todo.id === todo.id
        })

        const updatedTodos = [...todos];
        updatedTodos[editTodoIndex] = updatedTodo;

        setTodos(updatedTodos);

        console.log(updatedTodos);
    }
    return (
        <div style={{ padding: 15 }}>
            <h1>Simple Todo List</h1>
            {message && <p style={{ color: "red" }}>{message}</p>}
            <form onSubmit={saveTodoHandler}>
                <input type="text" placeholder="Nama Aktifitas" value={activity} onChange={(event) => setActivity(event.target.value)} />
                <button type="submit">{edit.id ? "Simpan Perubahan" : "Tambah"}</button>
                {edit.id && <button onClick={cancelEditHandler}> Cancel Edit</button>}
            </form>
            {todos.length > 0 ?
                (
                    <ul>
                        {todos.map(function (todo) {
                            return (
                                <li key={todo.id}>
                                    <input type="checkbox" onChange={doneTodoHandler.bind(this, todo)} />

                                    {todo.activity} ({todo.done ? "Selesai" : "Belum Selesai"}) <button onClick={removeTodoHandler.bind(this, todo.id)}>Hapus</button> <button onClick={editTodoHandler.bind(this, todo)}>Edit</button>
                                </li>
                            )
                        })}
                    </ul>
                ) :
                (
                    <strong >Tidak ada todo</strong>
                )
            }
        </div >
    )
}

ReactDOM.render(<App />, root)