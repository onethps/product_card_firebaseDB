import Navbar from 'pages/Navbar/Navbar';
import ProductsPage from 'pages/ProductsPage/ProductsPage';
import { useEffect } from 'react';
import { setProductsTC } from "store/product/productSlice";
import { useAppDispatch } from "utils/redux-utils";
import AppRoutes from "routes/AppRoutes";

function App() {
  const dispatch = useAppDispatch()

  useEffect(() => {

    dispatch(setProductsTC())
  }, []);

  return (
    <>

      <Navbar />
      <AppRoutes/>
    </>
  );
}

export default App;
