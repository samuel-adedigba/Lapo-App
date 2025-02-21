import React from "react";
import { Icon, IconName } from "../../assets/Icon";

interface CardItem {
  key: string;
  title: string;
  value: string;
  status: string;
  rate?: string;
  icon: IconName
}

interface CardListProps {
  title?: string;
  items: CardItem[];
  containerClass?: string;
  itemClass?: string;
  textClass?: string;
}

const CardList: React.FC<CardListProps> = ({
  title,
  items,
  containerClass = "",
  itemClass = "",
  textClass = "",
}) => {
  return (
    <div className="w-full">
      {title && <h2 className="text-xl font-semibold mb-4">{title}</h2>}

      <div className={`grid ${containerClass}`}>
        {items.map((item) => (
          <div key={item.key} className={`rounded-xl gap-8 ${itemClass}`}>
            <div className={`${textClass} mb-4  `}>
              <Icon  name={item.icon} size={6} />
              <span className="text-lg">{item.title}</span>
            </div>
            <div className="flex justify-between my-4">
              <h2 className="text-2xl font-bold">{item.value}</h2>
              <div className="mt-1 flex items-center text-sm text-gray-500">
                {item.rate && (
                  <span
                    className={`px-2 py-1 rounded-md text-xs font-medium flex gap-1 ${
                      item.rate.includes("+")
                        ? "text-green-600 bg-green-100"
                        : "text-red-600 bg-red-100"
                    }`}
                  >
                    {item.rate.includes("+") ? (
                      <Icon  name="arrow-up" size={4} />
                    ) : (
                      ""
                    )}{" "}
                    {item.rate}
                  </span>
                )}
                <span className="ml-2 text-base">
                  {item.key === "pending" ? (
                    <span className="flex gap-1 text-[#E78020]">
                      {" "}
                      <Icon   name="alert-warning" />
                      <span> Requires attention </span>{" "}
                    </span>
                  ) : (
                    item.status
                  )}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardList;
