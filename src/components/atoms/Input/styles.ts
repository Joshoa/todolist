import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  input: {
    flex: 1,
    backgroundColor: colors.gray500,
    height: 54,
    padding: 16,
    borderRadius: 6,
    color: colors.gray100,
    marginRight: 4,
    fontSize: 16,
  },
  inputFocused: {
    borderWidth: 1,
    borderColor: colors.purpleDark,
  }
});