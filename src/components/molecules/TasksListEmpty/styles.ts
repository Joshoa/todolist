import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
    paddingTop: 48,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: colors.gray400
  },
  image: {
    width: 56,
    height: 56,
    marginBottom: 20
  },
  listEmptyText: {
    color: colors.gray300,
    fontSize: 14,
    textAlign: 'center'
  },
  textBold: {
    fontWeight: 'bold'
  }
})