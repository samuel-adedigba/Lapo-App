import React from 'react'
import { Icon, IconName } from '../../assets/Icon';

interface ButtonProps {
    label: string;
    onClick?: () => void;
    variant?: "primary" | "secondary" | "success" | "warning" | "info";
    disabled?: boolean;
    icon?: IconName;
  }
  
  const buttonStyles = {
    primary: "bg-[#344054] text-white hover:bg-gray-700 active:bg-[#E2E2E2] ",
    secondary: "bg-[#B54708] text-white hover:bg-orange-300 active:bg-[#E2E2E2] ",
    success: "bg-[#067647] text-white hover:bg-green-300",
    warning: "bg-[#8020E7] text-white hover:bg-purple-300",
    info: "bg-[#014DAF] text-white hover:bg-blue-300",
  };
  
  const Button: React.FC<ButtonProps> = ({ label, onClick, variant = "primary", disabled, icon }) => {
    return (
      <button
        onClick={onClick}
        disabled={disabled}
        className={`flex items-center px-4 py-2 rounded-md font-medium  ${buttonStyles[variant]} disabled:opacity-50`}
      >
        {icon && <Icon  name={icon} size={6} className={`justify-center items-center p-1 mr-1  `} /> }
        {label}
      </button>
    );
  };

export default Button
