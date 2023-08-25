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
    <i
      {...{ onClick }}
      className={`icon-${iconName} icon-${iconSize} icon-${iconColor} ${className}`}
    />
  );
};
