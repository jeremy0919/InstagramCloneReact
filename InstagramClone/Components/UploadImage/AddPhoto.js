import { View, Text, StyleSheet, Button } from "react-native";
export default function AddPhoto(){
    return (
        <View style={styles.container}>
          <Text style={styles.text}> AddPhoto </Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center"
    },
    text:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },

})