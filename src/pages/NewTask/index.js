import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from "../../config/firebaseConfig";
import styles from "./style";

export default function NewTask({ navigation }) {

    const [description, setDescription] = useState(null)
    function addTask() {
        database.collection("Tasks").add({
            description: description,
            status: false
        })
        navigation.navigate("Task")
    }


    return (
        <View style={styles.container}>
            {/* <Text style={styles.label}>Novo Pedido</Text> */}
            <TextInput
                style={styles.inputText}
                placeholder="Nome do Cliente + Pedido"
                onChangeText={setDescription}
                value={description}
            />
            <TouchableOpacity
                style={styles.btnNewTask}
                onPress={() => {
                    addTask()
                }}>
                <Text style={styles.iconNewTask}>
                    Adicionar Pedido</Text>
            </TouchableOpacity>
        </View>
    )
};

