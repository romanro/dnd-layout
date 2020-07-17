import { MOCK_LAYOUTS } from '../../_data';
import { LayoutActionsTypes } from '../actions/layout.actions';
import { AppState } from '../state/appState';

const initialState: AppState = {
    layouts: MOCK_LAYOUTS
};

const rootReducer = (state = initialState, action: any) => {
    if (action.type === LayoutActionsTypes.UpdateLayout) {
        return state;
    }
    return state;
};

export default rootReducer;