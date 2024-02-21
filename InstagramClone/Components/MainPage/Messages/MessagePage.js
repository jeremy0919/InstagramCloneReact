import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import MessageStoryBar from "./MessageStoryBar";
import MessageButtons from "./MessageButtons";
import Messages from "./Messages";
export default function MessagePage(){
    // need to figure out navigation first 
    return (
    
              <ScrollView style={styles.scrollView}>
           <View  style={styles.StoryBar}>
               <MessageStoryBar/>
               
            </View>
            <View  style={styles.Buttons}>
                    <MessageButtons/>
            </View>
     

            <View  style={styles.Posts}>
                <Messages></Messages>
                <Messages></Messages>
            </View>
            </ScrollView>
    
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: 'column',
    },
    TopBar: {
        flex: 2, // 20% of the page
        width: '100%', 
        borderColor:"blue",
        borderRadius: 3,
    },
    StoryBar:{
        flex: 2, // 20% of the page
        width: '100%',
        borderColor:"red",
        borderRadius: 3,
    },
    Posts:{
        flex: 2, // 20% of the page
        width: '100%',
        borderColor:"red",
        borderRadius: 3,
      
    },
    AccountBio:{
        flex: 2, // 20% of the page
        width: '100%',
        borderColor:"green",
        borderRadius: 3,
    },
    Buttons:{
        flex: 2, // 20% of the page
        width: '100%',
        borderColor:"purple",
        borderRadius: 3,
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
    },
    scrollView: {
        flex: 1,
        width: "100%",
    },
});
