import { forwardRef, useState } from 'react';
import { StyleProp, TextInput, ViewStyle } from 'react-native';
import { styles } from './styles';
import { colors } from '../../../constants/colors';

enum InputState {
  FOCUSED,
  UNFOCUSED
}

type InputProps = {
  style?: StyleProp<ViewStyle>;
  value: string;
  onChangeText: (text: string) => void;
}

export const Input = forwardRef<TextInput, InputProps>(
  ({ style, value, onChangeText }, ref) => {
    const [inputState, setInputState] = useState<InputState>(InputState.UNFOCUSED);

    function setFocus(value: boolean) {
      setInputState(value ? InputState.FOCUSED : InputState.UNFOCUSED);
    }

    return (
      <TextInput
        ref={ref}
        style={[
          styles.input, 
          inputState === InputState.FOCUSED && styles.inputFocused,
          style
        ]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={colors.gray300}
        onFocus={() => setInputState(InputState.FOCUSED)}
        onBlur={() => setInputState(InputState.UNFOCUSED)}
        onChangeText={onChangeText}
        value={value}
      />
    );
  }
);