import React from "react";
import { StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { colors } from "../themes/Lighttheme";

export const TextField = (props: {
  label: string;
  error: boolean;
  onChangeText: (arg0: string) => void;
  passwordRules?: string;
  autoFocus?: boolean;
}) => {

  return (
    <>
      <TextInput
        label={props.label}
        error={props.error}
        onChangeText={props.onChangeText}
        passwordRules={props.passwordRules}
        autoFocus={props.autoFocus}
        underlineColor={colors.highlighted}
        underlineColorAndroid={colors.highlighted}
        outlineColor={colors.highlighted}
        selectionColor={colors.text}
        style={styles.textInput}
      />
    </>
  );
};

const styles = StyleSheet.create({
	textInput: {
    width: 300,
    height: 50,
    paddingHorizontal: 10,
    fontSize: 18,
    color: colors.highlighted
  },
});