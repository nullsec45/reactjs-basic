const root = document.querySelector("#root");

function tick() {
  // const element=(
  //     <div className="box">
  //   <h1>Jam Sekarang</h1>
  //   <h2>{new Date().toLocaleTimeString()}</h2>
  //     </div>
  // );
  const h1 = /*#__PURE__*/React.createElement("h1", null, "Jam Sekarang");
  const h2 = /*#__PURE__*/React.createElement("h2", null, new Date().toLocaleTimeString());

  function klik() {
    alert("OK!");
  }

  const button = /*#__PURE__*/React.createElement("button", {
    onClick: klik
  }, "Klik");
  const element = React.createElement("div", {
    className: "box",
    children: [h1, h2, button]
  });
  ReactDOM.render(element, root);
}

tick(); // setInterval(function(){
//     tick();
// }, 1000)