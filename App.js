import React from "react";
import ReactDOM from "react-dom/client";

// JSX = HTML-like syntax
// JSX => Babel transpiles it to React.createElement => React.createElement(js object) =>HTMLElement(render)

const Title = () => <h1 id="heading">Namaste React using JSX🚀</h1>;

// const Heading = () => {
//   return <h1>Namaste React Functional Component</h1>;
// };

// component composition - component inside component

const HeadingComponent = () => (
  <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
