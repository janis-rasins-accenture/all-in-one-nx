import { ButtonHTMLAttributes } from 'react';

export interface StandardButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'children'> {
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
