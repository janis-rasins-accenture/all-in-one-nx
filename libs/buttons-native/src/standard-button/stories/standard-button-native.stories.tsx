import type { Meta, StoryObj } from '@storybook/react-vite';
import args from './args-native.stories';
import StandardButton from '../standard-button';
import { action } from 'storybook/actions';

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

export const PrimaryNative: Story = {
  args: {
    variant: 'primary',
    label: 'Button Label',
    onPress: action('onPress', { depth: 5 }),
  },
};

export const SecondaryNative: Story = {
  args: {
    variant: 'secondary',
    label: 'Button Label',
    onPress: action('onPress', { depth: 5 }),
  },
};
