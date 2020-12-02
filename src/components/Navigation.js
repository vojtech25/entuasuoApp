import 'react-native-gesture-handler';
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import routes from './Routes';

const Navigation = () => {

    const Stack = createStackNavigator();
    return (
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
    )
}

export default Navigation
