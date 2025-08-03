import { useState } from 'react';
import { loginWithGoogle } from '../core/services/auth';
import '../static/styles/Login.css';

const Login = () => {
  const [mensaje, setMensaje] = useState('');

  const handleGoogleLogin = async () => {
    const result = await loginWithGoogle();

    if (result.success) {
      setMensaje('Inicio de sesión exitoso');
      window.location.href = '/home';
    } else {
      setMensaje(`Error: ${result.message || 'No se pudo iniciar sesión'}`);
    }
  };

  return (
    <div className='general'>

      <header>
        <span><i className="bi bi-mortarboard"></i></span>
      </header>

      <main>
        <h1>Leveling App</h1>
        <h3>Metodología ADDA gamificada con IA</h3>
        <h5>Tecsup - Proyecto de Tesis</h5>

        <div className='contenido'>

          <section className='box'>
            <h2>¿Qué hace especial a nuestro sistema?</h2>
            <div className='info'>
              <div className='card'>
                <span><i className="bi bi-cpu"></i></span>
                <div className='texto'>
                  <h4>IA Integrada</h4>
                  <p>Sugerencia de actividades generadas con la IA</p>
                </div>
              </div>
              <div className='card'>
                <span><i className="bi bi-controller"></i></span>
                <div className='texto'>
                  <h4>Gamificación</h4>
                  <p>Ranking, puntajes y competencia sana</p>
                </div>
              </div>
              <div className='card'>
                <span><i className="bi bi-trophy"></i></span>
                <div className='texto'>
                  <h4>Metodología ADDA</h4>
                  <p>Antes, Durante, Después y Aprendizaje Activo</p>
                </div>
              </div>
              <div className='card'>
                <span><i className="bi bi-star"></i></span>
                <div className='texto'>
                  <h4>Seguimiento detallado</h4>
                  <p>Indicadores y reportes en tiempo real</p>
                </div>
              </div>
            </div>
          </section>

          <section className='box'>
            <h2>Iniciar Sesión</h2>
            <p>Accede con tu correo institucional</p>
            <form className='login'>
              <div className='credenciales'>
                <p>Correo Institucional</p>
                <span><i className="bi bi-envelope"></i></span>
                <input type="email" />
              </div>
              <div className='credenciales'>
                <p>Contraseña</p>
                <span><i className="bi bi-lock"></i></span>
                <input type="password" />
              </div>
              <button>Ingresar como Estudiante</button>
            </form>
            <button className='google-btn' onClick={handleGoogleLogin}>
                <i className="bi bi-google"></i>
            </button>
            {mensaje && <p className='mensaje'>{mensaje}</p>}
            <button>¿Olvidaste tu contraseña?</button>
            <p>¿Primera vez? El sistema se activará con tu correo institucional</p>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Login;

