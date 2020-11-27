import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    modalBackGround: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: 800,
        width: 800,
        // backgroundColor: 'rgba(0, 0, 0, 0.5)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },

    imageInput: {
        backgroundColor: 'darkgray',
        height: 177,
        width: 177,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },

    image: {
        marginTop: 10,
        marginBottom: 10,
        backgroundColor: 'aliceblue',
        height: '80%',
        width: '90%',
    },
    button: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 45,
    }

})
export default styles