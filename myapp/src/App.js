import logo from './logo.svg';


import './App.css';
import Home from './homepage/Home';
import NavBar from './navbar/Nav';
import Products from "./products/Products"
import AllRoutes from './routes/all_routes';
import Footer from './footer/footer';
import Contextprovider from './context/context';
import SingContextprovider from './singIn/sinContext';
import AddresscontextProvider from './account/pages/contextaddress';
function App() {
  return (
    <div className="App">
      <Contextprovider>
        <AddresscontextProvider>

        <SingContextprovider>

      <NavBar/>
      <AllRoutes/>
      <Footer/>
      </SingContextprovider>
        </AddresscontextProvider>
      </Contextprovider>
     

    </div>
  );
}

export default App;
