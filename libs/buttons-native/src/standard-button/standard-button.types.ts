import { PressableProps } from 'react-native';

export interface StandardButtonProps extends Omit<PressableProps, 'children'> {
  /**
   * Button variant
   * @default 'primary'
   */
  variant?: 'primary' | 'secondary';
  /**
   * Button Text label
   */
  label: string;
}
