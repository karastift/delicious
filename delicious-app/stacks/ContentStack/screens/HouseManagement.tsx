import React from 'react';
import { ScrollView, View, Text, Dimensions, StyleSheet } from 'react-native';
import { FloatingButton } from '../../../components/FloatingButton';
import { defaultContainerStyles } from '../../../themes/Lighttheme';

export const HouseManagement = () => {

  return (
    <View style={defaultContainerStyles}>
      <FloatingButton name='edit-3' onPress={() => null}/>
      <ScrollView contentContainerStyle={defaultContainerStyles} style={{flex: 1}}>
        <View style={styles.wishesUpdates}>
          <Text style={styles.headers}>my house:</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  wishesUpdates: {
    marginTop: 20,
    width: windowWidth,
  },
  headers: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'left',
    marginLeft: 15,
  },
  wishesScrollView: {
    marginTop: 5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    maxHeight: windowHeight ,
  },
});
