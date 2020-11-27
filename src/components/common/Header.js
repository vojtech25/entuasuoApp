import React from 'react'
import { StyleSheet, Text, View, Button, TextInput, ImageView, StatusBar } from 'react-native';

import styles from './styles/HeaderStyle'

const Header = ({ left, leftStyle, leftAction, center, centerStyle, centerAction, right, rightStyle, rightAction }) => {

    const defaultLeftStyle = leftStyle ? { ...styles.left, leftStyle } : styles.left
    const defaultCenterStyle = centerStyle ? { ...styles.center, centerStyle } : styles.center
    const defaultRightStyle = rightStyle ? { ...styles.right, rightStyle } : styles.right
    return (
        <View style={styles.header}>
            <StatusBar backgroundColor="blue" />
            <View style={defaultLeftStyle} onClick={leftAction}><Text>
                {left}
            </Text></View>
            <View style={defaultCenterStyle} onClick={centerAction}><Text style={{ color: 'white', fontSize: 15 }}>
                {'Maria Continuity'}
            </Text></View>
            <View style={defaultRightStyle} onClick={rightAction}><Text>
                {right}
            </Text></View>
        </View>
    )
}

export default Header
