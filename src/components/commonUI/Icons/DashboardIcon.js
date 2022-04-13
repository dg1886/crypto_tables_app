import { useTheme } from "styled-components";

function DashboardIcon({ checked }) {
  const { colors } = useTheme();
  const stroke = checked ? `${colors.white}` : `${colors.lightGrey}`;

  return (
    <svg
      height="35"
      version="1.1"
      viewBox="0 0 24 24"
      width="35"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title />
      <desc />
      <g fill="none" fillRule="evenodd" id="Dashboard" stroke="none" strokeWidth="1">
        <g
          id="Group-54-Copy"
          transform="translate(12.000000, 12.000000) scale(-1, -1) translate(-12.000000, -12.000000) translate(4.000000, 4.000000)"
        >
          <g id="Group-42">
            <rect
              height="6"
              id="Rectangle"
              rx="2"
              stroke={stroke}
              strokeLinejoin="round"
              strokeWidth="2"
              width="6"
              x="0"
              y="0"
            />
            <rect
              height="6"
              id="Rectangle-Copy-4"
              rx="2"
              stroke={stroke}
              strokeLinejoin="round"
              strokeWidth="2"
              width="6"
              x="0"
              y="10"
            />
            <path
              d="M16,4 C16,5.1045695 15.1045695,6 14,6 L12,6 C10.8954305,6 10,5.1045695 10,4 L10,2 C10,0.8954305 10.8954305,0 12,0"
              id="Path"
              stroke={stroke}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
            <circle cx="15" cy="1" fill={stroke} id="Oval" r="1" />
            <rect
              height="6"
              id="Rectangle-Copy-5"
              rx="2"
              stroke={stroke}
              strokeLinejoin="round"
              strokeWidth="2"
              width="6"
              x="10"
              y="10"
            />
          </g>
        </g>
      </g>
    </svg>
  );
}

export default DashboardIcon;
