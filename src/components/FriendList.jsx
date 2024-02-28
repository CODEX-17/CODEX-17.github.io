import React from 'react'
import style from './FriendList.module.css'

const FriendList = () => {
  return (
    <div className={style.container}>
        <div className={style.content}>
            <h2>Friends</h2>
            <p>1.2k mutual friends</p>

            <div className={style.horizontal}>
                <div className={style.friendsCard}>
                    <img src="/cover.jpg" className={style.imgFriends}/>
                    <p>Rumar Pamparo</p>
                </div>
                <div className={style.friendsCard}>
                    <img src="/cover.jpg" className={style.imgFriends}/>
                    <p>Tres Cuttie</p>
                </div>
                <div className={style.friendsCard}>
                    <img src="/cover.jpg" className={style.imgFriends}/>
                    <p>Rumar Mabait</p>
                </div>
            </div>

            <div className={style.horizontal}>
                <div className={style.friendsCard}>
                    <img src="/cover.jpg" className={style.imgFriends}/>
                    <p>Jaimee Topak</p>
                </div>
                <div className={style.friendsCard}>
                    <img src="/cover.jpg" className={style.imgFriends}/>
                    <p>Mimay</p>
                </div>
                <div className={style.friendsCard}>
                    <img src="/cover.jpg" className={style.imgFriends}/>
                    <p>Jaimee Pamparo</p>
                </div>
            </div>

            <button>See all friends</button>

        </div>

       
    </div>
  )
}

export default FriendList