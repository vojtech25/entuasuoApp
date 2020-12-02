import { StyleSheet } from "react-native"
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green'
    },
    projectArea: {
        flex: 1,
        flexWrap: 'wrap',
        flexDirection: 'row',
        marginHorizontal: 20,
        paddingLeft: 20,
        backgroundColor: 'white',
    },
    projectCard: {
        marginRight: 20,
        marginVertical: 20,
        height: 150,
        width: 150,
        backgroundColor: 'pink'
    }
})
export default styles