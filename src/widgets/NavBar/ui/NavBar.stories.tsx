import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { NavBar } from './NavBar';
import { ThemeDecorator } from 'shared/config/storybookDecorator/ThemeDecorator/ThemeDecorator';
import { RouterDecorator } from 'shared/config/storybookDecorator/RouterDecorator/RouterDecorator';

export default {
    title: 'shared/NavBar',
    component: NavBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof NavBar>;

const Template: ComponentStory<typeof NavBar> = (args) => <NavBar {...args} />;

export const Light = Template.bind({});
Light.args = {

};
Light.decorators = [RouterDecorator]
Light.decorators = [ThemeDecorator(Theme.DARK)];

export const Dark = Template.bind({});
Dark.args = {

};


Dark.decorators = [ThemeDecorator(Theme.DARK)];
