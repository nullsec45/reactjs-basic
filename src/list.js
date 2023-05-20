const root = document.querySelector("#root");

class Fruit extends React.Component {

    render() {
        const fruits = ["Apple", "Orange", "Grape", "Lengkeng"];

        return (
            <>
                <ul>
                    {fruits.map(function (fruit, index) {
                        return <li key={index}>{fruit}</li>
                    })}
                </ul>
            </>
        )
    }

}

ReactDOM.render(<Fruit />, root); 