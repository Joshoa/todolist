import { View } from "react-native";
import { styles } from "./styles";
import { useState, useRef } from "react";
import { Button } from "../../atoms/Button";
import { Input } from "../../atoms/Input";

type Props = {
  onAddTaskButtonPressed: (taskDescription: string) => void;
}

export function InputTask({ onAddTaskButtonPressed }: Props) {
  const [taskDescription, setTaskDescription] = useState('')
  const inputRef = useRef<any>(null);

  function handleButtonClick() {
    onAddTaskButtonPressed(taskDescription);
    setTaskDescription('');
    inputRef.current?.blur();
  }

  return (
    <View style={styles.container}>
      <Input
        ref={inputRef}
        value={taskDescription}
        onChangeText={setTaskDescription}
      />

      <Button
        type='ADD'
        onPress={handleButtonClick}
      />
    </View>
  )
}