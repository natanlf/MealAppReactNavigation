import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoritesScreen';

import Colors from '../constants/Colors';

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen
},
  {
    defaultNavigationOptions: { //assim não preciso informar em todas as telas as configs do header como cor por exemplo
      headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
      },
      headerTintColor:
        Platform.OS === 'android' ? 'white' : Colors.primaryColor,
      headerTitle: 'A Screen' //título padrão para quando não informar algum
    }
  }
);

const MealsFavTabNavigator = createBottomTabNavigator(
  {
    Meals: { //MealsNavigator é o que usamos desde o início, agora aparece tb no footer
      screen: MealsNavigator,
      navigationOption: {
        tabBarIcon: tabInfo => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabInfo.tinColor}
            />
          );
        }
      }
    },
    Favorites: {
      screen: FavoriteScreen,
      navigationOptions: {
        tabBarLabel: 'Favorites!',
        tabBarIcon: tabInfo => {
          return (
            <Ionicons 
              name="ios-star"
              size={25}
              color={tabInfo.tinColor}
            />
          );
        }
      }
    }
  },
  {
    tabBarOptions: {
      activeTintColor: Colors.accentColor
    }
  }
);

export default createAppContainer(MealsFavTabNavigator);
