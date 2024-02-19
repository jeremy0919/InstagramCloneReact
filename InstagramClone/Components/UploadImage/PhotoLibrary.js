import React from "react";
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from "react-native";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function PhotoLibrary(){
    return (
        <View style={styles.container}>
            <View>
                <Text>Image Bar</Text>
            </View>
            <ScrollView>
                <View style={styles.row}>
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
                </View>
                <View style={styles.row}>
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
                </View>
                <View style={styles.row}>
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
                </View>
                <View style={styles.row}>
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
                </View>
                <View style={styles.row}>
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={styles.image} />
                </View>
                {/* Add more rows as needed */}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
   
    },
    image: {
        width: windowWidth * 0.25, // Adjust according to your preference
        height: windowHeight * 0.1, // Adjust according to your preference
    },
});
