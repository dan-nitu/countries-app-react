import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TheHeader from './components/TheHeader';

import CountriesPage from './pages/CountriesPage';
import CountryPage from './pages/CountryPage';

function App() {
  const [theme, setTheme] = useState('');

  const handleThemeSwitch = () => {
    if (theme === '') {
      setTheme('dark');
    } else {
      setTheme('');
    }
  };

  return (
    <div data-theme={theme}>
      <Router>
        <TheHeader handleThemeSwitch={handleThemeSwitch} />
        <Routes>
          <Route exact path='/' element={<CountriesPage />} />
          <Route path='/country/:name' element={<CountryPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
