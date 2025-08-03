import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Login from "./pages/Login";
import Home from './pages/Home';
import ThemeSwitcher from './components/ThemeSwitcher';
import ProtectedRoute from './core/guards/ProtectedRoute';
import './App.css';

const App = () => {
  return (
    <div className='fondo'>
      <ThemeProvider>
        <Router>
          <ThemeSwitcher />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </Router>
      </ThemeProvider>
    </div>
  );
};

export default App;
