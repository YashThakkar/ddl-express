import React, { Component } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { inject, observer } from 'mobx-react'
import Home from './screens/Home/Home';
import SelectTruck from './screens/SelectTruck/SelectTruck';
import Packages from './screens/Packages/Packages';
import DetailsPage from './screens/DetailsPage/DetailsPage';
import AddJob from './screens/AddJob/AddJob';
import Login from './screens/Login/Login';
import CheckTruck from './screens/CheckTruck/CheckTruck';



const LoginStack = createStackNavigator();
const HomeStack = createStackNavigator();


const HomeStackScreen = () =>
    <HomeStack.Navigator>
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

const LoginStackScreen = () =>

    <LoginStack.Navigator>


        <LoginStack.Screen
            name="Login"
            component={Login}
            options={{ headerShown: false }}
        />
    </LoginStack.Navigator>

@inject("store")
@observer
export default class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: this.props.store.loggedIn,
            splash:false
        }
    }

    showModal = () => {
        setTimeout(() => {
            this.setState({
                splash: false,
            });
        }, 2000);
    };

    render() {
        if (this.state.splash) {
            return (
                <View/>
            )
        }
        else {
            return (
                <NavigationContainer>
                    {this.props.store.loggedIn ? <HomeStackScreen /> : <LoginStackScreen />}
                </NavigationContainer>
            )
        }
    }
}

const styles = StyleSheet.create({
    containerStyle: {

    }
})