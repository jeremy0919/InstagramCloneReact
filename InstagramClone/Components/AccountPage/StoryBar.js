import { View, Text, StyleSheet, Button, Image, Dimensions } from "react-native";

const windowHeight = Dimensions.get('window').height;

export default function StoryBar(){
    return (
        <View style={styles.container}>
          <Text style={styles.text}> Story Highlights </Text> 
          <Text style={styles.text1}> Keep your favorite stories on your bar </Text> 
          <View style={styles.imageContainer}>
                <View style={[styles.buttonContainer, { height: (windowHeight * 0.1) }]}>
                    <Button title="+" onPress={() => {}} />
                </View>
                <Image source={{ uri: 'https://picsum.photos/200' }} style={[styles.image, { height: (windowHeight * 0.1) }]} />
                <Image source={{ uri: 'https://picsum.photos/200' }} style={[styles.image, { height: (windowHeight * 0.1) }]} />
                <Image source={{ uri: 'https://picsum.photos/200' }} style={[styles.image, { height: (windowHeight * 0.1) }]} />
                <Image source={{ uri: 'https://picsum.photos/200' }} style={[styles.image, { height: (windowHeight * 0.1) }]} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingBottom: 10,
        paddingTop: 10,
        margin: 5
    },
    text:{
        fontSize: 18,
        fontWeight: "bold",
    },
    text1:{
        fontSize: 14,
  
    },
    imageContainer: {
        flexDirection: 'row',
    },
    image: {
        width: 60, // Adjust as needed
        height: 60, // Adjust as needed
        borderRadius: 30, // Half of the width and height to make it circular
        margin: 5, // Adjust as needed
    },
    buttonContainer: { // need to be made proportional to the screen
        width: 60, // Adjust as needed
        height: 60, // Adjust as needed
        borderRadius: 30, // Half of the width and height to make it circular
        margin: 5, // Adjust as needed
        backgroundColor: 'blue', // Adjust as needed
        justifyContent: 'center',
        alignItems: 'center',
    }
});
