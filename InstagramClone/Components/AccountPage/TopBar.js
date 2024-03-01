import { View, Text, StyleSheet, Button, Image, Dimensions } from "react-native";
import ImageComponent from "../network/GetImage";
export default function TopBar(){
    const windowHeight = Dimensions.get('window').height;
    const postnum = 12;
    const followernum = 15;
    const followingnum = 25;
// might need buttons in their own container but a good spot for now 
 //   const profilePic =  ImageComponent('Image1.png')
   // console.log(profilePic)
    return (
        <View style={styles.container}>
            <View style={styles.containerL}>
                <Image source={{ uri: `https://picsum.photos/200`}} style={[styles.image, { height: (windowHeight * 0.1) }]} /> 
                <Button title={`${postnum}\nPosts`} style={styles.button} /> 
                <Button title={`${followernum}\nFollowers`} style={styles.button} />
                <Button title={`${followingnum}\nFollowing`} style={[styles.button, { width: '20%' }]} />
            </View>
            <Text>Username</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 15
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
    image: {
        width: 60, // Adjust as needed
        height: 60, // Adjust as needed
        borderRadius: 30, // Half of the width and height to make it circular
        margin: 5, // Adjust as needed
    },
});
