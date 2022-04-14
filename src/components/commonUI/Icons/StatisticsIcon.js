import { useTheme } from "styled-components";

function StatisticsIcon({ checked }) {
  const { colors } = useTheme();
  const fill = checked ? `${colors.white}` : `${colors.lightGrey}`;

  return (
    <svg
      width="32px"
      height="32px"
      version="1.1"
      viewBox="0 0 24 24"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="info" />
      <g id="icons">
        <g id="statistics">
          <path
            fill={fill}
            d="M5,12H3c-1.1,0-2,0.9-2,2v6c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2v-6C7,12.9,6.1,12,5,12z"
          />
          <path
            fill={fill}
            d="M13,2h-2C9.9,2,9,2.9,9,4v16c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2V4C15,2.9,14.1,2,13,2z"
          />
          <path
            fill={fill}
            d="M21,8h-2c-1.1,0-2,0.9-2,2v10c0,1.1,0.9,2,2,2h2c1.1,0,2-0.9,2-2V10C23,8.9,22.1,8,21,8z"
          />
        </g>
      </g>
    </svg>
  );
}

export default StatisticsIcon;
