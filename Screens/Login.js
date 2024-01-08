import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, SafeAreaView, TouchableOpacity, StatusBar, Alert, ImageBackground, KeyboardAvoidingView } from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const backImg = require("../assets/back2.jpg")
const linear = require("../assets/linear.png")

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
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={style.container}>
            <View style={style.container}>
                <ImageBackground source={require("../assets/linear.png")} style={style.container}>
                    <SafeAreaView style={style.form}>
                        <View style={style.whiteSheet}>
                            <Text style={style.title}> LOG IN </Text>
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
                            <TouchableOpacity style={style.button} onPress={onHandleLogin}>
                                <Text style={{ fontWeight: 'bold', color: '#fff', fontSize: 18 }}> Log In </Text>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                    <View style={{ marginTop: 20, alignItems: 'center', alignSelf: 'center', bottom: 30, position: 'absolute' }}>
                        <Text style={{ color: 'black', fontWeight: '600', fontSize: 14 }}> Don't have an account? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
                            <Text style={{ color: '#f57c00', fontWeight: '600', fontSize: 14 }}> Sign Up</Text>
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        </KeyboardAvoidingView>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
    },
    whiteSheet: {
        width: '100%',
        height: '50%',
        position: "absolute",
        marginTop: '30%',
        backgroundColor: 'transparent',
        borderRadius: 20,

        padding: 10,
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
        borderColor: 'black',
        borderWidth: 1,
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    button: {
        backgroundColor: '#f57c00',
        height: 58,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,

    },
})
