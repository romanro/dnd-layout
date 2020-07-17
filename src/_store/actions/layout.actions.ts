import { ILayout } from '../../_models';

export enum LayoutActionsTypes {
    UpdateLayout = 'UPDATE_LAYOUT',
};

export const updateLayout = (layout: ILayout) => {
    return {
        type: LayoutActionsTypes.UpdateLayout,
        payload: layout
    }
}
