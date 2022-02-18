import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from "../../config/firebaseConfig";
import styles from "./style";

export default function Details({ navigation, route }) {

    const [descriptionEdit, SetDescriptionEdit] = useState(route.params.description)
    const idTask = route.params.id;

    function editTask(description, id) {
        database.collection("Tasks").doc(id).update({
            description: descriptionEdit,
        })
        navigation.navigate("Task")
    }


    return (
        <View style={styles.container}>
            {/* <Text style={styles.label}>Editar Pedido</Text> */}
            <TextInput
                style={styles.inputText}
                placeholder=""
                onChangeText={SetDescriptionEdit}
                value={descriptionEdit}
            />
            <TouchableOpacity
                style={styles.btnNewTask}
                onPress={() => {
                    editTask(descriptionEdit, idTask)
                }}>
                <Text style={styles.iconNewTask}>
                    EDITAR PEDIDO</Text>
            </TouchableOpacity>
        </View>
    )
};
