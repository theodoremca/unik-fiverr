import type { Meta, StoryObj } from '@storybook/react';
import { StyledTextExample } from './StyledText';

const meta = {
  title: 'Example/Text',
  component: StyledTextExample,
  tags: ['autodocs'],
} satisfies Meta<typeof StyledTextExample>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Base: Story = {
};
