import { logout } from '../core/services/auth';

export const LogoutButton = () => {

    const Logout = () => {
        logout();
        window.location.href = '/';
    };

    return(
        <button onClick={Logout}><i className="bi bi-power"></i></button>
    );
};