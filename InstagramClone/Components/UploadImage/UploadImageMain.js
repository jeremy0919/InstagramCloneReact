import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import PhotoLibrary from "./PhotoLibrary";
import AccessPhotos from "./AccessPhoto";
export default function UploadImageMain(){
    return (
        <View style={styles.container}>
            <View style={styles.flexBox}> 
                <AccessPhotos/>
            </View>
         
      
        <View style={styles.flexBox}>
             <PhotoLibrary/>
        </View>
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
    flexBox:{
        flex:2,

    }

})