const root=document.querySelector("#root");
function tick(){
    // const element=(
    //     <div className="box">
        //   <h1>Jam Sekarang</h1>
        //   <h2>{new Date().toLocaleTimeString()}</h2>
    //     </div>
    // );
    const h1=(
        <h1>Jam Sekarang</h1> 
    );

    const h2=(
        <h2>{new Date().toLocaleTimeString()}</h2>
    );
    
    function klik(){
        alert("OK!");
    }
    const button=(<button onClick={klik}>Klik</button>);
    const element=React.createElement("div", {className:"box",  children:[h1,h2, button]})

    ReactDOM.render(element, root);
}
tick();
// setInterval(function(){
//     tick();
// }, 1000)