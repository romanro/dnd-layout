import { LayoutActionsTypes } from '../actions/layout.actions';
import { initialLayoutState, LayoutState } from '../state/layout.state';



export const layoutReducer = (state: LayoutState = initialLayoutState, action: any) => {
    switch (action.type) {
        case LayoutActionsTypes.UpdateLayout:
            const index = state.findIndex(layout => layout.id === action.payload.id);
            const updatedLayouts = [...state];
            updatedLayouts[index] = { ...action.payload };
            return [...updatedLayouts];

        default:
            return state;
    }
}



