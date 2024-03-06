import { createClient } from '@supabase/supabase-js';
import Databse from './Database';
// Initialize Supabase client
const supabase = Databse()



const convertImageToBinary = async (imageUri) => {
  try {
    // Read the image file from the URI
    let imageInfo = await FileSystem.getInfoAsync(imageUri);
    
    if (imageInfo.exists) {
      // Read the image file as binary data
      let imageBinaryData = await FileSystem.readAsStringAsync(imageUri, {
        encoding: FileSystem.EncodingType.Base64,
      });
      
      return imageBinaryData;
    } else {
      throw new Error('Image file does not exist');
    }
  } catch (error) {
    console.error('Error reading image file:', error);
    throw error;
  }
};

const UploadImage = async ( imageUri) => {
  try {
    const imageData = convertImageToBinary(imageUri)
    const { data, error } = await supabase.storage
      .from('Images')
      .upload('image-file-name.png', imageData);

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

export default UploadImage;
