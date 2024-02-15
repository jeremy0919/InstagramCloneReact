import { View, Text, StyleSheet, Button } from "react-native";
export default function PostBar(DidLike, OpenComments,Share, BookMark){
    return (
        <View style={styles.container}>
            <View style={styles.containerL}>
         <Button title="Like"></Button> 
         <Button title="comment"></Button>
         <Button title="share"></Button>
         </View>
         <View style={styles.containerR}>
         <Button title="bookmark"></Button>
         </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:"row"
        
    },
    containerL: {
        flex: 1,
        alignItems:"flex-start",
        flexDirection: "row",
        justifyContent:"flex-start"
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
        marginBottom: 16,
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