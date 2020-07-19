export enum EnumWidgetType {
    RED = 'red',
    GREEN = 'green',
    BLUE = 'blue',
};

export interface IWidgetProps {
    isDraggable: boolean;
}
export interface IWidgetPlaceholderProps {
    currentWidget?: EnumWidgetType | undefined;
}
export interface IWidgetPlaceholderState {
    draggingOver?: boolean;
    currentWidget?: EnumWidgetType | undefined;
}