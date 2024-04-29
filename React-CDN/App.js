const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading);
root.render(heading);

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I'm an h1 tag."),
    React.createElement("h2", {}, "I'm an h2 tag."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag."),
    React.createElement("h2", {}, "I'm an h2 tag."),
  ]),
]);
console.log(parent);

/** JSX- Javascript XML like syntax. It makes easier to create Reat elment. */

// const heading = <h1 id="heading">Hello React using JSX.</h1>;
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

/* Component -  It is norrmal javascript function that returns piece of JSX element.*/
// const HeadingComponent = () => (
//   <h1 id="heading">Hello React Functional Component</h1>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

/* Component Composition - One component render inside another component is called Component Composition. */

// const Title = () => (
//   <h1 className="head" tabIndex="5">
//     This is a Component Composition.
//   </h1>
// );

// const HeadingComponent = () => (
//   <div id="container">
//     <Title />
//     <h2 id="heading">Hello React Functional Component</h2>
//   </div>
// );
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<HeadingComponent />);

/** React Element render inside component. by putting {} */
// const number = 20000;
// const ElementrenderComponent = () => (
//   <div id="container">
//     <h2> {number}</h2>
//     <h2 id="heading">Hello React Functional Component</h2>
//   </div>
// );
