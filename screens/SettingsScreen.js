import React from 'react';
import { ScrollView, StyleSheet, View, Image, Text, TouchableOpacity} from 'react-native';
import { TextInput, ViewPagerAndroid } from "react-native-gesture-handler";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: "Perfil",
    headerStyle:{
      backgroundColor:'purple',
    },
    headerTintColor:'white'
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, backgroundColor:'purple', alignItems:'center'}}>
          <TouchableOpacity style={{paddingTop: '10%'}}>
            <Image source={require('../assets/images/avatar.png')}/>
          </TouchableOpacity>
          <View>
            <Text style={{color: 'orange', paddingTop:10}}>632 Pontos</Text>
          </View>
          <View>
            <Text style={{color: 'white', paddingTop:'3%'}}>Suzana Alencar</Text>
          </View>
        </View>


        <View style={{flexDirection:'row'}}>
          <TouchableOpacity style={{borderWidth:2, borderColor:'#f2f2f2', flex: 0.5, paddingVertical: 20, alignItems:'center'}}>
            <Text style={{}}>Comentários</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{borderWidth:2, borderColor:'#f2f2f2', flex: 0.5, paddingVertical: 20, alignItems:'center'}}>
            <Text>Relatos</Text>
          </TouchableOpacity>
        </View>

        <ScrollView style={{flex: 0.5, backgroundColor:'#f2f2f2'}}>
          {/*Layout do CARD-------------------------------------- */}
          <View style={styles.containerCard}>
              <View style={styles.cardContent}>
                <View style={{flexDirection:'row'}}>
                  <Text style={styles.tituloCard}>Relato</Text>
                  <Text style={styles.saldoCard}>Validado</Text>
                </View>
                <Text style={styles.descricaoCard}>Causa: Abuso Verbal</Text>
                <View style={{flexDirection:'row'}}>
                  <Text style={styles.footerCard}>25 de Set, 2018, 13:58</Text>
                  <Text style={styles.statusCard}>Local: Restaurante Universitário</Text>
                </View>
              </View>
            </View>

             {/*Layout do CARD-------------------------------------- */}
          <View style={styles.containerCard}>
              <View style={styles.cardContent}>
                <View style={{flexDirection:'row'}}>
                  <Text style={styles.tituloCard}>Relato</Text>
                  <Text style={styles.saldoCard}>Validado</Text>
                </View>
                <Text style={styles.descricaoCard}>Causa: Assédio</Text>
                <View style={{flexDirection:'row'}}>
                  <Text style={styles.footerCard}>25 de Set, 2018, 13:58</Text>
                  <Text style={styles.statusCard}>Local: Parada de Ônibus</Text>
                </View>
              </View>
            </View>

            {/*Layout do CARD-------------------------------------- */}
          <View style={styles.containerCard}>
              <View style={styles.cardContent}>
                <View style={{flexDirection:'row'}}>
                  <Text style={styles.tituloCard}>Relato</Text>
                  <Text style={styles.saldoCard}>Validado</Text>
                </View>
                <Text style={styles.descricaoCard}>Causa: Assalto</Text>
                <View style={{flexDirection:'row'}}>
                  <Text style={styles.footerCard}>25 de Set, 2018, 13:58</Text>
                  <Text style={styles.statusCard}>Local: Parada de Ônibus</Text>
                </View>
              </View>
            </View>
        </ScrollView>

        </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  
  containerCard:{
    flex: 1,
    flexDirection: "row",
    elevation: 1,
    justifyContent: 'space-between',
    paddingVertical: 5,
  },

  cardContent: {
    flex:1,
    marginHorizontal:12,
    backgroundColor: "#ffff",
    borderRadius: 5,
  },

  tituloCard:{
    flex:1,
    fontSize: 14,
    color: '#000',
    textAlign: 'left',
    paddingHorizontal:10,
    paddingVertical:10,
  },

  saldoCard:{
    flex:1,
    fontSize: 14,
    color: '#33cc33',
    textAlign: 'right',
    paddingHorizontal:10,
    paddingVertical:10,
  },

  descricaoCard:{
    flex:1,
    fontSize: 14,
    color: '#A4A4A4',
    textAlign: 'left',
    paddingHorizontal:10,
  },

  footerCard:{
    paddingVertical:8,
    flex:1,
    fontSize: 14,
    color: '#A4A4A4',
    textAlign: 'left',
    paddingHorizontal:10,
  },

  statusCard:{
    paddingVertical:8,
    flex:1,
    fontSize: 14,
    color: '#A4A4A4',
    textAlign: 'right',
    paddingHorizontal:10,
  }
});
