export enum EnumWidgetType {
    RED = 'red',
    GREEN = 'green',
    BLUE = 'blue',
    TRANSPARENT = 'transparent'
};

export interface IWidgetProps {
    isDraggable: boolean;
}
export interface IWidgetPlaceholderProps {
    currentWidget?: EnumWidgetType | undefined;
}

export interface IWidgetDraggableContainerProps {
    currentWidget: EnumWidgetType;
}