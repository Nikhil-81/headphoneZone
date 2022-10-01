import logo from './logo.svg';
import './App.css';
import Home from './homepage/Home';
import NavBar from './navbar/Nav';
import Products from "./products/Products"
import AllRoutes from './routes/all_routes';
import Footer from './footer/footer';
import Contextprovider from './context/context';
import SingContextprovider from './singIn/sinContext';
function App() {
  return (
    <div className="App">
      <Contextprovider>
<SingContextprovider>

      <NavBar/>
      <AllRoutes/>
      <Footer/>
</SingContextprovider>
      </Contextprovider>
     

    </div>
  );
}

export default App;
