function WalletIcon({ checked }) {
  const fill = checked ? "#fff" : "#838383";

  return (
    <svg
      width="30"
      height="30"
      version="1.1"
      viewBox="0 0 25 25"
      xmlSpace="preserve"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={fill}
        className="st0"
        d="M4,7C2.9,7,2,6.1,2,5s0.9-2,2-2h16v2h2V1H4C1.8,1,0,2.8,0,5v13c0,2.8,2.2,5,5,5h19V7H4z M22,21H5  c-1.7,0-3-1.3-3-3V8.4C2.6,8.8,3.3,9,4,9h18V21z M16,17c1.1,0,2-0.9,2-2s-0.9-2-2-2c-1.1,0-2,0.9-2,2S14.9,17,16,17z"
      />
    </svg>
  );
}

export default WalletIcon;
