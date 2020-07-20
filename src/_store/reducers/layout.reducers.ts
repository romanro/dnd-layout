import { MOCK_LAYOUTS } from '../../_data';
import { LayoutActionsTypes } from '../actions/layout.actions';
import { AppState } from '../state/appState';

const initialState: AppState = {
    layouts: MOCK_LAYOUTS
};

// for now using layout reducer as rootReducer

const rootReducer = (state = initialState, action: any) => {
    if (action.type === LayoutActionsTypes.UpdateLayout) {
        const index = state.layouts.findIndex(layout => layout.id === action.payload.id);
        const updatedLayouts = [...state.layouts];
        updatedLayouts[index] = { ...action.payload };
        return { ...state, layouts: [...updatedLayouts] };
    }
    return state;
};

export default rootReducer;