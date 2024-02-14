import { View, Text, StyleSheet, Button } from "react-native";
export default function ExploreView(){
    return (
        <View style={styles.container}>
          <Text style={styles.text}> ExploreView </Text> 
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