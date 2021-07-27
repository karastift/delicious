import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors } from '../themes/Lighttheme';
import { beautifyDate } from '../utils/beautifyDate';
import { beautifyTime } from '../utils/beautifyTime';

export const PendingWishSnippet = (props: {
  foodName: string;
  time: string;
  suggestingMember: string;
  assignedMember: string;
  onPress: () => void;
}) => {

  return (
    <TouchableOpacity style={styles.wishWrapper}>
      <Text style={styles.foodText}>{props.foodName}:</Text>
      <Text style={styles.dateText}>{beautifyTime(props.time)}</Text>
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