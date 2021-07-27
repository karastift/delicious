import React from "react";
import { FAB } from "react-native-paper";
import { colors } from "../themes/Lighttheme";

export const FloatingButton = (props: {
  name: string;
  onPress: () => void;
  onPressLong?: () => void
}) => {

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