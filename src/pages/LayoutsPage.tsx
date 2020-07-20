import { Card, CardActions, CardContent, CardHeader, Fab, Grid } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ILayout } from '../_models';
import { LayoutActionsTypes } from '../_store/actions/layout.actions';
import { AppState } from '../_store/state/app.state';
import { Layout } from '../layouts/Layout';

export const LayoutsPage = () => {
  const layouts: ILayout[] = useSelector((state: AppState) => {
    return state.layouts;
  });

  const dispatchClearLayout = useDispatch();

  const handleClear = (event: any, layout: ILayout) => {
    dispatchClearLayout({
      type: LayoutActionsTypes.ClearLayout,
      payload: layout.id,
    });
  };

  return (
    <div className="grid-container">
      <Grid container spacing={3}>
        {layouts.map((layout, index) => (
          <Grid key={index} item xs={12} sm={6} lg={4}>
            <Card className="grid-item">
              <CardHeader className="card-header" title={layout.name} />
              <CardContent>
                <Layout layout={layout} isEditable={false} />
              </CardContent>
              <CardActions className="grid-actions">
                <Fab
                  size="small"
                  color="secondary"
                  aria-label="delete"
                  onClick={(event) => {
                    handleClear(event, layout);
                  }}
                >
                  <DeleteIcon />
                </Fab>

                <Link to={`/config/${layout.id}`}>
                  <Fab size="small" color="primary" aria-label="edit">
                    <EditIcon />
                  </Fab>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
