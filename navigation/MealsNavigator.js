import { createStackNavigator, createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';
import React from 'react';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoriteScreen from '../screens/FavoritesScreen';

import Colors from '../constants/Colors';

const defaultstackNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primaryColor : ''
  },
  headerTintColor:
      Platform.OS === 'android' ? 'white' : Colors.primaryColor,
    headerTitle: 'A Screen'
}

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMealsScreen
  },
  MealDetail: MealDetailScreen
},
  {
    defaultNavigationOptions: defaultstackNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoriteScreen,
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultstackNavOptions
  }
);

const tabScreenConfig = {
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
    screen: FavNavigator,
    navigationOptions: {
      tabBarLabel: 'Favorites!',
      tabBarIcon: tabInfo => {
        return (
          <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
        );
      },
      tabBarColor: Colors.accentColor
    }
  }
}

/* Não mudou muita coisa, continuamos tenho o meals Navigator e o Favorites nessa nova variável
   Foi necessário fazer isso para ter um estilo no Android e outro no IOS
   O que acho interessante é que podemos referenciar uma tela ou um navigator que possui várias.
   Como MealsNavigator que possui várias telas, é um createStackNavigator e Favorites que referência createStackNavigator agora
*/
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
