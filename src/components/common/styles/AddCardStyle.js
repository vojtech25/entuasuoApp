import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        height: 100,
        width: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'darkgray',
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.9,
        elevation: 10,
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // marginVertical: 10,
        backgroundColor: 'blue',
        height: '100%',
        width: '100%',
    },
    center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
    },
})
export default styles

