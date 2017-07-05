import React, { Component } from 'react';
import { StyleSheet, View, Text ,Image,  TouchableHighlight} from 'react-native';
import MyActivityIndicator from './common/activityIndicator.js';
import HealthImg from './common/healthcare.jpg';

class Main extends Component {

  static navigationOptions = {
    title: 'Welcome Screen',
  }

  render() {
    return (
      <Image source={HealthImg} style={styles.dashboardContainer}>
        <View >
          <Text style={styles.welcome}>Welcome Little Care APP</Text>
          <MyActivityIndicator/>
          <View style={styles.vm}>
            <TouchableHighlight style={styles.button} underlayColor='midnightblue'>
              <Text style={styles.btnText}>
                Login
              </Text>
            </TouchableHighlight>

            <TouchableHighlight style={styles.button} underlayColor='midnightblue'>
              <Text style={styles.btnText}>
                SignUp
              </Text>
            </TouchableHighlight>
          </View>  
        </View>
      </Image>  
    );
  }
}

export default Main;

const styles = StyleSheet.create ({
  dashboardContainer: {
    flex: 1,
    width: undefined,
    height: undefined,
    backgroundColor:'transparent',
  },
  indexContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  welcome: {
    fontSize: 30,
    textAlign: 'center',
    margin: 10,
    color: 'black',
    backgroundColor:'transparent',
    marginTop : 100,
    marginBottom : 100,
  },
  button : {
    borderWidth: 1,
    borderColor: 'black',
  },
  btnText: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'midnightblue',
  },
  vm : {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
  }
})
