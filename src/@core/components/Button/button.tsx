import { BaseButtonProps, BaseStyles } from './types';
import { ButtonShapeStyles } from './button.helper';

const Button: React.FC<BaseButtonProps> = ({
  children,
  icon,
  shape = 'round5',
  onClick,
  disabled = false,
  block = false,
  htmlType,
  className,
}) => {
  return (
    <button
      className={[BaseStyles, className, ButtonShapeStyles[shape]].join(' ')}
      onClick={onClick}
      disabled={disabled || block}
      type={htmlType}
      aria-pressed={onClick ? 'true' : 'false'}
      aria-label={'button'}
      aria-disabled={disabled}
      role={'button'}
    >
      {icon}
      {children}
    </button>
  );
};

export default Button;