import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MyNavbar from "./components/navbar";
import Footer from "./components/footer";
import ListadoEmpleados from "./components/Employees/ListadoEmpleados";
import Home from "./components/Home";
import AgregarEmpleado from "./components/Employees/AgregarEmpleado";
import "bootstrap/dist/css/bootstrap.min.css";
import EditarEmpleado from "./components/Employees/EditarEmpleado";
import "./App.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar className="container-fluid" />
        <Routes className="container">
          <Route path="/" element={<Home />} />
          <Route path="/empleados" element={<ListadoEmpleados />} />
          <Route path="/agregar-empleado" element={<AgregarEmpleado />} />
          <Route path="/editar/:id" element={<EditarEmpleado />} />
          {/* Puedes agregar más rutas aquí según sea necesario */}
        </Routes>
        <Footer className="container-fluid" />
      </BrowserRouter>
    </div>
  );
}

export default App;
