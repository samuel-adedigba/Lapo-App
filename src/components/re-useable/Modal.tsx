import React from "react";
import { Icon } from "../../assets/Icon";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  className?: string
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children, className }) => {
  if (!isOpen) return null;

  return (
    <div className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-41 ${className} bg-black bg-opacity-70 z-50 backdrop-blur-md  `}>
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center">
          {title && <h2 className="text-lg font-semibold">{title}</h2>}
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700 ml-auto">
            <Icon name="cancel"  className="" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
