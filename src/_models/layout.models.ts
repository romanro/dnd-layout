import { EnumWidget } from './widgets.models';

export interface ILayout {
    id: string;
    name: string;
    layout: Array<IGridLayoutPart>
}

export interface IGridLayoutPart {
    i: string; x: number; y: number; w: number; h: number; static: boolean, widget?: EnumWidget;
}