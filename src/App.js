import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header';
import Crousels from './Components/Crousels';
import Products from './Components/Products';
import Form from './Components/Form';
import Footer from './Components/Footer';

function App() {
  return (
    <>
      <Header />
      <Crousels />
      <Products />
      <Form />
      <Footer />
    </>
  );
}

export default App;
