export const Icon = (props) => {
    const {
      iconName,
      iconSize,
      iconColor = 'black',
      className = '16px',
      onClick,
      onMouseLeave,
      onMouseOver,
    } = props;
    return (
      <i
        {...{ onClick }}
        className={`icon-${iconName} icon-${iconSize} icon-${iconColor} ${className}`}
      />
    );
  };