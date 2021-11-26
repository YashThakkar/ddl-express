/**
 * @format
 */
import 'react-native-gesture-handler';
import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import * as React from 'react';
import Main from './src/Main'
import Store from './src/Store';
import { Provider } from 'mobx-react';


const MyStack = () => {
    return (
        <Provider store={Store} >
            <Main />
        </Provider>
    );
};
AppRegistry.registerComponent(appName, () => MyStack);
