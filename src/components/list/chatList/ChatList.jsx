import React, { useState } from "react";
import style from "./ChatList.module.css";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className={style.ChatList}>
      <div className={style.search}>
        <div className={style.searchBar}>
          <img src="/search.png" />
          <input type="text" placeholder="Search" />
        </div>
        <img
          src={addMode ? "./minus.png" : "./plus.png"}
          className={style.add}
          onClick={() => setAddMode(!addMode)}
        />
      </div>
      <div className={style.item}>
        <img src="./avatar.png" alt=""/>
        <div className={style.texts}>
            <span>Jane Doe</span>
            <p>Hello</p>
        </div>
      </div>
      <div className={style.item}>
        <img src="./avatar.png" alt=""/>
        <div className={style.texts}>
            <span>Jane Doe</span>
            <p>Hello</p>
        </div>
      </div>
      <div className={style.item}>
        <img src="./avatar.png" alt=""/>
        <div className={style.texts}>
            <span>Jane Doe</span>
            <p>Hello</p>
        </div>
      </div>
      
    </div>
  );
};

export default ChatList;
