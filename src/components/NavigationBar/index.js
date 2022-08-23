import { Container, NavigationButton } from "./style";
import {PAGE_HOME, PAGE_CREATE, PAGE_EDIT, PAGE_LIST} from '../../support/constants';

const NavigationBar = ({handleNavigationClick}) => {

    return(
        <Container>
            <NavigationButton onClick={() => {handleNavigationClick(PAGE_HOME)}} href="#">Home</NavigationButton>
            <NavigationButton onClick={() => {handleNavigationClick(PAGE_LIST)}} href="#">Lista de produtos</NavigationButton>
            <NavigationButton onClick={() => {handleNavigationClick(PAGE_CREATE)}} href="#">Criar produto</NavigationButton>
            <NavigationButton onClick={() => {handleNavigationClick(PAGE_EDIT)}} href="#">Editar produto</NavigationButton>
        </Container>
    );
}

export default NavigationBar