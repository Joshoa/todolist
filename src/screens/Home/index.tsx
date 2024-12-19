import React from "react";
import { Alert, FlatList, View } from "react-native";
import { Header } from "../../components/molecules/Header";

import { styles } from './styles';
import { InputTask } from "../../components/molecules/InputTask";
import { useState } from "react";
import { Task } from "../../components/molecules/Task";
import { TasksListHeader } from "../../components/molecules/TasksListHeader";
import { TasksListEmpty } from "../../components/molecules/TasksListEmpty";

type TaskStruct = {
  id: string;
  description: string;
  isCompleted: boolean;
}

export function Home() {

  const [tasks, setTasks] = useState<TaskStruct[]>([]);
  const completedTasks = tasks.filter((task) => task.isCompleted)

  function handleAddNewTask(taskDescription: string) {
    if (taskDescription == '') {
      return Alert.alert(
        "Task sem descrição",
        "Por favor informe a descrição da task"
      )
    }
    const newTask = {
      id: Date.now().toString(),
      description: taskDescription,
      isCompleted: false
    }

    setTasks(prevState => [...prevState, newTask]);
    console.log(tasks);
  }

  function handleToggleTask(taskId: string, isCompleted: boolean) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          isCompleted
        }
      }
      return task;
    });

    setTasks(updatedTasks);
  }

  function handleRemoveTask(taskId: string) {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  return (
    <>
      <Header />

      <View style={styles.container}>

        <InputTask onAddTaskButtonPressed={handleAddNewTask} />

        <View style={styles.list}>
          <FlatList

            ListHeaderComponent={() => (
              <TasksListHeader
                tasksCount={tasks.length}
                completedTasksCount={completedTasks.length}
              />
            )}

            showsVerticalScrollIndicator={false}
            data={tasks}
            keyExtractor={item => item.id}
            renderItem={({ item }) => (
              <Task
                key={item.id}
                description={item.description}
                isCompleted={item.isCompleted}
                onToggleTask={(isChecked) => handleToggleTask(item.id, isChecked)}
                onRemovePressed={() => handleRemoveTask(item.id)}
              />
            )}

            ListEmptyComponent={() => (
              <TasksListEmpty />
            )}
          />
        </View>
      </View>

    </>
  )
}