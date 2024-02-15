import { View, Text, StyleSheet, Platform, Image} from "react-native";
import PostBar from "./PostBar";


export default function Feed(    
   { AccountName,
    image,
    numbLikes,
    Likes,
    Caption,
    Comments}
    ) {
        const postbarStats = {
            DidLike: false,
            OpenComments: "function postID",
            Share: "Function postID",
            BookMark: "Functio postID"
        }
    return(
        <View style={styles.card}>
            <View style={styles.nameConatiner}>
                <Text style={styles.name}>{AccountName}</Text>
            </View>
            <Image source={image} 
            style={styles.image} 
            accessibilityLabel={`${AccountName} pokemon`}
            resizeMode="contain"
            />
            <View style={styles.typeContainer}> 

            </View>
            <View style={styles.moveContainer}>
                <PostBar {...postbarStats}/>
                <Text style={styles.likes}>
               {numbLikes} Liked by:
                <Text style={{fontWeight:"bold"}}>
                     {Likes.join(" and ")}
                </Text>
                </Text>
            </View>
            <View style={styles.Caption}>
                <Text style={styles.CaptionText}> 
                {Caption}
                </Text>
            </View>
            <View style={styles.Comments}>
                <Text style={styles.CommentText}>Comments:{Comments.join(", ")}</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    card:{
        flex: 1, // This will make the card fill the entire screen
        backgroundColor: "white",
        width:'100%',
        paddingBottom: 10,
        marginBottom:10,
        ...Platform.select({
            ios:{
                shadowOffset: {width:2, hieght: 2},
                shadowColor: "#333",
                shadowOpacity: 0.3,
                shadowRadius: 4
            },
            android:{
                elevation: 5,
            }
        })
    },

    nameConatiner:{
        flexDirection:"row",
        justifyContent: "space-between",
        marginBottom: 32
    },
    name:{
        fontSize:30,
        fontWeight:"bold"
    },
    image:{
        width:"100%",
        height:200,
        marginBottom:16
    },
    typeEmoji:{
        fontSize: 30,
        marginRight: 12
    },
    typeText:{
        fontSize: 22,
        fontWeight: "bold"
    },
    typeContainer:{
        marginBottom:40,
        alignItems: "center"
    },

    moveContainer:{
        marginBottom: 16,
    },
    likes:{
        fontSize: 15,
   
    },
    CommentText:{
        marginBottom:8
    },
    Comments:{
        fontSize: 22,
        fontWeight: "bold"
    },
    CaptionText:{
        marginBottom:8
    },
    Caption:{
        fontSize: 22,
        fontWeight: "bold"
    }
})