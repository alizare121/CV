type IconProps = {
  name: string;
  size?: number;
  className?: string;
};

export function SvgIcon({ name, size = 24, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      className={`block bg-pink ${className}`}
      fill="currentColor"
      aria-hidden
    >
      <use href={`/icons/sprite.svg#icon-${name}`} />
    </svg>
  );
}