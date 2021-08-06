import React from "react";
import { FAB } from "react-native-paper";
import { colors } from "../themes/Lighttheme";

interface FloatingButtonProps {
  name: string;
  onPress: () => void;
  onPressLong?: () => void;
}

export const FloatingButton: React.FC<FloatingButtonProps> = (props) => {

  return (
    <FAB
      style={{
        zIndex: 1,
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
        backgroundColor: colors.highlighted,
      }}
      color={colors.background}
      icon={props.name}
      onPress={props.onPress}
      onLongPress={props.onPressLong}
    />
  );
};