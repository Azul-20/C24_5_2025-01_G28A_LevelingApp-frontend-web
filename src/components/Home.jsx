import { getUserInfo, logout } from '../services/auth';

const Home = () => {
    const user = getUserInfo();

    if (!user) {
        return <p>No autenticado.</p>;
    }
    
    const Logout = () => {
        logout();
        window.location.href = '/';
    };

    return (
        <div>
        <h2>Bienvenido a Leveling App</h2>
        <h3>{user.email}</h3>
        <p>Rol: {user.role}</p>
        <p>Has iniciado sesión correctamente.</p>
        <button onClick={Logout}>Cerrar sesión</button>
        </div>
    );
};

export default Home;
