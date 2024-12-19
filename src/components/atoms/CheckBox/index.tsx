import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image, StyleProp, ViewStyle } from 'react-native';
import { styles } from './styles';

enum CheckBoxState {
  Unchecked = require('../../../assets/unchecked.png'),
  Checked = require('../../../assets/checked.png'),
}

type CheckBoxProps = {
  style?: StyleProp<ViewStyle>;
  isChecked: boolean;
  onToggle: (isChecked: boolean) => void;
};

export function CheckBox({ style, isChecked, onToggle }: CheckBoxProps) {
  const [checkBoxState, setCheckBoxState] = useState<CheckBoxState>(
    isChecked ? CheckBoxState.Checked : CheckBoxState.Unchecked
  );

  useEffect(() => {
    setCheckBoxState(isChecked ? CheckBoxState.Checked : CheckBoxState.Unchecked);
  }, [isChecked]);

  const handlePress = () => {
    const newState = checkBoxState === CheckBoxState.Unchecked ? CheckBoxState.Checked : CheckBoxState.Unchecked;
    setCheckBoxState(newState);
    onToggle(newState === CheckBoxState.Checked);
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={style ? [styles.container, style] : styles.container}
    >
      <Image source={checkBoxState} style={styles.image} />
    </TouchableOpacity>
  );
}
