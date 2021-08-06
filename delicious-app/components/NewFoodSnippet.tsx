import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Linking } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../themes/Lighttheme';

interface NewFoodSnippetProps {
  foodName: string;
  description?: string;
  creator: string;
  recipeLink?: string;
  onPress: () => void;
}

export const NewFoodSnippet: React.FC<NewFoodSnippetProps> = (props) => {

  return (
    <TouchableOpacity style={styles.memberBlockWrapper}>
      <FontAwesomeIcon name='apple-alt' size={50} style={styles.icon}/>
      <View style={styles.infoWrapper}>
        <Text style={styles.highlightedText}>{props.foodName}</Text>
        <Text style={styles.text}>{props.description}</Text>
        <Text style={styles.text}><Text style={styles.highlightedText}>{props.creator}{props.creator[props.creator.length-1] !== 's' ? "'s" : "'"}</Text> creation</Text>
        {props.recipeLink ? <Text style={styles.text} onPress={() => Linking.openURL(props.recipeLink!)}><Text style={styles.highlightedText}>{props.recipeLink}</Text></Text> : <></>}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  memberBlockWrapper: {
    // height: 100,
    // flexWrap: 'wrap',
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginBottom: 20,
    borderRadius: 25,
    backgroundColor: colors.evenLighterText,
  },
  icon: {
    alignSelf: 'center',
  },
  infoWrapper: {
    paddingRight: 10,
    marginLeft: 20,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  text: {
    paddingRight: 10,
    fontWeight: '800',
    fontSize: 17,
    color: colors.text,
  },
  highlightedText: {
    fontWeight: '800',
    fontSize: 17,
    color: colors.highlighted,
  },
});