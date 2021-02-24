import React, {Component} from 'react';
import { Text, View, Image, TextInput } from 'react-native';

 const App = () => {
 return (
 <View>
 <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
 <Text>I am also a cat!</Text> 
 <Class />
 <Text>Apapun</Text>
 <Text>Ah Sudahlah</Text>
 <Photo />
 <TextInput style={{borderWidth: 1}} />
 <BoxGreen />
 <Profile />
 </View>
 );
 };

 const Class = () => {
 return <Text>Ardean Reza Angkasa</Text>;
 };

 const Photo = () => {
 return <Image source={{uri: 'https://placeimg.com/100/100/tech'}}
 style={{width: 100, height: 100}}
  />
 };

 class BoxGreen extends Component {
   render() {
     return <Text>Nah Dia</Text>;
   }
 }

class Profile extends Component {
  render(){
    return (
      <View>
    <Image
    source={{uri: 'https://placeimg.com/100/100/animals'}}
    style={{width: 100, height: 100, borderRadius: 50}}
    />
    <Text style={{color: 'blue', fontSize: 24}}>zack snyders justice league</Text>
    </View>
    );
  }
}

export default App;