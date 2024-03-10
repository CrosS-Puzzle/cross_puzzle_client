import { IconProps } from './common'

function FindIcon({ width, height, fill = '#000000', className }: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 28 28"
      fill="none"
      className={className}
    >
      <path
        clipRule="evenodd"
        d="M12.2852 4.05704C7.74092 4.05704 4.05704 7.74092 4.05704 12.2852C4.05704 16.8295 7.74092 20.5134 12.2852 20.5134C16.8295 20.5134 20.5134 16.8295 20.5134 12.2852C20.5134 7.74092 16.8295 4.05704 12.2852 4.05704ZM2 12.2852C2 6.60485 6.60485 2 12.2852 2C17.9656 2 22.5704 6.60485 22.5704 12.2852C22.5704 17.9656 17.9656 22.5704 12.2852 22.5704C6.60485 22.5704 2 17.9656 2 12.2852Z"
        fill={fill}
        fillRule="evenodd"
      />
      <path
        d="M19.8786 18.3487L25.6829 24.153C26.1057 24.5758 26.1057 25.2613 25.6829 25.6841C25.2601 26.1069 24.5746 26.1069 24.1518 25.6841L18.3475 19.8798L19.8786 18.3487Z"
        fill={fill}
      />
    </svg>
  )
}

export default FindIcon
