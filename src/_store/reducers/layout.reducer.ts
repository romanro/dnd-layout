import { LayoutActionsTypes } from '../actions/layout.actions';
import { initialLayoutState, LayoutState } from '../state/layout.state';



export const layoutReducer = (state: LayoutState = initialLayoutState, action: any) => {

    let index;
    let updatedLayouts;

    switch (action.type) {
        case LayoutActionsTypes.UpdateLayout:
            index = state.findIndex(layout => layout.id === action.payload.id);
            updatedLayouts = [...state];
            updatedLayouts[index] = { ...action.payload };
            return [...updatedLayouts];

        case LayoutActionsTypes.ClearLayout:
            index = state.findIndex(layout => layout.id === action.payload);
            updatedLayouts = [...state];
            updatedLayouts[index].elements = updatedLayouts[index].elements.map(element => {
                element.widget = undefined;
                return element;
            });
            return [...updatedLayouts];

        default:
            return state;
    }
}



