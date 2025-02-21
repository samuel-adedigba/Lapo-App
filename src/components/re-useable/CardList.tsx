import React from "react";

interface CardItem {
  key: string;
  title: string;
  value: string;
  icon: string;
  status: string;
  rate?: string;
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
              <img src={item.icon} alt={item.title} className="w-6 h-6" />
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
                      <img
                        src="../src/assets/arrow-narrow-up-right.png"
                        className="w-5 h-5"
                      />
                    ) : (
                      "📉"
                    )}{" "}
                    {item.rate}
                  </span>
                )}
                <span className="ml-2 text-base">
                  {item.key === "pending" ? (
                    <span className="flex gap-1 text-[#E78020]">
                      {" "}
                      <img
                        src="../src/assets/alert-circle.png"
                        alt=""
                        className="w-5 h-5"
                      />{" "}
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
