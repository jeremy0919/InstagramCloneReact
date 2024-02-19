import { View, Text, StyleSheet, Button, ScrollView, StatusBar } from "react-native";
import Feed from "./feed";
import MainPageTopBar from "./MainPageTopBar";


export default function MainPage(){

    const temmpUser1 = {
        AccountName: "temmpUser1",
        image: require("../../assets/65566acbbbbf6_Screenshot 2023-11-02 114221.png"),
        numbLikes:20,
        Likes: ['john','bob'],
        Caption: "For the boys!!",
        Comments: ["Alpha"]
      };
      const temmpUser2 = {
        AccountName: "temmpUser2",
        image: require("../../assets/pawfect.png"),
        numbLikes:20,
        Likes: ['john','bob'],
        Caption: "For the boys!!",
        Comments: ["Sigma"]
      };
      const temmpUser3 = {
        AccountName: "temmpUser3",
        image: require("../../assets/6556ca1f752e1_blastoise.jpg"),
        numbLikes:20,
        Likes: ['john','bob'],
        Caption: "For the boys!!",
        Comments: ["Phi"]
      };
    return (

        <View style={styles.container}>

          <ScrollView>
            <MainPageTopBar/>
          <Feed {...temmpUser1}/>
          <Feed {...temmpUser2}/>
          <Feed {...temmpUser3}/>
          </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({

    text:{
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 16,
    },
    container:{
      paddingTop: StatusBar.currentHeight
    }

})