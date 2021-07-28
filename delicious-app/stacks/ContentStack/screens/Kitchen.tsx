import React from 'react';
import { ScrollView, View, Text, Dimensions, StyleSheet } from 'react-native';
import { FloatingButton } from '../../../components/FloatingButton';
import { FoodSnippet } from '../../../components/FoodSnippet';
import { defaultContainerStyles } from '../../../themes/Lighttheme';

export const Kitchen = () => {

  return (
    <View style={defaultContainerStyles}>
      <FloatingButton name='plus' onPress={() => null}/>
      <ScrollView contentContainerStyle={defaultContainerStyles} style={{flex: 1}}>
        {/* all new wishes */}
        <View style={styles.wishesUpdates}>
          <Text style={styles.headers}>food collection:</Text>
          <ScrollView style={styles.wishesScrollView} nestedScrollEnabled={true}>
            <FoodSnippet
              foodName={'Steak'}
              description={'Sehr blutig und kein Schwein.'}
              recipeLink={'https://steak.com'}
              creator={'Ertan'}
              onPress={() => null}
            />
            <FoodSnippet
              foodName={'Steak'}
              description={'Sehr blutig und kein Schwein.'}
              recipeLink={'https://steak.com'}
              creator={'Ertan'}
              onPress={() => null}
            />
            <FoodSnippet
              foodName={'Steak'}
              description={'Sehr blutig und kein Schwein.'}
              recipeLink={'https://steak.com'}
              creator={'Ertan'}
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
    maxHeight: windowHeight,
  },
});