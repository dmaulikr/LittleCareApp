import React, { Component } from 'react';
import {StyleSheet ,View, ActivityIndicator} from 'react-native';

export default class MyActivityIndicator extends Component {

	constructor(props){
		super(props);
		this.state = {
			animating : true,
		};
	}

	componentDidMount = () => {
    this.closeActivityIndicator();
  }

  closeActivityIndicator = () => {
  	this.loadInterval = setInterval(
      () => {
      this.setState({animating: false});
    }, 5000);
  }

  componentWillUnmount () {
    this.loadInterval && clearInterval(this.loadInterval);
    this.loadInterval = false;
  }

	render (){
		return (
			<View style={styles.horizontal}>
			  <ActivityIndicator animating = {this.state.animating}
          color="#0000ff"
        />
			</View>
		)
	}
}


const styles = StyleSheet.create ({
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 8,
  },
})