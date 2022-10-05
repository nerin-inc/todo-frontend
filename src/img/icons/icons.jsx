import icons from './icons.svg';

function Icons({ name, color, size = 20, className }) {
  return (
    <svg className={className} fill={color} stroke={color} width={size} height={size}>
      <use xlinkHref={`${icons}#icon-${name}`} />
    </svg>
  );
}

export default Icons;
