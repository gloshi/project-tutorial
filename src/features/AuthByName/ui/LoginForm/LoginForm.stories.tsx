import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import  LoginForm  from "./LoginForm";
import { ThemeDecorator } from "shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { Theme } from "app/providers/ThemeProvider";
import { StoreDecorator } from "shared/config/storybook/StoreDecorator/StoreDecorator";

export default {
  title: "features/LoginForm",
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LoginForm>;

const Template: ComponentStory<typeof LoginForm> = (args) => (
  <LoginForm {...args} />
);

export const Primary = Template.bind({});
Primary.args = {};
Primary.decorators = [
  StoreDecorator({
    loginForm: { username: "root", password: "123" },
    
  }),
];


export const Error = Template.bind({});
Error.args = {};
Error.decorators = [
  StoreDecorator({
    loginForm: { username: "root", password: "123", error: 'error' },
  }),
];

export const Loading = Template.bind({});
Loading.args = {};
Loading.decorators = [
  StoreDecorator({
    loginForm: { username: "root", password: "123", isLoading: true },
  }),
];
