import { View, Text, StyleSheet, Button, TextInput, Dimensions } from "react-native";

export default function SearchBar(){
    const windowWidth = Dimensions.get('window').width; // I dont think this works
    return (
        <View style={[styles.container, {width:windowWidth}]}>
             <TextInput style={styles.input} placeholder='Username' />
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
    input:{
        height:40,
        marginBottom:15,
        padding:10,
        borderWidth:1,
        borderRadius:5,
        borderColor:"#ddd",
        width:"100%"
      },
})