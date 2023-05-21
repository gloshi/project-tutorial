import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { SideBar } from './SideBar';
import { ThemeDecorator } from 'shared/config/storybookDecorator/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/SideBar',
    component: SideBar,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = (args) => <SideBar {...args} />;

export const Light = Template.bind({});
Light.args = {

};
Light.decorators = [ThemeDecorator(Theme.DARK)];

export const Dark = Template.bind({});
Dark.args = {

};


Dark.decorators = [ThemeDecorator(Theme.DARK)];
