const root = document.querySelector("#root");

function klikAku(msg) {
    alert(msg);
}

const element =
    (
        <div>
            <button onClick={klikAku.bind(this, 'Halo, aku dikllik!')}>Klik</button>
        </div>
    );

ReactDOM.render(element, root);