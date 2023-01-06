import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, Platform, StatusBar } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View
                style={styles.container}
            >
                <SafeAreaView style={styles.droidSafeArea} />
                <View style={styles.TitleBar}><Text>Home Screen!</Text></View>
                <TouchableOpacity style={styles.routeCard}><Text style={styles.routeText}>IssLocation</Text>
                <Image source={require("../assets/icon.png")} style={styles.iconImage}></Image>


                </TouchableOpacity>

                <TouchableOpacity style={styles.routeText}><Text styles={styles.routeText}>Meteors</Text></TouchableOpacity>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {

        flex: 1
    },
    TitleText: {
        fontSize: 30,
        fontWeight: "bold",
        fontcolor: "white"
    },
    droidSafeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.courrentHight : 0,


    },
    TitleBar: {
        flex: 0.15,
        justifyContent: "center",
        alignItems: "center"


    },
    routeCard: {
        marginLeft: 50,
        marginRight: 50,
        marginTop: 50,
        borderRadius: 30,
        backgroundColor: "blue"

    },
    routeText: {
        fontSize: 30,
        fontWeight: "bold",
        color: "white"
    },
    iconImage:{
position:"absolute",
height:200,
width:200,
resizeMode:"contain"

    }




})
