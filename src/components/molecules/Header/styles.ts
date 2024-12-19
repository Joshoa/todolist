import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.gray700,
    height: 174,
    alignItems: 'center',
  },
  logo: {
    width: 110,
    height: 32,
    marginTop: 80
  }
});