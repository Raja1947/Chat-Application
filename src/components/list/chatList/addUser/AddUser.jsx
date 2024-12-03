import React from 'react';
import style from './AddUSer.module.css'

const AddUser = () => {
  return (
    <div className={style.addUser}>
      <form>
        <input type='text' placeholder='Username' name='username'/>
        <button>Search</button>

      </form>
      <div className={style.user}>
            <div className={style.detail}>
                <img src='./avatar.png' alt=''/>
                <span>Jane Doe</span>
            </div>
            <button>Add User</button>
      </div>
    </div>
  )
}

export default AddUser
