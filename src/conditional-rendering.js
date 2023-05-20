const root = document.querySelector("#root");

function App() {
    const [login, setLogin] = React.useState(false);

    // if (login) {
    //     return (
    //         <>
    //             <h1>Udah login, Bang!</h1>
    //             <button onClick={function () {
    //                 setLogin(false)
    //             }}>
    //                 Logout
    //             </button>
    //         </>

    //     )
    // }

    return (
        <>
            <h1>Login Dulu, Bang!</h1>
            <h1>Web Jual Beli</h1>
            {/* <p>{login ? <b>Kamu sudah login</b> : <i>Kamu belum login</i>}</p> */}
            <p>{login && <b>Kamu udah login!</b>}</p>

            <button onClick={function () {
                setLogin(true);
            }}>Login</button>
        </>
    )
}

ReactDOM.render(<App />, root); 