const heading1 = React.createElement("h1", {}, "Namaste Everyone From React!");
const heading2 = React.createElement(
  "h1",
  {},
  "Namaste Everyone From React 2!"
);
const container = React.createElement("div", {}, [heading1, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);
