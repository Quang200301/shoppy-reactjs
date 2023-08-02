import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Alert } from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const navigation = useNavigation();
  const handleEmailChange = (email) => {
    setEmail(email);
  };

  const handlePasswordChange = (password) => {
    setPassword(password);
  };

  const handleSubmit = () => {
    axios.post('http://ec2-13-250-122-122.ap-southeast-1.compute.amazonaws.com/api/login', {
        email : email,
        password: password
    })
        .then(function (response) {
            console.log(response.data["data"][0])
            AsyncStorage.setItem("User_id",response.data["data"][0].id.toString())
            AsyncStorage.setItem("User_name",response.data["data"][0].fullName)
            AsyncStorage.setItem("User_avarta",response.data["data"][0].avatar)
            
        })
        .catch(function (error) {
            console.log("lỗi rồi");
        })
    // navigation.navigate("Booking")
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={handleEmailChange}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          value={password}
          secureTextEntry={true}
          onChangeText={handlePasswordChange}
        />
      </View>
      <TouchableOpacity style={styles.buttonContainer} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 25,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 50,
  },
  buttonContainer: {
    width: '80%',
    height: 50,
    backgroundColor: '#5f9ea0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});