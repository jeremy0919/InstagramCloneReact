import { View, Text, StyleSheet, Button } from "react-native";

export default function MessageButtons(){
    return (
        <View style={styles.container}>
            <View style={styles.containerL}>
                <Button title="Edit Profile" style={styles.button} />
                <Button title="Share Profile" style={styles.button} />
                <Button title="+" style={[styles.button, { width: '20%' }]} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: 30
    },
    containerL: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: '100%', // Ensure the container takes up the full width
    },
    button: {
        flex: 1, // Each button takes up equal space initially
        width: '40%', // Adjust width as needed
        marginHorizontal: '2%', // Adjust margin as needed
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
});
