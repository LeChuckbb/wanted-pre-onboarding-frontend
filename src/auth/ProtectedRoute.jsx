import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, to }) {
  const token = window.localStorage.getItem("accessToken");
  // sign일때
  if (to === "/todo" && token) return <Navigate to={to} />;
  // todo 일떄
  else if (to === "/signin" && !token) return <Navigate to={to} />;

  return children;
}

export default ProtectedRoute;
