import styles from './standard-button.module.css';
import { StandardButtonProps } from './standard-button.types';
import classNames from 'classnames';

const StandardButton = ({ variant = 'primary', label, ...rest }: StandardButtonProps) => {
  return (
    <button
      className={classNames(styles.button, variant === 'secondary' && styles.secondary)}
      {...rest}
    >
      {label}
    </button>
  );
};

export default StandardButton;
