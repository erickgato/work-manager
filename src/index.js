import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'mobx-react';
import Routes from './routes';
import stores from './mobx';

const App = () => {
    return (
        <Provider {...stores}>
            <Routes />
        </Provider>
    );
};

export default App;
