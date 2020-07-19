import { EnumWidgetType } from './widgets.models';

export interface ILayout {
    id: string;
    name: string;
    elements: Array<IGridLayoutPart>
}
export interface IGridLayoutPart {
    i: string; x: number; y: number; w: number; h: number; static: boolean, widget?: EnumWidgetType;
}

export interface ILayoutProps {
    layout: ILayout;
    isEditable: boolean;
    updateLayout?: any
};

export interface IUpdateLayoutData {
    placeholderId: string; widgetType: EnumWidgetType;
}
