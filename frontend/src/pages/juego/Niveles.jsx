// src/pages/Niveles.jsx
import { Link } from 'react-router-dom';
import nivel1Img from '/nivel1.png';
import nivel2Img from '/nivel2.png';
import nivel3Img from '/nivel3.png';

function Niveles() {
  return (
    <div className="container-fluid py-0" style={{
      width: '100%',       
      height: '100%',      
      objectFit: 'cover',  
      objectPosition: 'center',
      fontFamily: '"Segoe UI", Roboto, sans-serif',
      backgroundImage: "url('/fondo_quimica.jpeg')",
      minHeight: '100vh' 
    }}>
      {/* Enlace izquierdo: Tabla periódica */}
      <div style={{ position: 'absolute', top: '10px', left: '10px' }}>
        <Link
          to="/dashboard"
          className="nav-link-hover text-white text-decoration-none d-flex align-items-center gap-2"
        >
          <img
            src="/tabla.png"
            alt="tabla"
            className="rounded-circle"
            style={{ width: '32px', height: '32px', objectFit: 'cover' }}
          />
          <span>Ver tabla periódica</span>
        </Link>
      </div>

      {/* Enlace derecho: Ranking */}
      <div style={{ position: 'absolute', top: '10px', right: '10px' }}>
        <Link
          to="/ranking"
          className="nav-link-hover text-white text-decoration-none d-flex align-items-center gap-2"
        >
          <img
            src="/ranking.png"
            alt="ranking"
            className="rounded-circle"
            style={{ width: '32px', height: '32px', objectFit: 'cover' }}
          />
          <span>Ranking</span>
        </Link>
      </div>
      <br /> <br />
      <h5 className="text-center mb-2 " style={{
        fontWeight: 'bold',
        color: '#343a40',
        margintop: '50px',
        textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
      }}>Selecciona un Nivel</h5>
      
      <div className="row justify-content-center px-4">
        {/* Nivel 1 */}
        <div className="col-md-4 mb-4">
          <div className="card level-card h-100 border-0 shadow-lg" style={{
            borderRadius: '15px',
            backgroundColor: 'rgba(0, 197, 211, 0)',
          }}>
            <div className="card-body text-center py-4">

            <h3 className="card-title mb-3" style={{
                backgroundColor: '#4e73df',
                color: 'white',
                borderRadius: '5px',
                padding: '10px 30px',
                fontWeight: '600',
                letterSpacing: '1px',
              }}>Nivel 1</h3>
              <div className="level-image mx-auto mb-4" style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                backgroundColor: '#4e73df',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                border: '5px solid #e9ecef'
              }}>
                <img src={nivel1Img} alt="Nivel 1" style={{
                  width: '100%',       
                  height: '100%',      
                  objectFit: 'cover',  
                  objectPosition: 'center' 
                }} />
              </div>
              <p>Juego de palabras</p>
              <Link to="/juegos/nivel1" className="btn btn-play" style={{
                backgroundColor: '#4e73df',
                color: 'white',
                borderRadius: '50px',
                padding: '10px 30px',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                transition: 'all 0.3s',
                borderBottom: '8px solid black',
                ':hover': {
                  backgroundColor: '#2e59d9',
                  transform: 'scale(1.05)',
                  boxShadow: '0 5px 15px rgba(78, 115, 223, 0.4)'
                }
              }}>
                PLAY
              </Link>
            </div>
          </div>
        </div>

        {/* Nivel 2 */}
        <div className="col-md-4 mb-4">
          <div className="card level-card h-100 border-0 shadow-lg" style={{
            borderRadius: '15px',
            backgroundColor: 'rgba(0, 197, 211, 0)',
            
          }}>
            <div className="card-body text-center py-4">

            <h3 className="card-title mb-3" style={{
                backgroundColor: '#4e73df',
                color: 'white',
                borderRadius: '5px',
                padding: '10px 30px',
                fontWeight: '600',
                letterSpacing: '1px',
              }}>Nivel 2</h3>
              <div className="level-image mx-auto mb-4" style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                backgroundColor: '#1cc88a',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                border: '5px solid #e9ecef'
              }}>
                <img src={nivel2Img} alt="Nivel 2" style={{
                  width: '100%',       
                  height: '100%',      
                  objectFit: 'cover',  
                  objectPosition: 'center' 
                }} />
              </div>

              <Link to="/juegos/nivel2" className="btn btn-play" style={{
                backgroundColor: '#4e73df',
                color: 'white',
                borderRadius: '50px',
                padding: '10px 30px',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                transition: 'all 0.3s',
                borderBottom: '8px solid black',
                ':hover': {
                  backgroundColor: '#2e59d9',
                  transform: 'scale(1.05)',
                  boxShadow: '0 5px 15px rgba(78, 115, 223, 0.4)'
                }
              }}>
                PLAY
              </Link>
            </div>
          </div>
        </div>

        {/* Nivel 3 */}
        <div className="col-md-4 mb-4">
          <div className="card level-card h-100 border-0 shadow-lg" style={{
            borderRadius: '15px',
            backgroundColor: 'rgba(0, 197, 211, 0)',
          }}>
            <div className="card-body text-center py-4">
            <h3 className="card-title mb-3" style={{
                backgroundColor: '#4e73df',
                color: 'white',
                borderRadius: '5px',
                padding: '10px 30px',
                fontWeight: '600',
                letterSpacing: '1px',
              }}>Nivel 3</h3>
              <div className="level-image mx-auto mb-4" style={{
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                backgroundColor: '#e74a3b',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                overflow: 'hidden',
                border: '5px solid #e9ecef'
              }}>
                <img src={nivel3Img} alt="Nivel 3" style={{
                  width: '100%',       
                  height: '100%',      
                  objectFit: 'cover',  
                  objectPosition: 'center' 
                }} />
              </div>
              <Link to="/juegos/disparo" className="btn btn-play" style={{
                backgroundColor: '#4e73df',
                color: 'white',
                borderRadius: '50px',
                padding: '10px 30px',
                fontWeight: '600',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                transition: 'all 0.3s',
                borderBottom: '8px solid black',
                ':hover': {
                  backgroundColor: '#2e59d9',
                  transform: 'scale(1.05)',
                  boxShadow: '0 5px 15px rgba(78, 115, 223, 0.4)'
                }
              }}>
                PLAY
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Niveles;