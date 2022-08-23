import { useState } from 'react';
import {Container, Title} from './style'

const CreateProduct = ({addProduct}) => {
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    const updatePrice = (value) => {
        if(/^[0-9.]*$/.test(value)){
            setPrice(value);
        }
    }

    const handleOnCreate = () => {
        const product = {
            name: name,
            price: price,
        }
        addProduct(product);
        setName('');
        setPrice(0);

    }

    return(
        <Container>
            <Title>Product Creation</Title>
            <label htmlFor="name">Name: </label>
            <input type="text" name='name' value={name} onChange ={(event) => setName(event.target.value)}/>
            <label htmlFor="price">Price: </label>
            <input type="number" step='0.01' name='price' value={price} onChange = {(event) => updatePrice(event.target.value)}/>
            <button onClick={handleOnCreate}>Criar</button>
        </Container>
    );
}

export default CreateProduct;