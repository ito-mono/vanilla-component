import { Meta, StoryObj } from '@storybook/react';
import { Card, CardProps } from '.';

const meta: Meta = {
  title: 'Welcome/Card',
  component: Card,
};
export default meta;

type Story = StoryObj<CardProps>;
export const Basic: Story = {};
