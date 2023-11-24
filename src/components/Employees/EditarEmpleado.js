import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

function EditarEmpleado() {
  const { t } = useTranslation();

  const urlBase = "http://localhost:8080/rh-app/empleados";
  let navegar = useNavigate();
  const { id } = useParams();

  const [empleado, setEmpleado] = useState({
    nombre: "",
    departamento: "",
    sueldo: "",
  });

  useEffect(() => {
    const loadEmpleado = async () => {
      const result = await axios.get(`${urlBase}/${id}`);
      setEmpleado(result.data);
    };

    loadEmpleado();
  }, [id]);

  const { nombre, departamento, sueldo } = empleado;

  const onInputChange = e => {
    //spread operator...(expandir los atributos
    setEmpleado({ ...empleado, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();

    await axios.put(`${urlBase}/${id}`, empleado);
    //Redirigimos a la pagina de inio
    navegar("/empleados");
  };

  return (
    <div className="container">
      <div className="container">
        <div className="container text-center" style={{ margin: "30px" }}>
          <h3>{t("editEmployeeTitle")}</h3>
        </div>
      </div>
      <div class="alert alert-info">{t("editEmployeeTitle.info")}</div>
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
            {t("saveEmployeeButton")}
          </button>
          <a href="/" className="btn btn-danger btn-sm">
            {t("returnEmployeeButton")}
          </a>
        </div>
      </form>
    </div>
  );
}

export default EditarEmpleado;
