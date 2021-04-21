import React from 'react'
import { View, Text } from 'react-native'
import { Container, Header, Title } from './styles';

const index = () => {
    return (
        <Container>
            <Header>
                <Title>
                    Gerenciador {'\n'}
                    para suas horas {'\n'}
                    em cada projeto
                </Title>
            </Header>
        </Container>
    )
}

export default index
