import { MOCK_LAYOUTS } from '../../_data';
import { ILayout } from '../../_models';

export type LayoutState = ILayout[];


export const initialLayoutState: LayoutState = [...MOCK_LAYOUTS]
