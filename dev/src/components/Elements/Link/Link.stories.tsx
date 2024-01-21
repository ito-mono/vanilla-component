import { Meta, StoryObj } from '@storybook/react';
import { Link, LinkProps } from '.';

const meta: Meta = {
  title: 'Elements/Link',
  component: Link,
};
export default meta;

type Story = StoryObj<LinkProps>;

export const Basic: Story = {
  args: {
    children: 'Link',
  },
};

export const Vite: Story = {
  args: {
    children: <img src='vite.svg'></img>,
  },
};
