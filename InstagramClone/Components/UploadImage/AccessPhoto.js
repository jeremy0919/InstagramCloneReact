import { View, Text, StyleSheet, Button, Image, ScrollView, Dimensions } from "react-native";
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export default function AccessPhotos(){
    return (
        <View style={styles.container}>
            <ScrollView>
         
          <Image source={{ uri: 'https://picsum.photos/200' }} style={[styles.image, { height: (windowHeight * 0.8), width: windowWidth*.7}]} />
          </ScrollView>
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