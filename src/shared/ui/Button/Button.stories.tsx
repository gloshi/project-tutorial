import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Theme } from 'app/providers/ThemeProvider';
import { Button, ThemeButtonChanger } from './Button';
import { ThemeDecorator } from 'shared/config/storybookDecorator/ThemeDecorator/ThemeDecorator';

export default {
    title: 'shared/Button',
    component: Button,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
    children: 'Text',
};

export const Clear = Template.bind({});
Clear.args = {
    children: 'Text',
    theme: ThemeButtonChanger.CLEAR
};
Clear.decorators = [ThemeDecorator(Theme.LIGHT)];

export const Outline = Template.bind({});
Outline.args = {
    children: 'Text',
    theme: ThemeButtonChanger.OUTLINE

};
Outline.decorators = [ThemeDecorator(Theme.LIGHT)];
export const OutlineDark = Template.bind({});
OutlineDark.args = {
    children: 'Text',
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
