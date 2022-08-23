import { useEffect, useState } from 'react';
import NavigationBar from './components/NavigationBar';
import CreateProduct from './pages/CreateProduct';
import EditProduct from './pages/EditProduct';
import Home from './pages/Home';
import ListProduct from './pages/ListProduct';
import { Container } from './style';
import {PAGE_HOME, PAGE_CREATE, PAGE_EDIT, PAGE_LIST} from '../src/support/constants';
import {initialProducts} from './support/constants';

function App() {
  
  const [atualPage, setAtualPage] = useState(PAGE_HOME);
  const [products, setProducts] = useState([]);

  useEffect( () => {
    try{
        const result  = initialProducts;
        setProducts(result);
    }catch(e){
        console.log("Problema no servidor");
    }
    
}, []);

  const handleNavigationClick = (pageNumber) => {
    setAtualPage(pageNumber);
  }

  const addProduct = (product) => {
    setProducts([...products, product]);
    //Chamada pra api que vai adicionar o produto no banco de dados
  }

  const deleteProduct = (indexValue) => {
    const newProducts = products.filter((product, index) => {
      return indexValue !== index;
    });

    setProducts(newProducts);
  }

  return (
    <Container>
      <NavigationBar  handleNavigationClick = {handleNavigationClick}/>
      {
        atualPage === PAGE_HOME ? <Home />: <></>
      }
      {
        atualPage === PAGE_LIST && <ListProduct products = {products} deleteProduct = {deleteProduct}/>
      }
      {
        atualPage === PAGE_CREATE && <CreateProduct addProduct = {addProduct} />
      }
      {
        atualPage === PAGE_EDIT && <EditProduct />
      }
    </Container>
  );
}

export default App;
