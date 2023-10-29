import { BrowserRouter, useRoutes } from "react-router-dom";

import CalendarioMedicamentos from "./page/calendario";
import Formulario from "./component/formulario/index.jsx";
import Login from "./component/login/Login.jsx"
import Registration from "./component/registro/Registration.jsx"
import Inicio from './page/inicio/Inicio.jsx'

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Inicio/>},
    { path: "/datatable", element: <CalendarioMedicamentos /> },
    { path: "/form", element: <Formulario /> },
    { path: "/login", element: <Login/>},
    { path: "/register", element: <Registration/>},
    { path: "/inicio", element: <Inicio/>},
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
