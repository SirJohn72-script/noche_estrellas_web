import { useRef } from 'react'

export default function Instrucciones() {
  const instruccionesContainer = useRef(null)

  const HiddeModal = () => {
    const container = document.getElementById('modal_button')
    container?.classList.toggle('instrucciones_container--none')
  }

  return (
    <div
      id="modal_button"
      className="container instrucciones_container"
      ref={instruccionesContainer}
    >
      <div className="wrapper instrucciones_wrapper">
        <div className="instrucciones_pasos">
          <h1>Instrucciones</h1>
          <p>Cuando entres al modo AR sigue las siguientes instrucciones</p>
          <ul>
            <li>
              <b>1</b>- En modo AR, apunta la camara de tu celular al piso
            </li>
            <li>
              <b>2</b>- Espera a que aparezca una retícula blanca
            </li>
            <li>
              <b>3</b>- Mueve la retícula al lugar donde quieras que aparezca el
              planeta
            </li>
            <li>
              <b>4</b>- Da un tap a la pantalla y voila
            </li>
            <li>
              <b>5</b>- Toma una captura de pantalla para guardar el resultado
            </li>
          </ul>
          <div className="instrucciones_button">
            <button onClick={() => HiddeModal()}>Entendido</button>
          </div>
        </div>
      </div>
    </div>
  )
}
