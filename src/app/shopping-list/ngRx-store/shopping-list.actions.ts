import { Action  }  from '@ngrx/store'
import { Ingredient } from '../../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT' 

export const ADD_INGREDIENTS = 'ADD_INGREDIENTS' 

export const UPDATE_INGREDIENT = 'UPDATE_INGREDIENT' 

export const DELETE_INGREDIENT = 'DELETE_INGREDIENT' 

export const START_EDIT = 'START_EDIT'

export const STOP_EDIT = 'STOP_EDIT'

export const UPDATE_INGREDIENTS = 'UPDATE_INGREDIENTS'

export class AddIngredient implements Action {

    //This action ets dispatched in the shopping-list-edit component

    readonly type = ADD_INGREDIENT;

    constructor(public payload: Ingredient) {
   
    }

}


export class AddIngredients implements Action {

    //This action ets dispatched in the shopping-list-edit component

    readonly type = ADD_INGREDIENTS;

    constructor(public payload: Ingredient[]) {
   
    }

}

export class UpdateIngredients implements Action {

    //This action ets dispatched in the shopping-list-edit component

    readonly type = UPDATE_INGREDIENTS;

    constructor(public payload: Ingredient[]) {
   
    }

}

export class UpdateIngredient implements Action {

    //This action ets dispatched in the shopping-list-edit component

    readonly type = UPDATE_INGREDIENT;

    constructor(public payload: {ingredient: Ingredient}) {
   
    }

}

export class DeleteIngredient implements Action {

    //This action ets dispatched in the shopping-list-edit component

    readonly type = DELETE_INGREDIENT;



}

export class StartEdit implements Action {

    //This action ets dispatched in the shopping-list-edit component

    readonly type = START_EDIT;

    constructor(public payload: number) {
   
    }

}



export class StopEdit implements Action {

    //This action ets dispatched in the shopping-list-edit component

    readonly type = STOP_EDIT;

}

export type ShoppingListActions = AddIngredient | AddIngredients | UpdateIngredient | DeleteIngredient | StartEdit | StopEdit | UpdateIngredients;

