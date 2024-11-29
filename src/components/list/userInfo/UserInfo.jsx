import React from 'react';
import style from './UserInfo.module.css'

const UserInfo = () => {
  return (
    <div className={style.userInfo}>
      <div className={style.user}>
        <img src='./avatar.png' alt=''/>
        <h2>John</h2>
      </div>
      <div className={style.icons}>
        <img src='./more.png' alt='eee'/>
        <img src='./video.png' alt=''/>
        <img src='./edit.png' alt=''/>
      </div>
    </div>
  )
}

export default UserInfo
