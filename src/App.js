import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import TheHeader from './components/TheHeader';

import CountriesPage from './pages/CountriesPage';
import CountryPage from './pages/CountryPage';

function App() {
  return (
    <Router>
      <TheHeader />
      <Routes>
        <Route exact path='/' element={<CountriesPage />} />
        <Route path='/country/:name' element={<CountryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
