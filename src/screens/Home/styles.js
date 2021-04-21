import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Logo = styled.Image`
    height: 192px;
    margin-bottom: 20px;
`;

export const ContainerActions = styled.View`
    display: flex;
    flex-direction: row;
    padding: 10px;
    width: 150px;
    justify-content: space-between;
`;

export const Button = styled.Pressable`
    height: 40px;
    width: 40px;
    background-color: orange;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextButton = styled.Text`
    font-size: 24px;
    color: #ffffff;
`;

export const Result = styled.Text`
    font-size: 30px;
    padding: 10px;
`;
