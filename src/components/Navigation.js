import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routes from './Routes';
import { Provider } from 'react-redux';
import store from '../redux/store'


const Navigation = () => {

    const Stack = createStackNavigator();
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Stack.Navigator>
                    {
                        routes.map((route, index) => (
                            <Stack.Screen
                                key={index}
                                name={route.name}
                                component={route.component}
                            />
                        ))
                    }
                </Stack.Navigator>
            </NavigationContainer>
        </Provider>
    )
}

export default Navigation
