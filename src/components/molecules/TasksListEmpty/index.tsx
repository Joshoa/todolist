import { Image, View, Text } from "react-native";
import { styles } from "./styles";

export function TasksListEmpty() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={require('../../../assets/clipboard.png')}
        resizeMode='contain'
      />

      <Text style={styles.listEmptyText}>
        <Text style={styles.textBold}>
          Você ainda não tem tarefas cadastradas{'\n'}
        </Text>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}