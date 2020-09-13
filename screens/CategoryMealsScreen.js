import React from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealScreen = props => {

  const catId = props.navigation.getParam('categoryId');
  
  const availableMeals = useSelector(state => state.meals.filteredMeals); //Pegando dados do reducers, usando redux

  const displayedMeals = availableMeals.filter(
    meal => meal.categoryIds.indexOf(catId) >= 0
  );
  
  /* Preciso passar o navigation para conseguir navegar quando houver um clique em um item da lista */
  return (
    <MealList listData={displayedMeals} navigation={props.navigation} />
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam('categoryId');
  const selectedCategory = CATEGORIES.find(e => e.id === catId)
  
  return {
    headerTitle: selectedCategory.title
  }
}

export default CategoryMealScreen;
