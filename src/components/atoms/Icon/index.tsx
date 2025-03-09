interface iconInterface {
  iconName?: string;
  iconSize?: string;
  iconColor?: string;
  className?: string;
  onClick?: () => void;
}

export const Icon = (props: iconInterface) => {
  const {
    iconName,
    iconSize,
    iconColor = 'black',
    className = '16px',
    onClick,
  } = props;
  return (
    <div
      onClick={onClick}
      role='button'
      aria-label={iconName}
      tabIndex={0} 
      className={`icon-${iconName} icon-${iconSize} icon-${iconColor} ${className}`}
    />
  );
};
