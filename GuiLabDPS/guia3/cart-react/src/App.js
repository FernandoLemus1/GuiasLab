import logo from './logo.svg';
import './App.css';
import { Headers } from './components/Headers';
import { ProductList } from './components/ProductList';
import { useState } from 'react';

function App() {
  const [allProducts,setAllProducts]=useState([]);
  const [total,setTotal]=useState(0);
  const [countProducts,setCountProducts]= useState(0);
  return(

    <>
      <Headers
          allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}>
     </Headers>
      <ProductList
      allProducts={allProducts}
          setAllProducts={setAllProducts}
          total={total}
          setTotal={setTotal}
          countProducts={countProducts}
          setCountProducts={setCountProducts}>
      </ProductList>
    </>
  )
}

export default App;
