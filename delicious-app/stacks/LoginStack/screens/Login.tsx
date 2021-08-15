import React, { useContext } from 'react';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { View } from 'react-native';
import { Button } from 'react-native-paper';
import { TextField } from '../../../components/TextField';
import { useLoginMutation } from '../../../generated/graphql';
import { colors, defaultContainerStyles } from '../../../themes/Lighttheme';
import { LoginProps } from '../../../types/NavigationTypes';

export const Login: React.FC<LoginProps> = () => {

  const [variables, setVariables] = useState({
    houseName: '',
    password: '',
  });
  const [login, { data, loading }] = useLoginMutation();

  const submit = () => {
    console.log(variables);
    // login({ variables });
  };

  return (
    <View style={defaultContainerStyles}>
      <View style={styles.inputWrapper}>
        <TextField
          label='name of your house:'
          error={false}
          onChangeText={(t) => setVariables(v => ({ ...v, houseName: t}))}
          iconName='home'
          style={styles.input}
        />
        <TextField
          label='password:'
          error={false}
          onChangeText={(t) => setVariables(v => ({ ...v, password: t}))}
          style={styles.input}
          iconName='key'
          password
        />
        <Button icon='log-in' mode='contained' color={colors.darkHiglighted} uppercase={false} onPress={submit} style={{ marginTop: 10, width: 100, alignSelf: 'center' }}>
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