import React from 'react';
import { ScrollView, View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { FloatingButton } from '../../../components/FloatingButton';
import { House } from '../../../generated/graphql';
import { colors, defaultContainerStyles } from '../../../themes/Lighttheme';

import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
let a: House;

const MemberBlock = () => {

  return (
    <TouchableOpacity style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', paddingHorizontal: 30, paddingVertical: 15, marginHorizontal: 10, borderRadius: 25, backgroundColor: colors.evenLighterText, height: 100, marginBottom: 20 }}>
      <FontAwesomeIcon name='child' size={55} style={{ alignSelf: 'center' }}/>
      <View style={{ marginLeft: 20, justifyContent: 'space-evenly' }}>
        <Text style={{ fontWeight: '800', fontSize: 17, color: colors.text }}>name:</Text>
        <Text style={{ fontWeight: '800', fontSize: 17, color: colors.text }}>role:</Text>
        <Text style={{ fontWeight: '800', fontSize: 17, color: colors.text }}>food made:</Text>
      </View>
      <View style={{ marginLeft: 20, justifyContent: 'space-evenly', alignItems: 'flex-end' }}>
        <Text style={{ fontWeight: '800', fontSize: 17, color: colors.highlighted }}>Arin</Text>
        <Text style={{ fontWeight: '800', fontSize: 17, color: colors.highlighted }}>Child</Text>
        <Text style={{ fontWeight: '800', fontSize: 17, color: colors.highlighted }}>12</Text>
      </View>
    </TouchableOpacity>
  );
};

export const HouseManagement = () => {

  return (
    <View style={defaultContainerStyles}>
      <FloatingButton name='edit-3' onPress={() => null}/>
      <ScrollView contentContainerStyle={defaultContainerStyles} style={{flex: 1}}>
        <View style={styles.wishesUpdates}>
          <Text style={styles.headers}>simpsons (<Text style={{ color: colors.oppositeText }}>closed</Text>):</Text>
          <View style={{ marginTop: 10, paddingHorizontal: 10, flexDirection: 'column', justifyContent: 'space-around', alignContent: 'flex-start' }}>
            <MemberBlock/>
            <MemberBlock/>
            <MemberBlock/>
            <MemberBlock/>
          </View>
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
