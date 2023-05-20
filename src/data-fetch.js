const root = document.querySelector("#root");

function App() {
    const [news, setNews] = React.useState([]);
    const [loading, setLoading] = React.useState(true);
    React.useEffect(function () {
        // const getData = fetch("https://api.spaceflightnewsapi.net/v3/blogs").then(res => res.json()).then(res => console.log(res));
        async function getData() {
            const request = await fetch("https://api.spaceflightnewsapi.net/v3/blogs");
            const response = await request.json();
            setNews(response);
            setLoading(false);
        }
        getData();
    }, []);
    return (
        <>
            <h1>Daftar Berita</h1>
            {
                loading ? (
                    <i>Sedang memuat data ....</i>
                ) : (<ul>
                    {news.map((item) => {
                        return <li key={item.id}>{item.title}</li>

                    })}
                </ul>)
            }

        </>
    );
}

ReactDOM.render(<App />, root);