import React from 'react';
import { Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { colors } from '../themes/Lighttheme';

interface FoodSnippetProps {
  foodName: string;
  description?: string;
  creator: string;
  recipeLink?: string;
  onPress: () => void;
}

export const FoodSnippet: React.FC<FoodSnippetProps> = (props) => {

  return (
    <TouchableOpacity style={styles.wishWrapper}>
      <Text style={styles.foodText}>{props.foodName}:</Text>
      <Text style={styles.dateText}>{props.description}</Text>
      <Text style={styles.memberText}><Text style={styles.highlightedText}>{props.creator}</Text> created this</Text>
      <Text style={styles.memberText}>link to recipe: <Text style={styles.highlightedText} onPress={() => Linking.openURL(props.recipeLink!)}>{props.recipeLink}</Text></Text>
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