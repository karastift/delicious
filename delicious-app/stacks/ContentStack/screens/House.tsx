import React from 'react';
import { ScrollView, View, Text, Dimensions, StyleSheet, TouchableOpacity } from 'react-native';
import { FloatingButton } from '../../../components/FloatingButton';
import { MemberBlock } from '../../../components/MemberBlock';
import { colors, defaultContainerStyles } from '../../../themes/Lighttheme';
import { HouseProps } from '../../../types/NavigationTypes';

export const House: React.FC<HouseProps> = () => {

  return (
    <View style={defaultContainerStyles}>
      <FloatingButton name='edit-3' onPress={() => null}/>
      <ScrollView contentContainerStyle={defaultContainerStyles} style={{flex: 1}}>
        <View style={styles.wishesUpdates}>
          <Text style={styles.headers}>simpsons (<Text style={{ color: colors.oppositeText }}>closed</Text>):</Text>
          <ScrollView contentContainerStyle={styles.memberScrollView}>
            <MemberBlock name='Kristin' role='adult' foodMade={1231}/>
            <MemberBlock name='Ertan' role='adult' foodMade={312}/>
            <MemberBlock name='Kian' role='child' foodMade={3}/>
            <MemberBlock name='Samir' role='child' foodMade={9}/>
            <MemberBlock name='Arin' role='child' foodMade={2}/>
            <MemberBlock name='Niva' role='child' foodMade={15}/>
          </ScrollView>
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
    maxHeight: windowHeight / 1.25,
  },
  headers: {
    fontSize: 20,
    fontWeight: '800',
    textAlign: 'left',
    marginLeft: 15,
  },
  memberScrollView: {
    marginTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 30,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'flex-start',
  },
});
