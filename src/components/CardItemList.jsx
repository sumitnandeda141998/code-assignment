import { CardItem } from "./CardItem";
import GameData from "../app.mock";
import { useEffect, useState } from "react";

export const CardItemList = () => {
  const [cardList, setCardList] = useState([...GameData]);
  const [openlist, setOpenlist] = useState([]);
  const [savelist, setSavelist] = useState([]);
  const [openData, setOpenData] = useState([]);

  const onClickHandler = async (currentId) => {
    let item = GameData.filter((v) => v.id === currentId);
    console.log(openlist.length);

    setOpenlist((pre) => [...pre, item[0].id]);

    setTimeout(() => {
      if (openlist.length % 2 === 0 && openlist.length !== 0) {
        if (
          openData[openData.length - 1].name === item[0].name &&
          openData[openData.length - 1].id !== item[0].id
        ) {
          setOpenlist([]);
          setOpenData((pre) => [...pre, ...item]);
          setSavelist((pre) => [...pre, item[0].id, ...openlist]);
        } else {
          setOpenlist([]);
        }
      } else {
        setOpenlist((pre) => [...pre, item[0].id]);
        setOpenData((pre) => [...pre, ...item]);
      }
    }, 500);
  };

  return (
    <div className="card-item-list">
      {cardList.map((item) => {
        return (
          <CardItem
            key={item.id}
            id={item.id}
            image={item.pic}
            onClick={onClickHandler}
            isOpen={openlist.includes(item.id) || savelist.includes(item.id)}
          ></CardItem>
        );
      })}
    </div>
  );
};
