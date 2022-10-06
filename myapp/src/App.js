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
import Cart_context_Provider from './cart/cart_context';
function App() {
  return (
    <div className="App">
      <Contextprovider>

        <Cart_context_Provider>
        <AddresscontextProvider>

        <SingContextprovider>

      <NavBar/>
      <AllRoutes/>
      <Footer/>
      </SingContextprovider>
        </AddresscontextProvider>
        </Cart_context_Provider>
      </Contextprovider>
     

    </div>
  );
}

export default App;
