import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Greetings } from '../screens/Welcome';

const Stack = createStackNavigator();
const config = {
  animation: 'slide',
  config: {
    stiffness: 1000,
    damping: 500,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const Routes = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                transitionSpec: {
                    open: config,
                    close: config,
                }
            }}
        >
            <Stack.Screen name={"Greetings"} options={{headerShown: false }} component={Greetings} />
        </Stack.Navigator>
    );
}

export default Routes;
