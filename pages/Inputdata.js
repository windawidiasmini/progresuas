import React, { Component } from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
export default class Inputdata extends Component{
render(){
return(
<View>
<Text>Inputdata</Text>
</View>
)}}
export default class Post extends React.Component {
  state = {
        name: '',
        deskripsi:'',
        status:'',
        cek:false
  }
  handleSubmit = event => {

    axios.post('https://winda17.000webhostapp.com/inputmahasiswa.php', {
        nama:this.state.nama,
        deskripsi:this.state.deskripsi
     })
     .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    const pesan = <Text style={{color:'red'}}> Post Data Berhasil </Text>;
    return (

      <View style={styles.container}>
          <View style={styles.vHeader}>
              <Text style={styles.txtHeader}>INPUT DATA MAHASISWA</Text>
          </View>
          <View style={styles.vInput}>
              <View style={styles.vItemInput}>
                  <Text style={styles.txtLabelInput}>NIM     :</Text>
                  <TextInput style={styles.txtInput}
                          onChangeText = { (nama) => { this.setState({nama}) } }
                          placeholder="Masukkan NIM"
                  />
              </View>
              <View style={styles.vItemInput}>
                  <Text style={styles.txtLabelInput}>NAMA  :</Text>
                  <TextInput style={styles.txtInput}
                          onChangeText = { (deskripsi) => { this.setState({deskripsi}) } }
                          placeholder="Masukkan nama"
                  />
              </View>

          </View>
          <View style={styles.vButton}>
              <TouchableHighlight
                          onPressIn={() =>{
                            this.handleSubmit()
                          }}
                          accessibilityLabel="hitung"
                          style={styles.vHitung}>

                          <Text style={styles.txtHeader}>INPUT DATA MAHASISWA</Text>
              </TouchableHighlight>
          </View>
          <View style={styles.vButton}>
              <TouchableHighlight
                          onPressIn={() =>{
                            this.handleSubmit()
                          }}
                          accessibilityLabel="hitung"
                          style={styles.vHitung}>

                          <Text style={styles.txtHeader}>UNGGAH FOTO</Text>
              </TouchableHighlight>
          </View>
          <View style={{flex:3}}>




          </View>
      </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  vHeader: {
      flex:0.8,
      backgroundColor:'#194B95',
      alignItems:'center',
      justifyContent:'center'
  },
  vInput: {
      flex:2,
      backgroundColor:'#E3F2FD',
      justifyContent:'flex-start',
  },
  vItemInput: {
      flex:1,
      flexDirection:'row',
  },
  txtLabelInput: {
      flex:2,
      height: 30,
      marginLeft:20,
      marginTop:10

  },
  txtInput: {
      flex:3,
      marginRight:20,
      marginTop:5,
      height:40,
      backgroundColor:'#fff',
      borderColor: 'gray',
  },
  vButton:{
      flex:0.7,
  },
  vHitung:{
      flex:1,
      backgroundColor:'#194B95',
      margin:10,
      alignItems:'center',
      justifyContent:'center'
  },
  vHasil:{
      flex:2,
      backgroundColor:'#E3F2FD',
      justifyContent:'center',
  },
  txtHeader: {
      fontSize:20,
      color : 'white'
  },
});
