import { Grid } from '@material-ui/core';
import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ILayout } from '../_models';
import { AppState } from '../_store/state/appState';
import { WidgetRed } from '../widgets';
import { Layout } from './../layouts/Layout';

export const ConfigurationPage = () => {
  const { layoutId } = useParams();

  const layout: ILayout | undefined = useSelector((state: AppState) =>
    state.layouts.find((layout) => layout.id === layoutId)
  );

  if (layout) {
    return (
      <div className="config-page">
        <Grid container spacing={3}>
          <Grid item xs={12} sm={4} lg={3} className="widgets-bar">
            <h2>Widgets:</h2>
            <WidgetRed isSelectable={true} />
          </Grid>
          <Grid item xs={12} sm={8} lg={9}>
            <h2>{layout.name}</h2>
            <Layout layout={layout} isEditable={true} />
          </Grid>
        </Grid>
      </div>
    );
  } else {
    return <p>No valid Layout</p>;
  }
};
