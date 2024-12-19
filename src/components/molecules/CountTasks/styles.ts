import { StyleSheet } from "react-native";
import { colors } from "../../../constants/colors";
import { fonts } from "../../../constants/fonts";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  },
  title: {
    fontSize: fonts.size.sm,
    fontFamily: fonts.type.bold,
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
    fontSize: fonts.size.xsm,
    fontFamily: fonts.type.bold,
    color: colors.gray200,
    textAlign: 'center'
  }
})