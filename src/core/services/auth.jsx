import { jwtDecode } from 'jwt-decode';
import { signInWithPopup, GoogleAuthProvider, signOut } from 'firebase/auth';
import axios from 'axios';
import { auth } from './firebase';

const provider = new GoogleAuthProvider();
const API_URL = 'http://localhost:3001/api';

export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    if (!user || !user.email) {
      return { success: false, message: 'No se pudo obtener el correo del usuario.' };
    }

    // Validar dominio institucional antes de continuar
    if (!user.email.includes('@tecsup.edu.pe')) {
      return { success: false, message: 'Use su cuenta institucional @tecsup.edu.pe' };
    }

    // Obtener idToken de Firebase
    const idToken = await user.getIdToken();

    // Enviar idToken al backend
    const response = await axios.post(`${API_URL}/login`, { idToken });

    // Guardar JWT del backend
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('email', response.data.email);

    return { success: true };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

export function logout() {
  localStorage.removeItem('token');
  localStorage.removeItem('email');
  signOut(auth);
};

export function getToken() {
  return localStorage.getItem('token');
};

export function getUserInfo() {
  const token = getToken();
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded; // contiene uid, email, role, exp, etc.
  } catch (error) {
    return null;
  }
};