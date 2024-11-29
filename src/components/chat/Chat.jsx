import React, { useEffect, useRef, useState } from "react";
import style from "./Chat.module.css";
import EmojiPicker from "emoji-picker-react";

function Chat() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");
  const endRef=useRef(null)
  useEffect(()=>{
      endRef.current?.scrollIntoView({behavior:"smooth"})
  },[])

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };
  return (
    <div className={style.chat}>
      <div className={style.top}>
        <div className={style.user}>
          <img src="./avatar.png" alt="" />
          <div className={style.texts}>
            <span>John Doe</span>
            <p>Lorem ipsum dolor sit</p>
          </div>
        </div>
        <div className={style.icons}>
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className={style.center}>
      <div className={`${style.own} ${style.message}`}>
      
          <div className={style.texts}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus molestiae tempora sequi?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className={style.message}>
          <img src="./avatar.png" alt="" />
          <div className={style.texts}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus molestiae tempora sequi?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className={`${style.own} ${style.message}`}>
        
          <div className={style.texts}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus molestiae tempora sequi?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className={style.message}>
          <img src="./avatar.png" alt="" />
          <div className={style.texts}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus molestiae tempora sequi?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div className={`${style.own} ${style.message}`}>
        
          <div className={style.texts}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus molestiae tempora sequi?
            </p>
            <span>1 min ago</span>
          </div>
        </div>
        <div ref={endRef}></div>
      </div>
      <div className={style.bottom}>
        <div className={style.icons}>
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="emoji">
          <img
            src="./emoji.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
          <div className={style.picker}>
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className={style.sendButton}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
