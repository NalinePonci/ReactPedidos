import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 10,
        paddingBottom: 100,
        overflow: 'hidden',
        height: "50%",

    },
    iconButton: {
        color: "#fff",
        fontSize: 23,
        fontWeight: '500'
    },
    label: {
        width: "90%",
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
        backgroundColor: "#430d5e",
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
        backgroundColor: "#dda0dd38",
        padding: 12,
        paddingHorizontal: 20,
        borderRadius: 15,
        marginBottom: 5,
        marginRight: 10,
        color: "#000",
        fontSize: 17,
        justifyContent: 'center',
        alignItems: 'center'

    },
    ProdDesc: {
        color: "#000",
        fontSize: 21,
        fontWeight: '700'
    },
    ProdDescBold: {
        color: "#430d5e",
        fontSize: 20,

    },
    iconTask: {
        paddingBottom: 10
    },
    BtnDet: {
        padding: 10,
        width: "60%",
        backgroundColor: "#FFF",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        borderColor: "#9932CC",
        marginTop: 10,
    },
    iconNewTask: {
        color: "#9932CC",
        fontSize: 15,
        fontWeight: '500'
    }
});

export default styles;