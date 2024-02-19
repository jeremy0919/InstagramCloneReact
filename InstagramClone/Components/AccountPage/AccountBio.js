import { View, Text, StyleSheet, Button } from "react-native";
export default function AccountBio(){
    return (
        <View style={styles.container}>
          <Text style={styles.text}> Words that describe the bio  </Text> 
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent:"center",
        padding:30
    },
    text:{
        fontSize: 24,
        fontWeight: "bold",
     
    },

})