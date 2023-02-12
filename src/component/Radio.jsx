import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'
import React from 'react'

const Radio = ({options, horizontal=false, onChangeSelect, selected, innerColor, outerColor, lableColor}) => {
    const outLineCircle = {
        width: 25,
        height: 25,
        borderRadius: 20,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center'
      }
    const innerCircle = {
        width: 15,
        height: 15,
        borderRadius: 10,
    }
    const txt = {
        fontSize: 16,
        marginLeft: 3,
    }
  return (
    <View style={horizontal? styles.horizontal : styles.vertical}>
      {
        options.map((opt) => (
            <TouchableOpacity value={opt.value}
                onPress={()=>onChangeSelect(opt)} 
                style={[styles.optContainer, 
                    {marginLeft: horizontal ? 15:0, marginTop: horizontal ? 0:15}
                ]}>
                <View style={[outLineCircle, outerColor]}>
                    {selected === opt.value && <View style={[innerCircle, innerColor]} />}
                </View>
                <Text 
                    style={[txt, {color:selected === opt.value ?'#444' : '#777'}, lableColor]}>
                    {opt.lable}
                </Text>
            </TouchableOpacity> 
        ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
    optContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
    },
    horizontal:{
        flexDirection : "row",
        alignItems: "center",
        marginTop: 15,
	  },
})

export default Radio