import React from 'react';
import { inject, observer } from 'mobx-react';
import { Container, Logo, ContainerActions, Button, TextButton, Result } from './styles';

const Home = ({ ExampleStore }) => {
    const { add, subtract, totalValue } = ExampleStore;

    return (
        <Container>
            <Logo source={require('../../assets/images/logo.png')} />
            <ContainerActions>
                <Button onPress={subtract}>
                    <TextButton>-</TextButton>
                </Button>
                <Button onPress={add}>
                    <TextButton>+</TextButton>
                </Button>
            </ContainerActions>
            <Result>{totalValue}</Result>
        </Container>
    );
};

export default inject('ExampleStore')(observer(Home));
