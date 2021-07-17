import React, { useEffect } from "react";
// import { FileUpload } from "../../file/FileUpload";
import {  useDispatch, useSelector } from "react-redux";
import {  auditoriaInformeAction } from "../../../redux/pokeAuditoria";

export const Informe = () => {

  // const { apellido } = useSelector((store) => store.profe);
  const mate = useSelector((store) => store.auditor);

  const dispatch = useDispatch();
  // const [anio, setAnio] = useState(0);

  const materia = mate.array;
  
  // console.log(materia)
  // function yearActual() {
  //   var f = new Date();
  //   // setAnio(f.getFullYear());
  // }
  useEffect(() => {
    dispatch(auditoriaInformeAction());
    // yearActual();
  }, [dispatch]);

  return (
    <div>
      
        {/* Profesor: {apellido}, {name} -- {dni} */}
        <div className="row">
          <div className="col-md-12">
            <div className="table-compressed table-responsive">
              <table className="table users table-hover table-dark">
                <thead className="thead-dark">
                  <tr>
                    {/* <th scope="col">#</th> */}
                    {/* <th scope="col" className="text-center">
                      Año
                    </th> */}
                    <th scope="col">Carrera</th>
                    <th scope="col">Materia</th>
                    <th scope="col">Profe</th>
                    <th scope="col" className="text-left">
                      1 INFORME
                    </th>
                    <th scope="col" className="text-left">
                      2 INFORME
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {materia.map((mate, index) => (
                    <tr key={mate.id_materia + mate.dni}>
                      {/* <td> */}
                        {/* {index + 1} */}
                        {/* {mate.diasem} */}
                        {/* {mate.rapidita} */}
                        {/* -{mate.id_rapida} */}
                        {/* -{mate.id_materia} */}
                      {/* </td> */}
                      {/* <td className="text-center">{

                        mate.curso
                        }</td> */}
                      <td>{mate.curso.charAt(0)}{mate.carrera_nombre}</td>
                      <td>{mate.materia_nombre}</td>
                      <td>
                        {mate.apellido}-{mate.dni}
                      </td>
                      <td>
                        {/* Aqui debo corroborar si existe el archivo en la bd, de se asi, solo muestro el OK */}
                        {mate.inf1 ? (
                          <img
                            src={`../assets/okok.png`}
                            alt="ok"
                            height="20"
                            width="20"
                          />
                        ) : (
                          <img
                            src={`../assets/equis.png`}
                            alt="ok"
                            height="20"
                            width="20"
                          />
                        )}
                      </td>
                      <td>{
                        mate.inf2?(
                          <img
                            src={`../assets/okok.png`}
                            alt="ok"
                            height="20"
                            width="20"
                          />
                        ) : (
                          <img
                            src={`../assets/equis.png`}
                            alt="ok"
                            height="20"
                            width="20"
                          />
                        )
                      }</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan="3">
                      <strong>Total de Materias</strong>
                    </td>
                    <td className="text-right thead-dark">
                      <strong>{Object.keys(materia).length}</strong>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>    
    </div>
  );
};
