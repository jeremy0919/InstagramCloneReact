import React, { useEffect, useState } from 'react';
import { View, Image, Text } from 'react-native';
import Database from './Database'; // Adjust the path to your Database file

const supabase = Database;

const bucketName = 'Images';

const ImageComponent = (fileName) => {
  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    async function fetchImage() {
      try {
        const { data, error } = await supabase.storage
          .from(bucketName)
          .download(fileName);

        if (error) {
          console.error('Error downloading image:', error.message);
        } else {
         // const url = URL.createObjectURL(data);
         console.log(data)
         const base64Data = Buffer.from(data).toString('base64');
         // Create the data URL
         const url = `data:image/png;base64,${base64Data}`;
         setImageUrl(url);
         console.log(url)
       }
          // Create the data URL
        
    
      } catch (error) {
        console.error('Error fetching image:', error.message);
      }
    }

    fetchImage();
  }, []);

  return (
    <View>
      {imageUrl ? (
        <Text>{imageUrl}</Text>
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default ImageComponent;
