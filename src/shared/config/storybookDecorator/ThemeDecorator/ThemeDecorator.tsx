import { Decorator } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';

export const ThemeDecorator =
(theme: Theme): Decorator =>
(Story) =>
(
<div className={`app ${theme}`}>
<Story />
</div>
);