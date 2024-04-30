import React, { useState } from 'react';
import { StyleSheet, SafeAreaView, Text, View, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import ItemList from './components/ItemList';

export default function App() {

  const [task, setTask] = useState()
  const [taskList, setTaskList] = useState([])

  const handleAddList = () => {
    if (task !== '') {
      setTaskList([...taskList, task])
      setTask(null)
    }
  }
  const handleRemoveTask = (index) => {
    setTaskList(taskList.filter((_, i) => i !== index));
  };
  
  
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.tasksWrapper}>
        <Text style={styles.title}>To Do List</Text>
        <TextInput
          style={styles.input}
          placeholder='What need to be done?'
          value={task}
          onChangeText={text => setTask(text)}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => handleAddList()}
        >
          <Text style={styles.addText}><Text>Add Task</Text></Text>
        </TouchableOpacity>
        <ScrollView style={styles.items}>
          {
            taskList.map((item, index) => {
              return <ItemList textItem={item} key={item} index={index} onDelete={()=>handleRemoveTask(index)}/>
            })
          }
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#483D8B',

  },
  tasksWrapper: {
    paddingTop: 50,
    paddingHorizontal: 20,

  },
  title: {
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },

  addButton: {
    backgroundColor: '#800080',
    borderRadius: 20,
    padding: 15,
    marginBottom: 20,
  },

  addText: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },

  items: {

  },
  input: {
    height: 50,
    borderWidth: 0,
    marginBottom: 20,
    paddingHorizontal: 40,
    backgroundColor: '#FFFF',
    borderRadius: 5
  },
});