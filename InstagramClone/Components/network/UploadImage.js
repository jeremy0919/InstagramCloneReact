import { createClient } from '@supabase/supabase-js';
import Databse from './Database';
import * as FileSystem from 'expo-file-system';
import { decode } from 'base64-arraybuffer'
// Initialize Supabase client
const supabase = Databse();


const convertImageToBuffer = async (imageUri) => {
  try {
    // Read the image file from the URI
    let imageInfo = await FileSystem.getInfoAsync(imageUri);

    if (imageInfo.exists) {
      // Read the image file as binary data
      let imageBinaryData = await FileSystem.readAsStringAsync(imageUri, {
        encoding: FileSystem.EncodingType.Base64,
      });

      // Convert base64 to ArrayBuffer using base64-arraybuffer module
      const arrayBuffer = decode(imageBinaryData);
      console.log('Converted image data:', arrayBuffer);
      return arrayBuffer; // ArrayBuffer
    } else {
      throw new Error('Image file does not exist');
    }
  } catch (error) {
    console.error('Error reading image file:', error);
    throw error;
  }
};


const uploadImage = async (imageUri) => {
  console.log("in Upload Image")
  console.log( imageUri)
  try {
    const imageData = await convertImageToBuffer(imageUri);
    console.log( imageData)
    console.log(decode(imageData))
    const { data, error } = await supabase.storage
      .from('images')
      .upload('public/avatar1.png', imageData, {
        contentType: 'image/png'
      })

    if (error) {
      console.error('Error uploading image:', error.message);
    } else {
      console.log('Image uploaded successfully:', data);
      // You can save the image URL or any relevant information to your database here
    }
  } catch (error) {
    console.error('Error uploading image:', error.message);
    throw error; // rethrow the error to be caught by the caller
  }
};

export default uploadImage;
