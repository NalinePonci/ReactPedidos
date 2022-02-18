import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import database from "../../config/firebaseConfig";
import styles from "./style";

export default function Details({ navigation, route }) {

    const [description, SetDescriptionEdit] = useState(route.params.description)
    const [acompanhamentos, setAcompanhamentoEdit] = useState(route.params.acompanhamentos)
    const [frutas, setFrutasEdit] = useState(route.params.frutas)
    const [tamanho, setTamanhoEdit] = useState(route.params.tamanho)
    const [congelados, SetCongeladosEdit] = useState(route.params.congelados)

    // const idTask = route.params.id;

    // function editTask(description, frutas, acompanhamentos, tamanho, id) {
    //     database.collection("Tasks").doc(id).update({
    //         description: descriptionEdit,
    //         frutas: frutasEdit,
    //         acompanhamentos: acompanhamentosEdit,
    //         tamanho: tamanhoEdit,
    //     })
    //     navigation.navigate("Task")
    // }

    return (
        <View style={styles.container}>
            {/* <TextInput
                style={styles.inputText}
                placeholder=""
                onChangeText={SetDescriptionEdit}
                value={descriptionEdit}
            /> */}
            <Text style={styles.label}>Nome do Cliente:</Text>

            <TextInput
                style={styles.inputText}
                editable={false}
                placeholder="Ex: Rosiscleison"
                onChangeText={SetDescriptionEdit}
                value={description}
            />
            <Text style={styles.label}>Congelado Solicitado:</Text>

            <TextInput
                style={styles.inputText}
                editable={false}
                placeholder="Ex: Só Açaí ou Metade açaí metade Cupuaçu"
                onChangeText={SetCongeladosEdit}
                value={congelados}
            />
            <Text style={styles.label}>Tamanho Solicitado</Text>
            <TextInput
                editable={false}
                style={styles.inputText}
                placeholder="Ex: 5, 7, 8, 15"
                onChangeText={setTamanhoEdit}
                value={tamanho}
                keyboardType="numeric"
            />
            <Text style={styles.label}>Frutas Escolhidas</Text>
            <TextInput
                editable={false}
                style={styles.inputText}
                placeholder="Ex: Banana"
                onChangeText={setFrutasEdit}
                value={frutas}
            />
            <Text style={styles.label}>Acompanhamentos Escolhidos</Text>
            <TextInput
                editable={false}
                style={styles.inputText}
                placeholder="Ex: leite em pó, Confeito, Sucrilhos"
                onChangeText={setAcompanhamentoEdit}
                value={acompanhamentos}
            />

            {/* <TouchableOpacity
                style={styles.btnNewTask}
                onPress={() => {
                    editTask(descriptionEdit, frutasEdit, acompanhamentosEdit, tamanhoEdit, idTask)
                }}>
                <Text style={styles.iconNewTask}>
                    EDITAR PEDIDO</Text>
            </TouchableOpacity> */}
        </View>
    )
};
