const root = document.querySelector("#root");

function App() {
    const [diklik, setDiklik] = React.useState(false);
    const [count, setCount] = React.useState(0);
    React.useEffect(function () {
        document.getElementById('judul').innerHTML = "Ganti Judul";
        console.log("Init carousel")
        return function () {
            console.log("destroy carousel!.");
        }
    });
    return (<>
        <h1 id="judul">Hello ini judul </h1>
        <button onClick={function () {
            setDiklik(true)
        }}>Klik</button>
        <button onClick={function () {
            setCount(count + 1)
        }}>Tambah</button>
        <p>Nilai saat ini : {count}</p>
    </>)
}

ReactDOM.render(<App />, root);