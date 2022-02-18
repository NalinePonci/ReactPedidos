import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import database from "../../config/firebaseConfig";
import styles from "./style";
export default function NewTask({ navigation }) {

    const [description, setDescription] = useState(null)
    const [acompanhamentos, setAcompanhamento] = useState(null)
    const [frutas, setFrutas] = useState(null)
    const [tamanho, setTamanho] = useState(null)
    const [congelados, setCongelados] = useState(null)



    function addTask() {
        database.collection("Tasks").add({
            description: description,
            frutas: frutas,
            acompanhamentos: acompanhamentos,
            tamanho: tamanho,
            congelados: congelados,
            status: false
        })
        navigation.navigate("Task")
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior='position' style={{ flex: 1 }} >

            <View style={styles.row}>
                <Text style={styles.label}>Nome do Cliente</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder="Ex: Rosiscleison"
                    onChangeText={setDescription}
                    value={description}
                />
                <Text style={styles.label}>Açaí, Cupuaçu, Mangaba ?</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder="Ex: Só Açaí ou Metade açaí metade Cupuaçu"
                    onChangeText={setCongelados}
                    value={congelados}
                />
                <View>
                    <Text style={styles.label}>Tamanho ?</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Ex: 5, 7, 8, 15"
                        onChangeText={setTamanho}
                        value={tamanho}
                        keyboardType="numeric"
                    />
                    <Text style={styles.label}>Frutas ?</Text>
                    <TextInput
                        style={styles.inputText}
                        placeholder="Ex: Banana"
                        onChangeText={setFrutas}
                        value={frutas}
                    />
                </View>
                <Text style={styles.label}>Acompanhamentos ?</Text>
                <Text style={styles.labelTwo}>Direito a 3</Text>
                <TextInput
                    style={styles.inputText}
                    placeholder="Ex: leite em pó, Confeito, Sucrilhos"
                    onChangeText={setAcompanhamento}
                    value={acompanhamentos}
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
        </KeyboardAvoidingView>
    )
};

