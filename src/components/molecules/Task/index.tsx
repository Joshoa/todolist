import { View, Text } from "react-native";

import { styles } from "./styles";
import { CheckBox } from "../../atoms/CheckBox";
import { Button } from "../../atoms/Button";

type Props = {
  description: string;
  isCompleted: boolean;
  onToggleTask: (isChecked: boolean) => void;
  onRemovePressed: () => void;
}

export function Task({ description, isCompleted, onToggleTask, onRemovePressed }: Props) {
  return (
    <View style={styles.container}>
      <CheckBox
        style={styles.checkbox}
        isChecked={isCompleted}
        onToggle={onToggleTask}
      />

      <Text style={[styles.description, isCompleted && styles.completedText]}>
        {description}
      </Text>

      <Button
        style={styles.button}
        type='REMOVE'
        onPress={onRemovePressed}
      />
    </View>
  )
}