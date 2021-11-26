import React, { Component } from 'react';
import {
    StyleSheet,
    View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './screens/Home/Home';
import SelectTruck from './screens/SelectTruck/SelectTruck';
import Packages from './screens/Packages/Packages';
import DetailsPage from './screens/DetailsPage/DetailsPage';
import AddJob from './screens/AddJob/AddJob';
import Login from './screens/Login/Login';
import CheckTruck from './screens/CheckTruck/CheckTruck';



const HomeStack = createStackNavigator();


const HomeStackScreen = () =>
    <HomeStack.Navigator>
        <HomeStack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
        />
        <HomeStack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
        />
        <HomeStack.Screen
            name="Truck"
            component={SelectTruck}
            options={{ headerShown: false }}
        />
        <HomeStack.Screen
            name="Packages"
            component={Packages}
            options={{ headerShown: false }}
        />
        <HomeStack.Screen
            name="Details"
            component={DetailsPage}
            options={{ headerShown: false }}
        />
        <HomeStack.Screen
            name="Job"
            component={AddJob}
            options={{ headerShown: false }}
        />
        <HomeStack.Screen
            name="Check"
            component={CheckTruck}
            options={{ headerShown: false }}
        />
    </HomeStack.Navigator>




export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }


    render() {
        return (
            <NavigationContainer>
                <HomeStackScreen />
            </NavigationContainer>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {

    }
})