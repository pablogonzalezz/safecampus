import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { WebBrowser } from 'expo';
import { MonoText } from '../components/StyledText';
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
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
