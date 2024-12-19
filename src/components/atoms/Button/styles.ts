import { StyleSheet } from 'react-native';
import { colors } from '../../../constants/colors';

export const styles = StyleSheet.create({
  addButton: {
    width: 52,
    height: 52,
    backgroundColor: colors.blueDark,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
  },
  removeButton: {
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButtonImage: {
    width: 16,
    height: 16,
  },
  removeButtonImage: {
    width: 32,
    height: 32,
  }
});