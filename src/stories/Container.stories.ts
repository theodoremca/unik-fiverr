import type { Meta, StoryObj } from '@storybook/react';
import { ContainerExample } from './Container';

const meta = {
  title: 'Example/Container',
  component: ContainerExample,
  tags: ['autodocs'],
} satisfies Meta<typeof ContainerExample>;


export default meta;
type Story = StoryObj<Meta<typeof ContainerExample>>;


export const Base: Story = {
};
