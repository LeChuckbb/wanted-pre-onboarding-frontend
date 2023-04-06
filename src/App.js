import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Todo from "./pages/Todo";

const Main = () => {
  return <div>Main</div>;
};

const routes = [
  { path: "/", element: <Main /> },
  { path: "/signup", element: <Signup /> },
  { path: "/signin", element: <Signin /> },
  { path: "/todo", element: <Todo /> },
];

function App() {
  return (
    <div className="App">
      <ul>
        {routes.map((route) => (
          <li key={route.path}>
            <Link to={route.path}>{route.path}</Link>
          </li>
        ))}
      </ul>

      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
