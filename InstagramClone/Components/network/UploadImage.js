import { createClient } from '@supabase/supabase-js';
import Databse from './Database';
// Initialize Supabase client
const supabase = Databse()

const UploadImage = async (imageData) => {
  try {
    const { data, error } = await supabase.storage
      .from('Images')
      .upload('image-file-name.jpg', imageData);

    if (error) {
      console.error('Error uploading image:', error.message);
    } else {
      console.log('Image uploaded successfully:', data);
      // You can save the image URL or any relevant information to your database here
    }
  } catch (error) {
    console.error('Error uploading image:', error.message);
  }
};

export default UploadImage;
