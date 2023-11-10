import { BrowserRouter, Routes, Route } from "react-router-dom";

import CalendarioMedicamentos from "./page/calendario";
import Formulario from "./component/formulario/index.jsx";
import Login from "./component/login/Login.jsx";
import Registration from "./component/registro/Registration.jsx";
import Inicio from "./page/inicio/Inicio.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./ProtectedRoute.jsx";
import { MedicamentoProvider } from "./context/medicamentosContext.jsx";

function App() {
  return (
    <AuthProvider>
      <MedicamentoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/login" element={<Login />} />
          <Route element={<ProtectedRoute />}>
            <Route path="/datatable" element={<CalendarioMedicamentos />} />
            <Route path="/form" element={<Formulario />} />
            <Route path="/form/:id" element={<Formulario />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </MedicamentoProvider>
    </AuthProvider>
  );
}

export default App;
