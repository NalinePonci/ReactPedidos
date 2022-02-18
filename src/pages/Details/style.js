import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 5,
    },
    label: {
        width: " 90%",
        marginTop: 20,
        marginLeft: 22,
        fontSize: 18,
        color: "#9932CC"
    },
    inputText: {
        width: "90%",
        marginTop: 10,
        padding: 5,
        height: 50,
        borderBottomWidth: 2,
        borderColor: "#DDA0DD",
        marginLeft: "auto",
        marginRight: "auto",
        backgroundColor: "#fff",
        color: "#000",
        fontSize: 18,
    },
    btnNewTask: {
        marginTop: 20,
        marginLeft: "auto",
        marginRight: "auto",
        padding: 15,
        width: "50%",
        backgroundColor: "#9932CC",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderColor: "#fff",

    },
    iconNewTask: {
        color: "#fff",
        fontSize: 17,
        fontWeight: '500'
    }
});

export default styles;