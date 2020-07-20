import { ILayout } from '../../_models';

export enum LayoutActionsTypes {
    UpdateLayout = 'UPDATE_LAYOUT',
    ClearLayout = 'CLEAR_LAYOUT',
};

export const updateLayout = (payload: ILayout) => {
    return {
        type: LayoutActionsTypes.UpdateLayout,
        payload
    }
}

export const clearLayout = (payload: string) => {
    return {
        type: LayoutActionsTypes.ClearLayout,
        payload
    }
}
