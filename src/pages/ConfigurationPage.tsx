import { Card, Grid } from '@material-ui/core';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { EnumWidgetType, IGridLayoutPart, ILayout, IUpdateLayoutData } from '../_models';
import { LayoutActionsTypes } from '../_store/actions/layout.actions';
import { AppState } from '../_store/state/app.state';
import { WidgetDraggableContainer, WidgetRed } from '../widgets';
import { Layout } from './../layouts/Layout';

export const ConfigurationPage = () => {
  const { layoutId } = useParams();

  const layout: ILayout | undefined = useSelector((state: AppState) =>
    state.layouts.find((layout) => layout.id === layoutId)
  );

  const dispatchUpdateLayouts = useDispatch();

  const updateLayout: any = (data: IUpdateLayoutData) => {
    if (layout) {
      const { placeholderId, widgetType } = data;
      const updatedElements: Array<IGridLayoutPart> = layout.elements.map(
        (element) => {
          if (element.i === placeholderId) {
            element.widget = widgetType;
          }
          return element;
        }
      );
      const updatedLayout: ILayout = {
        id: layout.id,
        name: layout.name,
        elements: [...updatedElements],
      };
      dispatchUpdateLayouts({
        type: LayoutActionsTypes.UpdateLayout,
        payload: updatedLayout,
      });
    }
  };

  if (layout) {
    return (
      <div className="config-page grid-container">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} lg={3}>
            <Card className="widgets-bar">
              <h2>Widgets:</h2>
              <WidgetDraggableContainer currentWidget={EnumWidgetType.RED} />
              <WidgetDraggableContainer currentWidget={EnumWidgetType.BLUE} />
              <WidgetDraggableContainer currentWidget={EnumWidgetType.GREEN} />
              <WidgetDraggableContainer
                currentWidget={EnumWidgetType.TRANSPARENT}
              />
            </Card>
          </Grid>
          <Grid item xs={12} sm={8} lg={9}>
            <Card className="layout-container">
              <h2>{layout.name}</h2>
              <Layout
                layout={layout}
                isEditable={true}
                updateLayout={updateLayout}
              />
            </Card>
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return <p>No valid Layout</p>;
  }
};
