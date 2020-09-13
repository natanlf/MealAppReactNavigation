import { MEALS } from '../../data/dummy-data';
import { TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => { //action vai enviar o action com a ação e o mealId
    switch(action.type){
        case TOGGLE_FAVORITE:
            const existingIndex = state.favoriteMeals.findIndex(
                meal => meal.id === action.mealId
            );
            if(existingIndex >= 0) { //se já tem na lista de favoritos, retira
                const updatedFavMeals = [...state.favoriteMeals]; //faz uma cópia do array
                updatedFavMeals.splice(existingIndex, 1); //retira o elemento do array
                return { ...state, favoriteMeals: updatedFavMeals } //o array antigo recebe o novo atualizado
            } else { //se não tem na lista de favoritos, adiciona
                const meal = state.meals.find(meal => meal.id === action.mealId);
                return { ...state, favoriteMeals: state.favoriteMeals.concat(meal) }; //coloca no array
            }
        default:
            return state;    
    }
}

export default mealsReducer;