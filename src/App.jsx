import { BrowserRouter, useRoutes } from "react-router-dom";

import CalendarioMedicamentos from "./page/calendario";
import Formulario from "./page/formulario";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <CalendarioMedicamentos /> },
    { path: "/form", element: <Formulario /> },
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
