import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import Todo from "./pages/Todo";
import ProtectedRoute from "./auth/ProtectedRoute";

const routes = [
  { path: "/", element: <div>Main</div> },
  {
    path: "/signup",
    element: (
      <ProtectedRoute to="/todo">
        <Signup />
      </ProtectedRoute>
    ),
  },
  {
    path: "/signin",
    element: (
      <ProtectedRoute to="/todo">
        <Signin />
      </ProtectedRoute>
    ),
  },
  {
    path: "/todo",
    element: (
      <ProtectedRoute to="/signin">
        <Todo />
      </ProtectedRoute>
    ),
  },
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
