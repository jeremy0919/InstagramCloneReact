import { View, Text, StyleSheet, Button } from "react-native";
export default function AccountPostBar(){
    return (
        <View style={styles.container}>
            <View style={styles.containerL}>
         <Button title="Posts"></Button> 
         <Button title="Reels"></Button>
         <Button title="Tagged"></Button>
         </View>
    
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        padding:30
    },
    containerL: {
        flex: 1,
        alignItems:"flex-start",
        flexDirection: "row",
        justifyContent:"space-between",
        
    },
    containerR: {
        flex: 1,
        flexDirection: "row",
        alignItems:"flex-end",
        justifyContent:"flex-end"
    },
    text:{
        fontSize: 24,
        fontWeight: "bold",
      
    },
    badge:{ // can be used for instagram badge start
        flexDirection: "row",
        alignItems:"center",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 20,
        borderWidth: 4,
    },
})