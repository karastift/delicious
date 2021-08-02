import React from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { TextField } from '../../../components/TextField';
import { colors, defaultContainerStyles } from '../../../themes/Lighttheme';

export const Login = () => {

  return (
    <View style={defaultContainerStyles}>
      <View style={styles.inputWrapper}>
        <TextField
          label='name of your house:'
          error={false}
          onChangeText={(t) => console.log(t)}
          iconName='home'
          style={styles.input}
        />
        <TextField
          label='password:'
          error={false}
          onChangeText={(t) => console.log(t)}
          style={styles.input}
          iconName='key'
          password
        />
        <Button icon='log-in' mode='contained' color={colors.darkHiglighted} uppercase={false} onPress={() => console.log('Pressed')} style={{ marginTop: 10, width: 100, alignSelf: 'center' }}>
          enter
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    marginTop: 100,
  },
  input: {
    marginBottom: 10,
  },
});