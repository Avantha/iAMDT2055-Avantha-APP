import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard, TouchableOpacity } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addtodo';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const submitHandler = (text) => {

    if(text.length > 3) {
          setTodos((prevTodos) => {
      return [
        { text: text, key: Math.random().toString() },
        ...prevTodos
      ];
    })
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 characters long', [
        {text:'Okay', onPress: () => console.log('alert closed')}
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
      console.log('dissmissed keyboard')
    }}>
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
      <AddTodo submitHandler={submitHandler} />
       <View style={styles.list}>

        <FlatList 
          data={todos}
          renderItem={({ item }) => ( 
            <TodoItem item={item} pressHandler={pressHandler} />
          )}
        />
       </View>
      </View>
      <View style={styles.footer}>
      </View>
    </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1, 
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
  footer: {
    height: 70,
    backgroundColor: 'coral',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
