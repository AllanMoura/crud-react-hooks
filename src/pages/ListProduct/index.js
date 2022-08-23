import { useEffect } from 'react';
import {Container} from './style';
import ProductItem from '../../components/ProductItem';

const ListProduct = ({products, deleteProduct}) => {

    useEffect(() => {
        console.log("Olá");
    }, [products]);

    return(
        <Container>
            {
                products.map((product, index) => {
                    return(
                        <ProductItem product = {product} deleteProduct = {deleteProduct} index = {index} />
                    );
                })
            }
        </Container>
    );
}

export default ListProduct;