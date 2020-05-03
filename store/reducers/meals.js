import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => { //Reducer tem estado e ação
    switch(action.type) {
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(
                meal => meal.id === action.mealId
              );
              if (existingIndex >= 0) {
                const updatedFavMeals = [...state.favoriteMeals]; //faz uma cópia do array
                updatedFavMeals.splice(existingIndex, 1); //retiro do array
                return { ...state, favoriteMeals: updatedFavMeals }; //array antigo recebe o novo atualizado
              }
              else {
                const meal = state.meals.find(meal => meal.id === action.mealId); //procura o item
                return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) }; //coloca no array
              }  
        default:
            return state;      
    }
}

export default mealsReducer;