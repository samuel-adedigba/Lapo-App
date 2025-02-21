import React from 'react';
import { Icon } from '../../assets/Icon';

type ResponseType = "success" | "error" | "warning";
interface SuccessPopUpProps {
  message: string;
  isOpen: boolean;
  isClose: () => void;
  response: ResponseType;
}

const SuccessPopUp: React.FC<SuccessPopUpProps> = ({ isClose, isOpen, message, response }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50 backdrop-blur-sm ">
      <div className="w-full max-w-sm bg-white shadow-lg p-6 rounded-lg text-center">
        <div className="flex  mb-4">
          {response === 'success' ? (
            <Icon name="success" size={12} className="text-green-500" />
          ) : (
            <Icon name="fail" size={12} className="text-red-500" />
          )}
        </div>
        <h1 className="text-lg font-semibold mb-2 text-left">
          {response === 'success' ? 'Successful' : 'Failed'}
        </h1>
        <span className="text-gray-600 text-left w-full">{message}</span>
        <button
          onClick={isClose}
          className="mt-6 bg-[#014DAF] text-white font-medium px-4 py-2 rounded-md w-full hover:bg-[#013A8D] transition"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default SuccessPopUp;
