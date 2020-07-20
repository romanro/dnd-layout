import React from 'react';

import { WidgetBlue, WidgetGreen, WidgetRed, WidgetTransparent } from '.';
import { EnumWidgetType } from '../_models';

export const renderWidget = (widgetType: EnumWidgetType | undefined) => {
  switch (widgetType) {
    case EnumWidgetType.RED:
      return <WidgetRed />;
    case EnumWidgetType.BLUE:
      return <WidgetBlue />;
    case EnumWidgetType.GREEN:
      return <WidgetGreen />;
    case EnumWidgetType.TRANSPARENT:
      return <WidgetTransparent />;
  }
  return null;
};
