import React, { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import database from "../../config/firebaseConfig";
import { FontAwesome } from "@expo/vector-icons";
import styles from "./style";

export default function Task({ navigation }) {
    const [task, setTask] = useState([]);

    function deleteTask(id) {
        database.collection("Tasks").doc(id).delete();
    }

    useEffect(() => {
        database.collection("Tasks").onSnapshot((query) => {
            const list = [];
            query.forEach((doc) => {
                list.push({ ...doc.data(), id: doc.id });
            });
            setTask(list);
        });
    }, []);


    return (

        <View style={styles.container}>
            {/* <Text style={styles.label}>Pedidos de Hoje</Text> */}
            <FlatList
                showsVerticalScrollIndicator={false}
                data={task}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.Tasks}>
                            <TouchableOpacity
                                style={styles.deleteTask}
                                onPress={() => {
                                    deleteTask(item.id)
                                }}
                            >
                                <FontAwesome
                                    name="trash"
                                    size={40}
                                    color="#9932CC"
                                    style={styles.iconTask}>
                                </FontAwesome>
                            </TouchableOpacity>
                            <Text
                                style={styles.descriptionTask}
                                onPress={() =>
                                    navigation.navigate("Details", {
                                        id: item.id,
                                        description: item.description,
                                        tamanho: item.tamanho,
                                        frutas: item.frutas,
                                        acompanhamentos: item.acompanhamentos,
                                        congelados: item.congelados,
                                    })
                                }
                            >
                                <View style={styles.box}>
                                    <Text style={styles.ProdDescBold}>
                                        Nome:
                                        <Text style={styles.ProdDesc}> {item.description}</Text>
                                    </Text>
                                    <Text style={styles.ProdDescBold}>
                                        Congelado Escolhido:
                                        <Text style={styles.ProdDesc}> {item.congelado}</Text>
                                    </Text>
                                    <Text style={styles.ProdDescBold}>
                                        Tamanho:
                                        <Text style={styles.ProdDesc}> {item.tamanho}</Text>
                                    </Text>
                                    <TouchableOpacity
                                        style={styles.BtnDet}
                                        onPress={() =>
                                            navigation.navigate("Details", {
                                                id: item.id,
                                                description: item.description,
                                                tamanho: item.tamanho,
                                                frutas: item.frutas,
                                                acompanhamentos: item.acompanhamentos,
                                                congelados: item.congelados,
                                            })
                                        }>
                                        <Text style={styles.iconNewTask}>VER MAIS »</Text>
                                    </TouchableOpacity>
                                </View>
                            </Text>

                        </View>
                    )
                }}
            />
            <TouchableOpacity style
                style={styles.buttonNewTask}
                onPress={() => navigation.navigate("New Task")}
            >
                <Text style={styles.iconButton}>+</Text>
            </TouchableOpacity>
        </View>
    )

};
