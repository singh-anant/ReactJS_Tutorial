const div = React.createElement(
  "div",
  { id: "parent" },
  [
    React.createElement("h1", { id: "h1Tag" }, "This is h1 tag"),
    React.createElement("h2", { id: "h2Tag" }, "This is h2 tag"),
    React.createElement("p", { id: "pTag" }, "Hello World from React 🌎🌎"),
    React.createElement(
      "span",
      { id: "pTag" },
      "Hello World from React 🌎🌎.This is span"
    ),
  ],
  ""
);
// Always remember whenever you are creating element using React.createElement() it just creates an object and while rendering it is converted into following element.
// creates a JS Object..
// The above code will get complicated if nesting is going to get increase.
console.log(div);
const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
root.render(div);
