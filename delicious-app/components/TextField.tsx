import React from "react";
import { ViewStyle } from "react-native";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../themes/Lighttheme";

export const TextField = (props: {
  label: string;
  error: boolean;
  onChangeText: (arg0: string) => void;
  password?: boolean;
  autoFocus?: boolean;
  iconName: string;
  style?: ViewStyle;
}) => {

  return (
    <TextInput
      mode='outlined'
      label={props.label}
      error={props.error}
      onChangeText={props.onChangeText}
      autoFocus={props.autoFocus}
      outlineColor={colors.darkHiglighted}
      selectionColor={colors.lighterText}
      style={[styles.textInput, props.style]}
      theme={{ colors: { primary: colors.darkHiglighted } }}
      secureTextEntry={props.password}
      left={<TextInput.Icon name={props.iconName} style={{ marginTop: 15, marginRight: 10 }} color={colors.lighterText}/>}
    />
  );
};

const styles = StyleSheet.create({
	textInput: {
    width: 300,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 18,
    color: colors.highlighted,
  },
});