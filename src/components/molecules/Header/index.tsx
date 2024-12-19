import { Image, View } from "react-native";

import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/todoLogo.png')}
        style={styles.logo}
        resizeMode='contain'
      />
    </View>
  )
}