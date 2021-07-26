import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { WishSnippet } from '../../../components/WishSnippet';
import { Wish } from '../../../generated/graphql';
import { defaultContainerStyles } from '../../../themes/Lighttheme';
import { beautfiyDate } from '../../../utils/beautifyDate';

export const Whiteboard = () => {

  const exampleWish: Wish = {
    id: 1,
    foodId: 19,
    food: {
      id: 19,
      foodName: 'Steak',
      description: 'Sehr blutig.',
      recipeLink: 'https://steak.com',
      createdAt: new Date().toString(),
      house: undefined,
    },
    time: new Date(2021, 7, 27, 15),
    house: {
      id: 12,
      name: 'simpsons',
    },
  } as any;

  return (
    <View style={defaultContainerStyles}>
      {/* all new wishes */}
      <View style={styles.wishesUpdates}>
        <Text style={styles.headers}>new wishes:</Text>
        <ScrollView contentContainerStyle={styles.wishesScrollView}>
          <WishSnippet
            foodName={exampleWish.food.foodName}
            assignedMember={'Kian'}
            suggestingMember={'Kristin'}
            time={beautfiyDate(exampleWish.time)}
          />
        </ScrollView>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
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
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
});