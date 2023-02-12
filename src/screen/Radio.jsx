import React, { useState} from 'react';
import Radio from '../component/Radio';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const Radios = ({navigation}) => {
    const [checked, setChecked] = useState('');
    const options = [
      {
        lable: 'Red',
        value: 'red'
      },
      {
        lable: 'Green',
        value: 'green'
      },
      {
        lable: 'Blue',
        value: 'blue'
      },
    ];
    return (
  
      <View style={styles.container}>
        <Text style={styles.textTitle}>Radio Button</Text>
        <StatusBar style="auto" />
        <Radio
          selected={checked}
          options={options}
          horizontal={true}
          lableColor={{ color: '#444' }}
          innerColor={{ backgroundColor: '#FF69B4' }}
          outerColor={{ borderColor: '#FF69B4' }}
          onChangeSelect={(opt) => setChecked(opt.value)}
        />
        <Text>selected color: {checked}</Text>
      </View>
    );
};

export default Radios;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    textTitle: {
      fontSize: 24,
          fontWeight: 'bold',
          color: '#051C60',
          margin: 10,
    }
  });


//   import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import Radio from './src/component/Radio';
// export default function App() {
//   const [checked, setChecked] = useState('');
//   const options = [
//     {
//       lable: 'Red',
//       value: 'red'
//     },
//     {
//       lable: 'Green',
//       value: 'green'
//     },
//     {
//       lable: 'Blue',
//       value: 'blue'
//     },
//   ];
//   return (

//     <View style={styles.container}>
//       <Text style={styles.textTitle}>Radio Button</Text>
//       <StatusBar style="auto" />
//       <Radio
//         selected={checked}
//         options={options}
//         horizontal={true}
//         lableColor={{ color: '#444' }}
//         innerColor={{ backgroundColor: '#FF69B4' }}
//         outerColor={{ borderColor: '#FF69B4' }}
//         onChangeSelect={(opt) => setChecked(opt.value)}
//       />
//       <Text>selected color: {checked}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   textTitle: {
//     fontSize: 24,
// 		fontWeight: 'bold',
// 		color: '#051C60',
// 		margin: 10,
//   }
// });

