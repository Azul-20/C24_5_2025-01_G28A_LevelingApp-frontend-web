import { getUserInfo } from '../core/services/auth';
import { HeaderComponent } from '../components/HeaderComponent';
import { LevelBarr } from '../components/LevelBarr';
import { LogoutButton } from '../components/LogoutButton';

const Home = () => {

    const user = getUserInfo();

    if (!user) {
        return <p>No autenticado.</p>;
    }

    return (
        <div>
            <HeaderComponent></HeaderComponent>
            <LevelBarr></LevelBarr>
            <LogoutButton></LogoutButton>
        </div>
    );
};

export default Home;
