import type { Meta, StoryObj } from '@storybook/react-vite';
import { action } from 'storybook/actions';
import args from './args.stories';
import StandardButton from '../standard-button';

const meta: Meta<typeof StandardButton> = {
  component: StandardButton,
  title: 'Components/Buttons/Standard Button/All Stories',
  argTypes: args.argTypes,
  parameters: {
    controls: { disable: true },
    layout: 'centered',
  },
};
export default meta;
type Story = StoryObj<typeof StandardButton>;

export const Primary: Story = {
  args: {
    variant: 'primary',
    label: 'Button Label',
    onClick: action('onClick', { depth: 5 }),
  },
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    label: 'Button Label',
    onClick: action('onClick', { depth: 5 }),
  },
};
