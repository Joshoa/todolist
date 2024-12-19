import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';
import { fonts } from '../../../constants/fonts';

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: colors.gray500,
    height: 54,
    padding: 16,
    borderRadius: 6,
    color: colors.gray100,
    marginRight: 4,
    fontSize: fonts.size.md,
    fontFamily: fonts.type.regular,
    lineHeight: fonts.lineHeight.md,
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: colors.purpleDark,
  }
});