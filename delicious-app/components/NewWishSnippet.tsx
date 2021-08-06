import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../themes/Lighttheme';
import { beautifyDate } from '../utils/beautifyDate';
import { beautifyTime } from '../utils/beautifyTime';

interface NewWishSnippetProps {
  foodName: string;
  time: string;
  pending?: boolean;
  suggestingMember: string;
  assignedMember: string;
  onPress: () => void;
}

export const NewWishSnippet: React.FC<NewWishSnippetProps> = (props) => {

  return (
    <TouchableOpacity style={styles.memberBlockWrapper}>
      {props.pending
      ? <FontAwesomeIcon name='hourglass-end' size={50} style={styles.icon}/>
      : <FontAwesomeIcon name='hourglass-start' size={50} style={styles.icon}/>
      }
      {/* <View style={styles.categoryWrapper}>
        <Text style={styles.categoryText}>name:</Text>
        <Text style={styles.categoryText}>role:</Text>
        <Text style={styles.categoryText}>food made:</Text>
      </View> */}
      <View style={styles.infoWrapper}>
        <Text style={styles.highlightedText}>{props.foodName}</Text>
        <Text style={styles.text}>{props.pending ? beautifyTime(props.time) : beautifyDate(props.time)}</Text>
        <Text style={styles.text}><Text style={styles.highlightedText}>{props.suggestingMember}</Text> suggested this,</Text>
        <Text style={styles.text}>assigned to <Text style={styles.highlightedText}>{props.suggestingMember}</Text></Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  memberBlockWrapper: {
    height: 100,
    flexWrap: 'wrap',
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
    marginLeft: 20,
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
  },
  text: {
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