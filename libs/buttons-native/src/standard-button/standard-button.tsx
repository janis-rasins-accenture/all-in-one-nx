import { Pressable, StyleSheet, Text } from 'react-native';
import { StandardButtonProps } from './standard-button.types';

const StandardButton = ({ variant, label, ...rest }: StandardButtonProps) => {
  const variantStyle = variant === 'secondary' && styles.secondary;
  return (
    <Pressable {...rest} style={[styles.button, variantStyle]}>
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: '#0d6efd',
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#0a53be',
  },
  secondary: {
    backgroundColor: '#6c757d',
    borderColor: '#6c757d',
  },
  text: {
    color: '#fff',
  },
});

export default StandardButton;
