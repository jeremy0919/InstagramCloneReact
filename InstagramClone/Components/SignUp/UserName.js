import React, {useState} from 'react';
import { View, Text, StyleSheet, Button, Image, TextInput } from 'react-native';
import newUser from '../network/NewUser';
export default function UserName({navigation}) {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submit = () =>{
        newUser(userName, password)
    }
    const handleSignUpPress = () => {
      // Navigate to the sign-up page
      navigation.navigate('SignUp');
    };
  
  return (
    <View style={styles.container}>
      <Button title="X" onPress={handleSignUpPress}></Button>
      <Text style={styles.logo}>Create Username</Text>

 
      <View style={[styles.inputContainer, { marginTop:20}] }>
        <Text style={styles.text}>Pick a User name for your new account. You can always change it later.</Text>
        <TextInput style={styles.input} placeholder='UserName' onChangeText={(text) => setUsername(text)}/>
      </View>

      <View style={[styles.inputContainer] }>
   
        <TextInput style={styles.input} placeholder='Password' onChangeText={(text) => setPassword(text)}/>
      </View>

      <View style={styles.inputContainer}>
    
        <Button style={styles.Button} title='Create Account' onPress={submit}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: 'center',
    padding: 20,
  },
  text:{
    textAlign:'center',
    paddingBottom:'10px'
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
    backgroundColor:'#EEEEEE',

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
