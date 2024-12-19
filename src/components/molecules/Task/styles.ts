import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.gray500,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.gray400,
    flexDirection: 'row',
    alignItems: 'center',
    height: 64,
    marginBottom: 8
  },
  description: {
    flex: 1,
    fontSize: 14,
    color: colors.gray100,
    marginLeft: 8,
  },
  completedText: {
    textDecorationLine: 'line-through',
    color: 'gray',
  },
  checkbox: {
    paddingLeft: 12
  },
  button: {
    paddingRight: 12
  }
})