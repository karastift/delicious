import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { colors } from '../themes/Lighttheme';

export const MemberBlock = (props: {
  name: string;
  role: 'child' | 'adult';
  foodMade: number;
}) => {

  return (
    <TouchableOpacity style={styles.memberBlockWrapper}>
      {props.role === 'child'
      ? <FontAwesomeIcon name='child' size={55} style={styles.icon}/>
      : <FontAwesomeIcon name='user' size={50} style={[styles.icon, { marginLeft: 3 }]}/>
      }
      <View style={styles.categoryWrapper}>
        <Text style={styles.categoryText}>name:</Text>
        <Text style={styles.categoryText}>role:</Text>
        <Text style={styles.categoryText}>food made:</Text>
      </View>
      <View style={styles.infoWrapper}>
        <Text style={styles.infoText}>{props.name}</Text>
        <Text style={styles.infoText}>{props.role}</Text>
        <Text style={styles.infoText}>{props.foodMade}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  memberBlockWrapper: {
    height: 100,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginHorizontal: 10,
    marginBottom: 20,
    borderRadius: 25,
    backgroundColor: colors.evenLighterText,
  },
  icon: {
    alignSelf: 'center',
  },
  infoWrapper: {
    marginLeft: 20,
    justifyContent: 'space-evenly',
    alignItems: 'flex-end',
  },
  categoryWrapper: {
    marginLeft: 20,
    justifyContent: 'space-evenly',
  },
  categoryText: {
    fontWeight: '800',
    fontSize: 17,
    color: colors.text,
  },
  infoText: {
    fontWeight: '800',
    fontSize: 17,
    color: colors.highlighted,
  },
});