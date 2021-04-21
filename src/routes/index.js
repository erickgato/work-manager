import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import WelcomeRoutes from './welcome';
const Stack = createStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Welcome'} options={{headerShown: false }} component={WelcomeRoutes} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
