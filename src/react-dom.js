const root = document.querySelector("#root");

function App() {
    const judulRef = React.useRef(null);
    React.useEffect(function () {
        setTimeout(function () {
            // const judul = document.getElementById("judul");
            judulRef.current.textContent = "Aplikasi";
        }, 5000);
    }, []);
    return (
        <>
            <h1 ref={judulRef}>Judul</h1>
        </>
    )
}

ReactDOM.render(<App />, root); 