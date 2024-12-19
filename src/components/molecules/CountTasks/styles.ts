import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.blue
  },
  counterContainer: {
    width: 24,
    borderRadius: 999,
    backgroundColor: colors.gray400,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8
  },
  counter: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.gray200,
    textAlign: 'center'
  }
})