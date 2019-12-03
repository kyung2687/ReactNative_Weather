import React from "react";
import { StyleSheet, Text, View, StatusBar} from "react-native";

export default function Loding() {
    return (
    <View style={styles.container}>
        <StatusBar barStyle="dark-content" />
        <Text style={styles.text}>Getting the funcking Weather!</Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, // flex 설정
        justifyContent: "flex-end", //flex 아래로
        paddingHorizontal: 30, // 가로 패딩
        paddingVertical: 100, // 세로 패딩
        backgroundColor: "#FDF6AA",
    },
    text: {
        color: "#2c2c2c",
        fontSize: 30,
    }
})