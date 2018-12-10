import React from 'react';
import { ScrollView, StyleSheet, Image } from 'react-native';
import { TextInput } from "react-native-gesture-handler";

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: "Mapa",
    headerStyle:{
      backgroundColor:'purple',
    },
    headerTintColor:'white'
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        <TextInput style={styles.textInput}  placeholder="Filtrar por horário e/ou localização" selectionColor="#000" underlineColorAndroid="grey" />
        <Image source={require('../assets/images/map.png')} style={{alignSelf:'center'}}/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
  
  textInput:{
    paddingHorizontal: 10,
    paddingVertical: 10
  }
});
