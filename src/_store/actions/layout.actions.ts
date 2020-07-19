import { ILayout } from '../../_models';

export enum LayoutActionsTypes {
    UpdateLayout = 'UPDATE_LAYOUT',
};

export const updateLayout = (payload: ILayout) => {
    return {
        type: LayoutActionsTypes.UpdateLayout,
        payload
    }
}
