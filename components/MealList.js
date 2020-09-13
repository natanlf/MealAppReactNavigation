import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import MealItem from './MealItem';

const MealList = props => { /* MealItem, passamos a usar aqui agora, em CategoryMealScreen agora vamos usar o MealList ao invés do MealItem */
    const favoriteMeals = useSelector(state => state.meals.favoriteMeals); //acessa o redux
    const renderMealItem = itemData => { 
        const isFavorite = favoriteMeals.some(meal => meal.id === itemData.item.id); //se o item da lista está no array de favoritos, retorna true
        return (
            <MealItem
                title={itemData.item.title}
                image={itemData.item.imageUrl}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                affordability={itemData.item.affordability}
                onSelectMeal={ () => {
                    props.navigation.navigate({
                        routeName: 'MealDetail',
                        params: {
                            mealId: itemData.item.id,
                            mealTitle: itemData.item.title,
                            isFav: isFavorite //envia true ou false
                        }
                    })
                }}
            />
        );
    }

    return (
        <View style={styles.list}>
            <FlatList 
                data={props.listData}
                keyExtractor={ (item, index) => item.id }
                renderItem={renderMealItem}
                style={ {width: '100%'} }
            />
        </View>
    );
}

const styles = StyleSheet.create({
    list: {
        flex: 1,
        justifyContent: 'center',
        alignSelf: 'center',
        padding: 15
    }
});

export default MealList;