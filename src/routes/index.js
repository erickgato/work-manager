import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';

const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Home'} options={{ title: 'Página Inicial' }} component={Home} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
