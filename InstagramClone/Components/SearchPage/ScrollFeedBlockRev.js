import React from 'react';
import { View, StyleSheet, Image, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export default function ScrollPageBlockRev({ children, style }) {
    return (
        <View style={styles.container}>
            <View style={styles.rightBox}>
                <Image source={{ uri: 'https://picsum.photos/200' }} style={[styles.image, { height: windowHeight * 0.4 , width:"auto"}]} />
            </View>
            <View style={styles.leftBox}>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={[styles.image, { height: (windowHeight * 0.2) }]} />
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={[styles.image, { height: (windowHeight * 0.2) }]} />
                </View>
                <View style={styles.imageContainer}>
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={[styles.image, { height: (windowHeight * 0.2) }]} />
                    <Image source={{ uri: 'https://picsum.photos/200' }} style={[styles.image, { height: (windowHeight * 0.2) }]} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flex: 1,
    },
    leftBox: {
        flex: 2,
        backgroundColor: 'white',
        padding: 3,
    },
    rightBox: {
        flex: 1,
        backgroundColor: 'white',
        padding: 3,
    },
    imageContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 2,
    },
    image: {
        width: '50%',
        backgroundColor: 'yellow',
    },
});
