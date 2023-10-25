import { BrowserRouter, useRoutes } from "react-router-dom";

import CalendarioMedicamentos from "./page/calendario";
import Formulario from "./page/formulario";
import Login from "./component/login/Login.jsx"
import Registration from "./component/registro/Registration.jsx"

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <CalendarioMedicamentos /> },
    { path: "/form", element: <Formulario /> },
    { path: "/login", element: <Login/>},
    { path: "/register", element: <Registration/>}
  ]);
  return routes;
};
function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
