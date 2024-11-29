import React from 'react';
import style from  './List.module.css'
import UserInfo from './userInfo/UserInfo';
import ChatList from './chatList/ChatList';

function List() {
  return (
    <div className={style.list}>
      <UserInfo/>
      <ChatList/>
    </div>
  )
}

export default List
