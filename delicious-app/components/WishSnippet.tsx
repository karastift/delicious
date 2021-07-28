import React from 'react';
import { View, Text, StyleSheet, TouchableHighlight, TouchableOpacity } from 'react-native';
import { colors } from '../themes/Lighttheme';
import { beautifyDate } from '../utils/beautifyDate';

export const WishSnippet = (props: {
  foodName: string;
  time: string;
  suggestingMember: string;
  assignedMember: string;
  onPress: () => void;
}) => {

  return (
    <TouchableOpacity style={styles.wishWrapper}>
      <Text style={styles.foodText}>{props.foodName}:</Text>
      <Text style={styles.dateText}>{beautifyDate(props.time)}</Text>
      <Text style={styles.memberText}><Text style={styles.highlightedText}>{props.suggestingMember}</Text> suggested this,</Text>
      <Text style={styles.memberText}>assigned to <Text style={styles.highlightedText}>{props.assignedMember}</Text></Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wishWrapper: {
    borderColor: 'transparent',
    borderLeftColor: colors.text,
    borderWidth: 2,
    paddingLeft: 10,
    marginBottom: 20,
    backgroundColor: colors.evenLighterText,
    borderRadius: 25,
    padding: 10,
  },
  foodText: {
    color: colors.highlighted,
    fontWeight: '800',
    fontSize: 18,
  },
  dateText: {
    color: colors.text,
    fontWeight: '800',
    marginLeft: 20,
    fontSize: 18,
  },
  memberText: {
    color: colors.text,
    fontWeight: '800',
    marginLeft: 20,
  },
  highlightedText: {
    color: colors.darkHiglighted,
  },
});