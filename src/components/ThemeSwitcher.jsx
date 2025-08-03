import { useContext, useState } from 'react';
import { ThemeContext } from '../ThemeContext';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [open, setOpen] = useState(false);

  const handleSelect = (selectedTheme) => {
    toggleTheme(selectedTheme);
    setOpen(false);
  };

  return (
    <div>
      <button className='tema' onClick={() => setOpen(!open)}>
        <i className="bi bi-palette"></i>{theme}
      </button>

      {open && (
        <ul className='opciones'>
          <li>
            <button className='btn-tema' onClick={() => handleSelect('default')}>Default</button>
          </li>
          <li>
            <button className='btn-tema' onClick={() => handleSelect('dark')}>Dark</button>
          </li>
          <li>
            <button className='btn-tema' onClick={() => handleSelect('gamer')}>Gamer</button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ThemeSwitcher;