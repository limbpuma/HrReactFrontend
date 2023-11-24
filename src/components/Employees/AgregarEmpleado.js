import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";

function AgregarEmpleado() {
  const { t } = useTranslation();

  let navegar = useNavigate();
  const [empleado, setEmpleado] = useState({
    nombre: "",
    departamento: "",
    sueldo: "",
  });

  const { nombre, departamento, sueldo } = empleado;

  const onInputChange = e => {
    //spread operator...(expandir los atributos
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    const urlBase = "http://localhost:8080/rh-app/empleados";
    await axios.post(urlBase, empleado);
    //Redirigimos a la pagina de inio
    navegar("/ListadoEmpleados");
  };

  return (
    <div className="container">
      <div className="container">
        <div className="container text-center" style={{ margin: "30px" }}>
          <h3>{t("addEmployeeTitle")}</h3>
        </div>
      </div>
      <div class="alert alert-info">{t("addEmployee.info")}</div>
      <form onSubmit={e => onSubmit(e)}>
        <div className="mb-3">
          <label for="nombre" className="form-label">
            {t("employeeName")}
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            required={true}
            value={nombre}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label for="departamento" className="form-label">
            {t("department")}
          </label>
          <input
            type="text"
            className="form-control"
            id="departamento"
            name="departamento"
            required={true}
            value={departamento}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <label for="sueldo" className="form-label">
            {t("salary")}
          </label>
          <input
            type="number"
            className="form-control"
            id="sueldo"
            name="sueldo"
            required={true}
            value={sueldo}
            onChange={e => onInputChange(e)}
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            step="any"
            className="btn btn-warning btn-sm me-3"
          >
            {t("addEmployeeButton")}
          </button>
          <a href="/" className="btn btn-danger btn-sm">
            {t("returnEmployeeButton")}
          </a>
        </div>
      </form>
    </div>
  );
}

export default AgregarEmpleado;
