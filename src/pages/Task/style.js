import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#DDA0DD",
        paddingTop: 20,

    },
    iconButton: {
        color: "#fff",
        fontSize: 23,
        fontWeight: '500'
    }, label: {
        width: " 90%",
        marginTop: 10,
        marginBottom: 10,
        marginLeft: 18,
        fontSize: 18,
        color: "#9932CC"
    },
    buttonNewTask: {
        position: "absolute",
        width: 60,
        height: 60,
        bottom: 30,
        left: 20,
        backgroundColor: "#9932CC",
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
    },
    Tasks: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 5
    },
    deleteTask: {
        justifyContent: "center",
        paddingLeft: 15,
    },
    descriptionTask: {
        width: "85%",
        alignContent: "flex-start",
        backgroundColor: "#fff",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 15,
        marginBottom: 5,
        marginRight: 10,
        color: "#000",
        fontSize: 17,
    }
});

export default styles;