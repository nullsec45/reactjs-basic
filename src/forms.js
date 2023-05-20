const root = document.querySelector("#root");

function App() {
    // const nameRef = React.useRef(null);

    const [name, setName] = React.useState("");

    function ketikaSubmit(e) {
        e.preventDefault()

        // const name = nameRef.current.value;
        console.log("Nama :", name);
    }
    return (
        <form onSubmit={ketikaSubmit}>
            <div>
                <label>Nama :</label>
                {/* <input type="text" name="nama" ref={nameRef}    ></input> */}
                <input type="text" name="nama" value={name} onChange={(event) => setName(event.target.value)}></input>
                <button type="submit">Kirim</button>
            </div>
        </form>
    );
}

ReactDOM.render(<App />, root);