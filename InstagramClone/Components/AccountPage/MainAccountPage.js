import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import Posts from "./Posts";
import AccountPostBar from "./AccountPostBar";
export default function MainAccountPage(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}> MainAccountPage </Text> 
                <AccountPostBar></AccountPostBar>
            </View>
            <ScrollView style={styles.scrollView}>
                <Posts></Posts>
                <Posts></Posts>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    header: {
        marginBottom: 50,
        flex:1
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
    scrollView: {
        flex: 1,
        width: "100%",
        alignSelf: "flex-end", // Align to the bottom of the container
    },
});
