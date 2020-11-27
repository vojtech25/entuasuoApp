import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '15%',
        minHeight: 20,
        width: '100%',
        // display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'blue',
    },
    left: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
        padding: 5,
        // borderWidth: 2,
        borderColor: 'green'
    },
    center: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
        padding: 5,
        // borderWidth: 2,
        borderColor: 'red'
    },
    right: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
        padding: 5,
        // borderWidth: 2,
        borderColor: 'yellow'
    }
})
export default styles