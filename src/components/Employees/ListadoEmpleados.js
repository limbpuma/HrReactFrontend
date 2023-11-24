import React, { useState, useEffect } from "react";
import axios from "axios";
import { NumericFormat } from "react-number-format";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function ListadoEmpleados() {
  const { t } = useTranslation();

  const urlBase = "http://localhost:8080/rh-app/empleados";

  const [empleados, setEmpleados] = useState([]);

  useEffect(() => {
    cargarEmpleados();
  }, []);

  const cargarEmpleados = async () => {
    const resultado = await axios.get(urlBase);
    console.log("resultado de cargar empleados");
    console.log(resultado.data);
    setEmpleados(resultado.data);
  };

  const eliminarEmpleado = async id => {
    await axios.delete(`${urlBase}/${id}`);
    cargarEmpleados();
  };

  return (
    <div className="container">
      <div className="container">
        <div className="container text-center" style={{ margin: "30px" }}>
          <h3>{t("employeeListing")}</h3>
        </div>
      </div>
      <div class="alert alert-info" translate="addBooking.info">
        {t("listEmployee.info")}
      </div>
      <table className="table table-striped table-hover alingn-middle">
        <thead className="table-dark">
          <tr>
            <th scope="col">Id</th>
            <th scope="col">{t("employeeName")}</th>
            <th scope="col">{t("department")}</th>
            <th scope="col">{t("salary")}</th>
            <th> </th>
          </tr>
        </thead>
        <tbody>
          {empleados.map((empleado, indice) => (
            <tr key={indice}>
              <th scope="row">{empleado.idEmpleado}</th>
              <td>{empleado.nombre}</td>
              <td>{empleado.departamento}</td>
              <td>
                <NumericFormat
                  value={empleado.sueldo}
                  displayType={"text"}
                  thousandSeparator=","
                  prefix={"$"}
                  decimalScale={2}
                  fixedDecimalScale={true}
                />
              </td>
              <td className="text-center">
                <div>
                  <Link
                    to={`/editar/${empleado.idEmpleado}`}
                    className="btn btn-warning btn-sm me-3"
                  >
                    {t("editEmployee")}
                  </Link>
                  <button
                    onClick={() => eliminarEmpleado(empleado.idEmpleado)}
                    className="btn btn-danger btn-sm"
                  >
                    {t("deleteEmployee")}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ListadoEmpleados;
