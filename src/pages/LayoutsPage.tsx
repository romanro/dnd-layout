import { Card, CardActions, CardContent, CardHeader, Fab, Grid } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import { ILayout } from '../_models';
import { AppState } from '../_store/state/app.state';
import { Layout } from '../layouts/Layout';

export const LayoutsPage = () => {
  const layouts: ILayout[] = useSelector((state: AppState) => {
    return state.layouts;
  });

  return (
    <div className="grid-container">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} lg={4}>
          {layouts.map((layout, index) => (
            <Card key={index} className="grid-item">
              <CardHeader title={layout.name} />
              <CardContent>
                <Layout layout={layout} isEditable={false} />
              </CardContent>
              <CardActions disableSpacing className="grid-actions">
                <Link to={`/config/${layout.id}`}>
                  <Fab size="small" color="primary" aria-label="edit">
                    <EditIcon />
                  </Fab>
                </Link>
              </CardActions>
            </Card>
          ))}
        </Grid>
      </Grid>
    </div>
  );
};
