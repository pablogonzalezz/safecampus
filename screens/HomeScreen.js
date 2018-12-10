import React from 'react';
import {
  Platform,
  StyleSheet,
  View,
} from 'react-native';
import { GiftedChat } from "react-native-gifted-chat";

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: "SafeCampus",
    headerStyle:{
      backgroundColor:'purple',
    },
    headerTintColor:'white'
  };
  primeiraMensagem = false;

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
   
  }

  componentWillMount(){
    this.setState({
      messages:[
        {
          _id:1,
          name: "Duda",
          text:"Olá, eu sou a Duda, como poderia ajudar você?",
          createdAt: new Date(),
          user:{
            _id: 1,
            avatar: require('../assets/images/duda.png')
          }
        },
      ]
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
    // for demo purpose
    if( this.primeiraMensagem === false){
      this.answerDemo1(messages);
      this.primeiraMensagem = true;
      return;
      }
    if(this.primeiraMensagem === true){
      this.answerDemo2(messages)
    }
  }


  answerDemo1(messages) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id:1,
          name: "Duda",
          text:"Vi que optou por uma dica. Deseja uma dica sobre seu campus e os arredores?",
          createdAt: new Date(),
          user:{
            _id: 1,
            avatar: require('../assets/images/duda.png')
          }
        }),
      };
    });
  }

  answerDemo2(messages) {
    this.setState((previousState) => {
      return {
        messages: GiftedChat.append(previousState.messages, {
          _id:1,
          name: "Duda",
          text:"Ok. Para isso preciso lhe conhecer melhor. Ah, seus dados não serão divulgados :) \nComo você se chama?",
          createdAt: new Date(),
          user:{
            _id: 1,
            avatar: require('../assets/images/duda.png')
          }
        }),
      };
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <GiftedChat messages={this.state.messages} onSend={messages => this.onSend(messages)} user={{_id: 2}}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
