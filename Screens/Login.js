import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const backImg = require("../assets/back2.jpg")

export default function Login({ navigation }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onHandleLogin = () => {
        if (email !== "" && password !== "") {
            signInWithEmailAndPassword(auth, email, password)
                .then(() => console.log())
                .catch((err) => Alert.alert("Login Error", err.message));
        }
    }

    return (
        <View style={style.container}>
            <Image source={backImg} style={style.backImage} />
            <View style={style.whiteSheet}>
                <SafeAreaView style={style.form}>
                    <Text style={style.title}>Log In</Text>
                    <TextInput
                        style={style.input}
                        placeholder="Enter email"
                        autoCapitalize="none"
                        keyboardType="email-address"
                        textContentType="emailAddress"
                        autoFocus={true}
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                    />
                    <TextInput
                        style={style.input}
                        placeholder="Enter password"
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                        textContentType="password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                    />
                </SafeAreaView>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0000FF"
    },
    whiteSheet: {
        width: '100%',
        height: '75%',
        position: "absolute",
        marginTop: '10%',
        bottom: 0,
        backgroundColor: '#fff',
        borderTopRightRadius: 60,
    },
    backImage: {
        width: "100%",
        height: 340,
        position: "absolute",
        top: 0,
        resizeMode: 'cover',
    },
    title: {
        fontSize: 36,
        fontWeight: 'bold',
        color: "black",
        alignSelf: "center",
        paddingBottom: 24,
    },
    form: {
        flex: 1,

        marginHorizontal: 30,
    },
    input: {
        backgroundColor: "#F6F7FB",
        height: 58,
        marginBottom: 20,
        fontSize: 16,
        borderRadius: 10,
        padding: 12,
    },
})
