import { MEALS } from '../../data/dummy-data';

const initialState = {
    meals: MEALS,
    filteredMeals: MEALS,
    favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => { //Reducer tem estado e ação
    return state;
}

export default mealsReducer;