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


async function uploadImage(image) {
  try {
    /*
    setUploading(true)

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images, // Restrict to only images
      allowsMultipleSelection: false, // Can only select one image
      allowsEditing: true, // Allows the user to crop / rotate their photo before uploading it
      quality: 1,
      exif: false, // We don't want nor need that data.
    })

    if (result.canceled || !result.assets || result.assets.length === 0) {
      console.log('User cancelled image picker.')
      return
    }
*/
 //   const image = result.assets[0]
    console.log('Got image', image)

    if (!image.uri) {
      throw new Error('No image uri!') // Realistically, this should never happen, but just in case...
    }

    const arraybuffer = await fetch(image.uri).then((res) => res.arrayBuffer())

    const fileExt = image.uri?.split('.').pop()?.toLowerCase() ?? 'jpeg'
    const path = `${Date.now()}.${fileExt}`
    const { data, error: uploadError } = await supabase.storage
      .from('avatars')
      .upload(path, arraybuffer, {
        contentType: image.mimeType ?? 'image/jpeg',
      })

    if (uploadError) {
      throw uploadError
    }

    onUpload(data.path)
  } catch (error) {
    if (error instanceof Error) {
      Alert.alert(error.message)
    } else {
      throw error
    }
  } finally {
    setUploading(false)
  }
}

export default uploadImage;
