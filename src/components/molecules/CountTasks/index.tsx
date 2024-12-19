import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  counter: number;
  color?: string;
}

export function CountTasks({ title, counter, color }: Props) {
  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: color }]}>
        {title}
      </Text>
      <View style={styles.counterContainer}>
        <Text style={styles.counter}>
          {counter}
        </Text>
      </View>
    </View>
  )
}