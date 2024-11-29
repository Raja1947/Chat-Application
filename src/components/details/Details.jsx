import React from "react";
import style from "./Details.module.css";

function Details() {
  return (
    <div className={style.details}>
      <div className={style.user}>
        <img src="./avatar.png" alt="" />
        <h3>Jane Doe</h3>
        <p>Lorem ipsum dolor sit amet </p>
      </div>
      <div className={style.info}>
        <div className={style.option}>
          <div className={style.title}>
            <span>Chat Settings</span>
            <img src="./arrowUp.png" />
          </div>
        </div>
        <div className={style.option}>
          <div className={style.title}>
            <span>Privacy & Help</span>
            <img src="./arrowUp.png" />
          </div>
        </div>
        <div className={style.option}>
          <div className={style.title}>
            <span>Shared Photos</span>
            <img src="./arrowDown.png" />
          </div>
          <div className={style.photos}>
            <div className={style.photosItem}>
              <div className={style.photoDetail}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9OKk822pH7ziJ3LR5lXhWQwLDgt5z6b_7HA&s" />
                <span>Photo_2024.png</span>
              </div>
              <img src="./download.png" className={style.icon}/>
            </div>
            <div className={style.photosItem}>
              <div className={style.photoDetail}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9OKk822pH7ziJ3LR5lXhWQwLDgt5z6b_7HA&s" />
                <span>Photo_2024.png</span>
              </div>
              <img src="./download.png" className={style.icon}/>
            </div>
            <div className={style.photosItem}>
              <div className={style.photoDetail}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9OKk822pH7ziJ3LR5lXhWQwLDgt5z6b_7HA&s" />
                <span>Photo_2024.png</span>
              </div>
              <img src="./download.png" className={style.icon}/>
            </div>
            <div className={style.photosItem}>
              <div className={style.photoDetail}>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9OKk822pH7ziJ3LR5lXhWQwLDgt5z6b_7HA&s" />
                <span>Photo_2024.png</span>
              </div>
              <img src="./download.png" className={style.icon}/>
            </div>
          </div>
        </div>
        <div className={style.option}>
          <div className={style.title}>
            <span>Shared Files</span>
            <img src="./arrowUp.png" />
          </div>
        </div>
        <button>Block User</button>
        <button className={style.logout}>Logout</button>
      </div>
    </div>
  );
}

export default Details;
