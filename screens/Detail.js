import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Button,
} from 'react-native';
import axios from 'axios';
// import Animated from "react-native-reanimated";
// import log from "module:react-native-reanimated.Animated.log";
export default class Flat extends Component {
  state = {};

  componentDidMount() {
    axios.get('http://213.159.30.21/service/api/Urun/').then((user) => {
      console.log(user);
      this.setState({
        all: user.data,
      });
    });
  }
  renderContactsItem = ({item, index}) => {
    const {navigate} = this.props.navigation;
    const {navigation} = this.props;
    const detailname = navigation.getParam('detailname');
    const detailcost = navigation.getParam('detailcost');
    const detailimage = navigation.getParam('detailimage');
    return (
      <View
        style={[
          styles.itemContainer,
          {backgroundColor: index % 2 === 1 ? '#fafafa' : ''},
        ]}
      />
    );
  };
  render() {
    const {navigate} = this.props.navigation;
    const {navigation} = this.props;
    const detailname = navigation.getParam('detailname');
    const detailcost = navigation.getParam('detailcost');
    const detailimage = navigation.getParam('detailimage');
    const detailaciklama = navigation.getParam('detailaciklama');
    return (
      <View style={styles.container}>
        <Text>{this.state.dene}</Text>
        <View style={styles.avatarandtext}>
          <Image style={styles.avatar} source={{uri: detailimage}} />
          <View style={styles.textContainer}>
            <Text style={styles.name}>{detailname}</Text>
            <Text style={styles.name}>{detailcost} TL</Text>
            <Text style={styles.name}>{detailaciklama} </Text>
            <View style={styles.sepeteklebuton}>
              <Button
                onPress={() => {
                  navigate('Profile', {
                    detailname2: detailname,
                    detailcost2: detailcost,
                    detailimage2: detailimage,
                    all2: detailcost,
                  });
                }}
                title="sepete ekle"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
              />
            </View>
          </View>
        </View>
        <Text>{this.state.name}</Text>
        <FlatList
          renderItem={this.renderContactsItem}
          numColumns={2}
          keyExtractor={(item) => item.login.uuid}
          data={this.state.contacts}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 5,
    // borderBottomWidth: 1,
    // borderBottomColor: '#eee',
  },
  goProfile: {
    backgroundColor: '#c5c5c5',
    width: 250,
    height: 40,
    marginHorizontal: 75,
  },
  sepeteklebuton: {
    marginHorizontal: 120,
    width: 200,
    height: 150,
  },
  sepetekleyazi: {
    fontSize: 22,
    textAlign: 'center',
    justifyContent: 'center',
  },
  avatarandtext: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dene: {
    flexWrap: 'wrap',
  },
  deneme: {
    backgroundColor: 'red',
  },
  avatar: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 370,
    height: 250,
    marginHorizontal: 5,
    flexDirection: 'column',
  },
  textContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
  },
  name: {
    fontSize: 20,
    marginHorizontal: 3,
  },
  countrytext: {
    fontSize: 15,
  },
});
