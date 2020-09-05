import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { MEALS } from '../data/dummy-data';

const MealDetailScreen = props => {

  const mealId = props.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(e => e.id === mealId);

  return (
    <View style={styles.screen}>
      <Text>{selectedMeal.title}</Text>
      <Button
        title="Go Back to Categories"
        onPress={ () => {
          props.navigation.popToTop(); //volta a tela inicial
        }}
      />
    </View>
  );
};

MealDetailScreen.navigationOptions = navigationData => {
  const mealId = navigationData.navigation.getParam('mealId');
  const selectedMeal = MEALS.find(e => e.id === mealId);
  console.log(selectedMeal)
  return {
    headerTitle: selectedMeal.title
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default MealDetailScreen;
