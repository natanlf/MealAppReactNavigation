import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
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
  // initialRouteName: 'Categories',
  defaultNavigationOptions: defaultstackNavOptions
}
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: 'Categories',
    defaultNavigationOptions: defaultstackNavOptions
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
      },
      tabBarColor: Colors.primaryColor
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

  const FiltersNavigator = createStackNavigator(
    {
      Filters: FiltersScreen
    },
    {
      defaultNavigationOptions: defaultstackNavOptions
    }
  );

  const MainNavigator = createDrawerNavigator(
    {
      MealsFav: {
        screen: MealsFavTabNavigator,
        navigationOptions: {
          drawerLabel: 'Meals'
        }
      },
      Filters: FiltersNavigator
    },
    {
      contentOptions: {
        activeTintColor: Colors.accentColor,
        labelStyle: {
          fontFamily: 'open-sans-bold'
        }
      }
    }
  );

export default createAppContainer(MainNavigator);
