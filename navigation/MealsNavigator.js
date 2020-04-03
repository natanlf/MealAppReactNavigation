import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen, 
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen
},
{
  // initialRouteName: 'Categories',
  defaultNavigationOptions: { //carregado por padrão
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
    },
    headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      headerTitle: 'A Screen'
  }
}
);

const tabScreenConfig =  {
  Meals: {
    screen: MealsNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons
            name="ios-restaurant"
            size={25}
            color={tabInfo.tintColor}
          />
        );
      }
    }
  },
  Favorites: {
    screen: FavoritesScreen,
    navigationOptions: {
      tabBarLabel: 'Favorites!',
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
        );
      }
    }
  }
}

const MealsFavTabNavigator = Platform.OS === 'android'
? createMaterialBottomTabNavigator(tabScreenConfig, {
    activeTintColor: 'white',
    shifting: true,
    barStyle: {
      backgroundColor: Colors.primaryColor
    }
  })
: createBottomTabNavigator(tabScreenConfig, {
    tabBarOptions: {
      activeTintColor: Colors.accentColor
    }
  });
export default createAppContainer(MealsFavTabNavigator);
