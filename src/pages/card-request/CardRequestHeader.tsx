import React from "react";
interface HeaderProps{
    title?: string
    subTitile?: string
}

const CardRequestHeader: React.FC<HeaderProps> = ({title, subTitile}) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 px-4 sm:px-0">
      <div className="flex flex-col gap-2">
        <h1 className="font-semibold text-xl sm:text-2xl"> {title}  </h1>
        <small className="text-lg sm:text-xl font-extralight">
            {subTitile}
        </small>
      </div>
    </div>
  );
};

export default CardRequestHeader;
