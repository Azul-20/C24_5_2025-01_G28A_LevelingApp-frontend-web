import { getAuth } from 'firebase/auth';

export const HeaderComponent = () => {

    const user = getAuth().currentUser;

    if (!user) return null;

    return (
        <header>
            <div>
                <img src={ user.photoURL } alt="Foto de perfil" />
                <span>{ user.displayName }</span>
            </div>
            <div>
                <h1>
                    <i className="bi bi-mortarboard"></i>
                    ¡Bienvenido!
                </h1>
                <p>Aventuras de aprendizaje diario</p>
                <span>
                    <i className="bi bi-globe-americas"></i>
                    Ranking #3
                </span>
            </div>
            <div>
                <h1>Nvl. 7</h1>
                <div>
                    <i className="bi bi-suit-diamond-fill"></i>
                    <span><strong>2350</strong> XP TOTAL</span>
                    <p>250xp para subir al siguiente nivel</p>
                </div>
            </div>
        </header>
    );
};