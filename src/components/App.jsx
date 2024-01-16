// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import userData from '../data/userData.json'
import list from '../data/list.json'
import Profile from './Profile/Profile.jsx'
import FriendList from './FriendList/FriendList.jsx'
const App=()=>{
return (
    <div>
      <Profile
        name={userData.name}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={list}></FriendList>
    </div>
  );
};

export default App
