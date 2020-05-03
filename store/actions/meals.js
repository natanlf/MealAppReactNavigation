export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';

export const toggleFavorite = (id) => { //action será usado no reducer
    return { type: TOGGLE_FAVORITE, mealId: id };
};