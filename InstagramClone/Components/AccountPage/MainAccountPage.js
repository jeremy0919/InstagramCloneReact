import { View, Text, StyleSheet, Button, ScrollView } from "react-native";
import Posts from "./Posts";
import AccountPostBar from "./AccountPostBar";
import StoryBar from "./StoryBar";
import Buttons from "./Buttons";
import AccountBio from "./AccountBio";
import TopBar from "./TopBar";

export default function MainAccountPage(){
    return (
    
              <ScrollView style={styles.scrollView}>
            <View style={styles.TopBar}>
                    <TopBar/>
                    
            </View>
            <View  style={styles.AccountBio}>
                    <AccountBio/>
            </View>
            <View  style={styles.Buttons}>
                    <Buttons/>
            </View>
            <View  style={styles.StoryBar}>
               <StoryBar/>
               
            </View>

            <View  style={styles.Posts}>
            <AccountPostBar></AccountPostBar>
                <Posts></Posts>
                <Posts></Posts>
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
