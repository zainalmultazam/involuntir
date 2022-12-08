import { Link } from "react-router-dom";

export const Header = ({ href }) => {
  return (
    <div className="flex justify-between items-center h-[44px] mx-[20px]">
      <Link to={`${href}`}>
        <svg
          width={24}
          height={24}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="white"
          />
          <path
            d="M13.26 15.53L9.73999 12L13.26 8.46997"
            stroke="#212121"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>

      <svg
        width="19"
        height="20"
        viewBox="0 0 19 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.5001 6.39995C15.9912 6.39995 17.2001 5.19112 17.2001 3.69995C17.2001 2.20877 15.9912 0.999939 14.5001 0.999939C13.0089 0.999939 11.8 2.20877 11.8 3.69995C11.8 5.19112 13.0089 6.39995 14.5001 6.39995Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M3.70001 12.3143C5.19118 12.3143 6.40001 11.1055 6.40001 9.61428C6.40001 8.12311 5.19118 6.91428 3.70001 6.91428C2.20883 6.91428 1 8.12311 1 9.61428C1 11.1055 2.20883 12.3143 3.70001 12.3143Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.5001 19C15.9912 19 17.2001 17.7912 17.2001 16.3C17.2001 14.8088 15.9912 13.6 14.5001 13.6C13.0089 13.6 11.8 14.8088 11.8 16.3C11.8 17.7912 13.0089 19 14.5001 19Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.03125 11.3589L12.1783 14.941"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.1693 5.05881L6.03125 8.64082"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
