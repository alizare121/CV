interface iconInterface {
  iconName?: string;
  iconSize?: string;
  iconColor?: string;
  className?: string;
}

export const Icon = (props: iconInterface) => {
  const { iconName, iconSize, iconColor = 'black', className = '16px' } = props;
  return (
    <i
      aria-label={iconName}
      className={`icon-${iconName} icon-${iconSize} icon-${iconColor} ${className}`}
    />
  );
};
