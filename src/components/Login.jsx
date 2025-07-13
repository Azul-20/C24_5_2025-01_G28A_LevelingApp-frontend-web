import { useState } from 'react';
import { loginWithGoogle } from '../services/auth';

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
    <div>
      <h2>Iniciar sesión con cuenta institucional</h2>
      <button onClick={handleGoogleLogin}>
        Iniciar sesión con Google (@tecsup.edu.pe)
      </button>
      {mensaje && <p>{mensaje}</p>}
    </div>
  );
};

export default Login;

