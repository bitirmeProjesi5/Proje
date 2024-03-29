import React, {Component} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  TextInput,
  Button,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export default class Register extends Component {
  constructor(props) {
    super();
    this.state = {
      usernameInput: '',
      passwordInput: '',
      epostaInput: '',
      nameInput: '',
      surnameInput: '',
    };
  }
  InsertData = () => {
    fetch('http://213.159.30.21/auth/register/', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username: this.state.usernameInput,
        password: this.state.passwordInput,
        password2: this.state.passwordInput,
        email: this.state.epostaInput,
        first_name: this.state.nameInput,
        last_name: this.state.surnameInput,
        role: 1,
      }),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        alert('ok');
        console.log('ok');
        //this.props.navigation.navigate('OnizlemeEkrani');
        //Alert.alert('adi:' + data.adi + 'aciklama:' + data.aciklama);
      })
      .catch((error) => console.log(error));
  };
  render() {
    return (
      <KeyboardAwareScrollView
        style={{backgroundColor: '#4c69a5'}}
        resetScrollToCoords={{x: 0, y: 0}}
        contentContainerStyle={styles.container}
        scrollEnabled={false}>
        <View style={styles.container}>
          <View style={styles.headBackground}>
            <View>
              <Image
                style={{width: 250, height: 75, marginTop: 40, marginLeft: 80}}
                //source={require('../assets/profilfoto.jpg')}
              />
              <Text style={styles.logoDescription}>Girls are power!</Text>
            </View>
          </View>
          <ScrollView>
            <View style={styles.RegisterArea}>
              <View>
                <TextInput
                  {...this.props}
                  returnKeyType={'next'} //klavyede aşağıda ok yerinde bu yazsın androidde oklar değişiyo
                  autoCapitalize="none"
                  placeholder="İsim giriniz"
                  value={this.state.nameInput}
                  onChangeText={(nameInput) => this.setState({nameInput})}
                  //onSubmitEditing={() => this.epostaInput.focus()} //butona basıldığı zaman demek
                />
                <TextInput
                  {...this.props}
                  returnKeyType={'next'} //klavyede aşağıda ok yerinde bu yazsın androidde oklar değişiyo
                  autoCapitalize="none"
                  placeholder="Soyisim giriniz"
                  value={this.state.surnameInput}
                  onChangeText={(surnameInput) => this.setState({surnameInput})}
                  //onSubmitEditing={() => this.epostaInput.focus()} //butona basıldığı zaman demek
                />
                <TextInput
                  {...this.props}
                  returnKeyType={'next'} //klavyede aşağıda ok yerinde bu yazsın androidde oklar değişiyo
                  autoCapitalize="none"
                  placeholder="E-Postanızı giriniz"
                  value={this.state.epostaInput}
                  //inputRef={(input) => (this.epostaInput = input)}
                  onChangeText={(epostaInput) => this.setState({epostaInput})}
                  //onSubmitEditing={() => this.usernameInput.focus()} //butona basıldığı zaman demek
                />
                <TextInput
                  {...this.props}
                  returnKeyType={'next'} //klavyede aşağıda ok yerinde bu yazsın androidde oklar değişiyo
                  autoCapitalize="none"
                  placeholder="Kullanıcı Adınızı giriniz"
                  value={this.state.usernameInput}
                  // inputRef={(input) => (this.usernameInput = input)}
                  onChangeText={(usernameInput) =>
                    this.setState({usernameInput})
                  }
                  //onSubmitEditing={() => this.passwordInput.focus()} //butona basıldığı zaman demek
                />
                <TextInput
                  {...this.props}
                  returnKeyType={'go'}
                  secureTextEntry={true}
                  placeholder="Şifre"
                  // inputRef={(input) => (this.passwordInput = input)}
                  value={this.state.passwordInput}
                  onChangeText={(passwordInput) =>
                    this.setState({passwordInput})
                  }
                />
                <TouchableOpacity>
                  <View style={styles.buttonContainer}>
                    <Text style={styles.buttonTitle}>Şifremi Unuttum</Text>
                  </View>
                </TouchableOpacity>
                <Button
                  color={'#f1f1f1'}
                  backgroundColor={'#660099'}
                  title={'Aramıza katıl'}
                  onPress={() => this.InsertData()}
                />
                <TouchableOpacity
                //onPress={() => this.props.navigation.navigate('deneme')}
                >
                  <Text style={{fontSize: 16, color: 'red', marginLeft: 70}}>
                    Zaten Üye misin? Giriş Yap
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  headBackground: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: 250,
    width: '100%',
    backgroundColor: '#660099',
  },
  logo: {
    marginTop: 50,
    textAlign: 'center',
    fontSize: 70,
    fontWeight: 'bold',
    color: '#f2f2f2',
  },
  logoDescription: {
    textAlign: 'center',
    color: '#f2f2f2',
  },
  RegisterArea: {
    marginHorizontal: 15,
    marginVertical: 140,
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,
    shadowColor: 'black',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    /*shadowOffset: {
      width: 0,
      height: 2,
    },*/
    elevation: 24,
  },
  buttonContainer: {
    marginLeft: 225,
    marginTop: 3,
    marginBottom: 10,
  },
  buttonTitle: {
    fontSize: 14,
    color: 'red',
  },
});
