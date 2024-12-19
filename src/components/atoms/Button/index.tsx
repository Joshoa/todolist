import { TouchableOpacity, Image, StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';

enum ButtonType {
  ADD = require('../../../assets/plus.png'),
  REMOVE = require('../../../assets/remove.png')
}

type ButtonProps = {
  style?: StyleProp<ViewStyle>;
  type: keyof typeof ButtonType;
  onPress: () => void;
}

export function Button({ style, type, onPress }: ButtonProps) {
  const buttonStyle = type === 'ADD' ? styles.addButton : styles.removeButton;
  const imageStyle = type === 'ADD' ? styles.addButtonImage : styles.removeButtonImage;

  return (
    <TouchableOpacity
      style={style ? [buttonStyle, style] : buttonStyle}
      onPress={onPress}
    >
      <Image
        style={imageStyle}
        source={ButtonType[type]}
        resizeMode='contain'
      />
    </TouchableOpacity>
  );
}