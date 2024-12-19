import { View } from "react-native";
import { colors } from "../../../constants/colors";
import { CountTasks } from "../CountTasks";
import { styles } from "./styles";

type Props = {
  tasksCount: number;
  completedTasksCount: number;
}

export function TasksListHeader({ tasksCount, completedTasksCount }: Props) {
  return (
    <View style={styles.listHeader}>
      <CountTasks
        title="Criadas"
        counter={tasksCount}
        color={colors.blue}
      />

      <CountTasks
        title="Concluídas"
        counter={completedTasksCount}
        color={colors.purple}
      />
    </View>
  )
}