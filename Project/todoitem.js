import React from 'react';
import { StyleSheet, Text, TouchableOpacity , View } from 'react-native';
import RadioButtonRN from 'radio-buttons-react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { MaterialIcons } from '@expo/vector-icons';

const data = [{}];

export default function TodoItem ({ item, pressHandler }) {
  
  return (
      <View style={styles.item}>
    <TouchableOpacity onPress={() => pressHandler(item.key)}>
        <MaterialIcons name='delete' size={18} color={'#333'} />
    </TouchableOpacity>
        <Text style={styles.itemText}>{item.text}</Text>
        <RadioButtonRN
          style={styles.radioBtn}
          data={data}
          selectedBtn={(e) => console.log(e)}
          box={false}
          circleSize={14}
          icon={<Icon name="check-circle" size={22} color="#49AF41" />}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    marginTop: 16,
    borderColor: '#bbb',
    borderWidth: 1,
    borderRadius: 10,
    flexDirection: 'row',
  },
  itemText: {
    marginLeft: 10,
  },

radioBtn: {
  position:'absolute',
  right: 0,
  top: 5,
}
})