import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import { UploadPage } from './pages/UploadPage';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route exact path='/contact' element={<ContactPage />}></Route>
        <Route exact path='/xzadik/upload' element={<UploadPage />}></Route>
        <Route exact path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}

export default App;
