import { Container, Name, Price } from "./style";

const ProductItem = ({product, deleteProduct, index}) => {

    //name
    //price
    return(
        <Container>
            <Name>{product.name}</Name>
            <Price>{product.price}</Price>
            <div>
                <button>Edit</button>
                <button onClick={() => {deleteProduct(index)}}>Delete</button>

            </div>
        </Container>
    );
}

export default ProductItem;