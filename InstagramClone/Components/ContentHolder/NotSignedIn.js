import React from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput } from 'react-native';

export default function NotSignedIn() {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Instagram</Text>

      <View style={styles.inputContainer}>

        <TextInput style={styles.input} placeholder='Phone number, username, or email'/>
      </View>

      <View style={styles.inputContainer}>
       
        <TextInput style={styles.input} placeholder='Password'/>
      </View>
      <View style={styles.inputContainer}>
    
        <Button style={styles.Button} title='Log in'/>
      </View>


      <View style={styles.inputContainer2}>
    
            <Text style={styles.label}>Dont have an account? Sign up</Text>
          
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  inputContainer2: {
    marginBottom: 20,
    width: '100%',
    position:'absolute',
    bottom:0
  },
  label: {
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    height: 40,
    backgroundColor:'#EEEEEE'
  },
  Button:{
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    width: '100%',
    height: 40,
    color:'blue'
  }
});
