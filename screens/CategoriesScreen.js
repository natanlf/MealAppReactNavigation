import React from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity, FlatList, Platform } from 'react-native';
import { CATEGORIES  } from '../data/dummy-data';
import Colors from '../constants/Colors';
import CategoryGridTitle from '../components/CategoryGridTitle';

const CategoriesScreen = props => {

  const renderGridItem = itemData => {
    return (
      <CategoryGridTitle style={styles.gridItem}
        title={itemData.item.title} //funciona como o @Input enviando dados ao componente filho
        color={itemData.item.color}
        onSelect={() => { //evento que é recebido ao clicar no componente CategoryGridTitle. Esse é o nome do evento = onSelect (não sei se é padrão ou se pode ser qualquer nome)
          props.navigation.navigate({
            routeName: 'CategoryMeals', 
            params: {
              categoryId: itemData.item.id
            }
          })
        }}
      >
        <Text>{itemData.item.title}</Text>
      </CategoryGridTitle>
    )
  }

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoriesScreen;
