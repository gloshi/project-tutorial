import { StyleDecorator } from '../../src/shared/config/storybookDecorator/StyleDecorator/StyleDecorator'
import { ThemeDecorator } from '../../src/shared/config/storybookDecorator/ThemeDecorator/ThemeDecorator'
import { RouterDecorator } from '../../src/shared/config/storybookDecorator/RouterDecorator/RouterDecorator'
import { Theme } from '../../src/app/providers/ThemeProvider';
import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';



export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  decorators: [StyleDecorator,ThemeDecorator(Theme.DARK),RouterDecorator],

};
