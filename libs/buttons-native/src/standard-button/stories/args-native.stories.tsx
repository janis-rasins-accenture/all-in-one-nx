import React from 'react';
import { action } from 'storybook/actions';
import type { Meta, StoryObj } from '@storybook/react-vite';
import StandardButton from '../standard-button';
import { StandardButtonProps } from '../standard-button.types';

const meta: Meta<typeof StandardButton> = {
  title: 'Components/Buttons/Standard Button/Properties',
  component: StandardButton,
  parameters: {
    controls: { expanded: true },
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['primary', 'secondary'],
      type: 'string',
      description: 'Renders one of the selected visual styles.',
      table: {
        defaultValue: { summary: 'primary' },
        type: { summary: '"primary" | "secondary"' },
      },
    },
    label: {
      control: 'text',
      description: 'Content to be rendered on the button.',
      table: {
        type: { summary: 'string' },
      },
    },
    'aria-label': {
      control: 'text',
      description:
        'ARIA label for cases where a text label is not visible on the screen. If unset label will be used.',
      table: {
        type: { summary: 'string' },
      },
    },
    onPress: {
      action: 'onPress',
      description: "An 'onPress' event handler can be attached",
      table: {
        defaultValue: { summary: '(event: GestureResponderEvent) => void' },
        type: { summary: 'func' },
      },
    },
  },
};

export default meta;

export const NativeProperties: StoryObj<React.PropsWithChildren<StandardButtonProps>> = (
  props: StandardButtonProps
) => {
  return <StandardButton {...props} onPress={action('onClick', { depth: 5 })} />;
};

NativeProperties.args = {
  variant: 'primary',
  label: 'Default',
  'aria-label': 'Default Button',
};
