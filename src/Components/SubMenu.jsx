import React, { useState } from "react";
import MenuCard from "./MenuCard";

const SubMenu = ({ title, items }) => {
    const[showMenu, setShowMenu] = useState(false)
  // console.log(title)
  // console.log(items)
  return (
    <div className="p-4">
        <div onClick={() => {
      setShowMenu(!showMenu)
    }} className="flex justify-between">
        <h1 className="font-bold">{title}</h1>
      <span>{showMenu ? <i class="fa-solid fa-arrow-up"></i> : <i className="fa-solid fa-arrow-down"></i>}</span>
        </div>
      
      {showMenu && <div>
        {items.itemCards &&
          items.itemCards.map((item) => {
            return (
              <MenuCard name={item.card.info.name} price={item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100} desc={item.card.info.description} img={item.card.info.imageId} isVeg={item.card.info.itemAttribute.vegClassifier} />
            );
          })}

        {items.categories &&
          items.categories.map((item) => {
            console.log(item);
            return (
              <>
                <p style={{margin: "5px 0 5px 0" }} className="bg-blue-400">{item.title}</p>
                {/* <div>
                  {items.itemCards &&
                    items.itemCards.map((item) => {
                      return (
                        <p
                          style={{
                            backgroundColor: "green",
                            margin: "5px 0 5px 0",
                          }}
                        >
                          {item.card.info.name}
                        </p>
                      );
                    })}
                </div> */}
              </>
            );
          })}
      </div>}
    </div>
  );
};

export default SubMenu;