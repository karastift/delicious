import React from 'react';
import { View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import { FloatingButton } from '../../../components/FloatingButton';
import { PendingWishSnippet } from '../../../components/PendingWishSnippet';
import { WishSnippet } from '../../../components/WishSnippet';
import { Wish } from '../../../generated/graphql';
import { defaultContainerStyles } from '../../../themes/Lighttheme';

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
      <FloatingButton/>
      <ScrollView contentContainerStyle={defaultContainerStyles} style={{flex: 1}}>
        {/* all new wishes */}
        <View style={styles.wishesUpdates}>
          <Text style={styles.headers}>today:</Text>
          <ScrollView style={styles.wishesScrollView} nestedScrollEnabled={true}>
            <PendingWishSnippet
              foodName={exampleWish.food.foodName}
              assignedMember={'Kian'}
              suggestingMember={'Kristin'}
              time={exampleWish.time}
              onPress={() => null}
            />
            <PendingWishSnippet
              foodName={exampleWish.food.foodName}
              assignedMember={'Kian'}
              suggestingMember={'Kristin'}
              time={exampleWish.time}
              onPress={() => null}
            />
            <PendingWishSnippet
              foodName={exampleWish.food.foodName}
              assignedMember={'Kian'}
              suggestingMember={'Kristin'}
              time={exampleWish.time}
              onPress={() => null}
            />
          </ScrollView>
        </View>

        <View style={styles.wishesUpdates}>
          <Text style={styles.headers}>week:</Text>
          <ScrollView style={styles.wishesScrollView} nestedScrollEnabled={true}>
            <WishSnippet
              foodName={exampleWish.food.foodName}
              assignedMember={'Kian'}
              suggestingMember={'Kristin'}
              time={exampleWish.time}
              onPress={() => null}
            />

            <WishSnippet
              foodName={'Nudeln mit Tomatensoße'}
              assignedMember={'Ertan'}
              suggestingMember={'Arin'}
              time={exampleWish.time}
              onPress={() => null}
            />

            <WishSnippet
              foodName={'Nudeln mit Tomatensoße'}
              assignedMember={'Ertan'}
              suggestingMember={'Arin'}
              time={exampleWish.time}
              onPress={() => null}
            />
            
            <WishSnippet
              foodName={'Nudeln mit Tomatensoße'}
              assignedMember={'Ertan'}
              suggestingMember={'Arin'}
              time={exampleWish.time}
              onPress={() => null}
            />
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
    maxHeight: windowHeight / 3,
  },
});