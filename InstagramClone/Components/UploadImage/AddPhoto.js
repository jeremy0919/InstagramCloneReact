import React, { useState } from 'react';
import { View, Button, Image, Alert, StyleSheet } from 'react-native';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import UploadImage from '../network/UploadImage';

const AddPhoto = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleChooseImage = () => {
    const options = {
     
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
        mediaType: 'photo'
      },
      
    };
  
    launchImageLibrary(options, (response) => {
      if (response.errorCode) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.didCancel) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.uri };
        setSelectedImage(source);
        uploadSelectedImage(response)
          .then(() => {
            Alert.alert('Image Uploaded Successfully');
          })
          .catch((error) => {
            console.error('Error uploading image:', error.message);
            Alert.alert('Error uploading image. Please try again.');
          });
      }
    });
  };
  

  const uploadSelectedImage = async (imageData) => {
    try {
      await UploadImage(imageData);
      Alert.alert('Image Uploaded Successfully');
    } catch (error) {
      console.error('Error uploading image:', error.message);
      Alert.alert('Error uploading image. Please try again.');
    }
  };

  return (
    <View>
      {selectedImage && (
        <Image source={selectedImage} style={{ width: 200, height: 200 }} />
      )}
      <Button title="Choose Image" onPress={ handleChooseImage} />
    </View>
  );
};

export default AddPhoto;
