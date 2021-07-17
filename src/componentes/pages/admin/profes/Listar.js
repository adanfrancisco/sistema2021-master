import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { getProfeListadoAction } from '../../../../redux/pokeProfes';



const Listar = () => {

  const profe = useSelector((store) => store.profe);
  const dispatch = useDispatch();


  const profes = profe.array;

  useEffect(() => {
    dispatch(getProfeListadoAction());
    // yearActual();
  }, [dispatch]);

  return (
    <div className="row">
      <div className="col-md-6">
        <table className="table users table-hover table-dark table-sm">

          <thead className="thead-dark">
            <tr>
              {/* <th scope="col">#</th> */}
              {/* <th scope="col" className="text-center">
                      Año
                    </th> */}
              <th scope="col" className="text-center">APELLIDO</th>
              <th scope="col" className="text-center">NOMBRE</th>
              {/* <th scope="col" className="text-center">TELEFONO</th> */}
              <th scope="col" className="text-center">CELULAR</th>
              <th scope="col" className="text-center">Whats</th>
              <th scope="col" className="text-center">EMAIL</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {profes.map((pr, index) => (
              <tr
               key={pr.dni}>
                <td className="align-middle">{pr.apellido}</td>
                <td className="align-middle">{pr.nombre}</td>
                {/* <td>{pr.telefono}</td> */}
                <td className="align-middle" >
                  <a href={`tel:${pr.celular}`}> {pr.celular} </a>

                </td>
                <td className="align-middle">
                  <a href={`https://api.whatsapp.com/send?phone=+54${pr.celular}`}>
                    <img
                      src={`../assets/wat.png`}
                      alt="llamar"
                      height="50"
                      width="50"
                    />
                  </a>
                </td>
                <td  className="align-middle">
                  <a href={`mailto:${pr.email}?subject=ISFDyT93 Te informa`}>
                    {pr.email}
                  </a>
                </td>
              <td className="align-middle">
                <button
                  className="btn btn-warning align-middle"
                  
                >editar</button>
              </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  )
}

export default Listar
