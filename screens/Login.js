import React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
} from 'react-native';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      isLoading: false,
    };
  }

  onChangeHandler(name, value) {
    this.setState({
      [name]: value,
    });
  }

  onLoginSubmit() {
    const {username, password} = this.state;
    if (username && password) {
      this.setState({
        isLoading: true,
      });
      const req = {
        username,
        password,
      };
      axios.post('http://213.159.30.21/auth/token/', req).then(
        (res) => {
          AsyncStorage.setItem('token', res.data.access).then((res) => {
            alert('Login successful');
            this.props.navigation.navigate('Dashboard');
            this.setState({
              isLoading: false,
            });
          });
        },
        (err) => {
          alert('Incorrect username or password!');
          this.setState({
            isLoading: false,
          });
        },
      );
    } else {
      alert("Username or password can't be empty");
    }
  }

  render() {
    const {username, password, isLoading} = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.loginWrap}>
          <Text style={styles.heading}>Welcome Back User</Text>
          <TextInput
            style={styles.inputs}
            placeholder="Enter username"
            placeholderTextColor="#333"
            value={username}
            onChangeText={(text) => this.onChangeHandler('username', text)}
          />
          <TextInput
            style={styles.inputs}
            placeholder="Enter password"
            placeholderTextColor="#333"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => this.onChangeHandler('password', text)}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={{
              ...styles.loginBtn,
              backgroundColor: isLoading ? '#ddd' : '#0070f3',
            }}
            onPress={() => {
              this.onLoginSubmit();
            }}>
            <Text style={styles.loginBtnText}>
              {isLoading ? 'Logging in' : 'Login'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  loginWrap: {
    width: '80%',
  },
  inputs: {
    height: 40,
    backgroundColor: '#ddd',
    paddingHorizontal: 10,
    fontSize: 14,
    color: '#000',
    marginBottom: 10,
  },
  heading: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  loginBtn: {
    height: 40,
    justifyContent: 'center',
    width: '50%',
    alignSelf: 'center',
  },
  loginBtnText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
