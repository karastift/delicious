import React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, ViewStyle } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { TextField } from '../../../components/TextField';
import { colors, defaultContainerStyles } from '../../../themes/Lighttheme';


export const Login = () => {

  return (
    <View style={defaultContainerStyles}>
      <View style={styles.inputs}>
        <TextField
          label='name of your house:'
          error={false}
          onChangeText={(t) => null}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputs: {
    marginTop: 100,
  },
});