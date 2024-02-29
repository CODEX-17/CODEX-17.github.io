import React, { useEffect, useState } from 'react'
import style from './Homepage.module.css'
import Header from '../components/Header'
import Profile from '../components/Profile'
import Info from '../components/Info'
import FriendList from '../components/FriendList'
import { FaUserFriends } from "react-icons/fa"
import { BiSolidRightArrow } from "react-icons/bi"
import { GrLike } from "react-icons/gr"
import { FaRegComment } from "react-icons/fa"
import { PiShareFatLight } from "react-icons/pi"
import { PiMessengerLogo } from "react-icons/pi"
import { BsThreeDots } from "react-icons/bs"
import { HiHome } from "react-icons/hi"
import { PiVideo } from "react-icons/pi"
import { LiaUserFriendsSolid } from "react-icons/lia"
import { GrNotification } from "react-icons/gr"


const Homepage = () => {

  const [count, setCount] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [sinceFirst, setsinceFirst] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
  
    const startDate = new Date('2023-09-05')
    const startFirstDate = new Date('2020-12-11')
    const currentDate = new Date()
    const differenceInSeconds = (currentDate - startDate) / 1000
    const differenceInSecondsfirst = (currentDate - startFirstDate) / 1000

    const intervalId = setInterval(() => {
      const days = Math.floor(differenceInSeconds / (60 * 60 * 24))
      const hours = Math.floor((differenceInSeconds % (60 * 60 * 24)) / (60 * 60))
      const minutes = Math.floor((differenceInSeconds % (60 * 60)) / 60)
      const seconds = Math.floor(differenceInSeconds % 60)
      const months = Math.floor(days / 30);
      setCount({ days: days % 30, hours, minutes, seconds, months });
    }, 1000)

    const intervalIds = setInterval(() => {
      const days = Math.floor(differenceInSecondsfirst / (60 * 60 * 24))
      const hours = Math.floor((differenceInSecondsfirst % (60 * 60 * 24)) / (60 * 60))
      const minutes = Math.floor((differenceInSecondsfirst % (60 * 60)) / 60)
      const seconds = Math.floor(differenceInSecondsfirst % 60)
      const months = Math.floor(days / 30);
      setsinceFirst({ days: days % 30, hours, minutes, seconds, months });
    }, 1000)

    return () => clearInterval(intervalId, intervalIds)

  }, [])

  return (
    <div className={style.container}>
        <Header/>
        <Profile/>
        <Info/>
        <FriendList/>
        <div className={style.bodyList}>
            <div className={style.post}>
                <div className={style.sections}>sad</div>
                <div className={style.head}>
                  <div className={style.horizontal}>
                    <img src='/dp.jpg'/>
                    <div className={style.vertical}>
                      <h2>Jaimee Sauli Mamuyac <BiSolidRightArrow size={10} color='gray'/> Rumar Pamparo</h2>
                      <p>Sep 5 2023<FaUserFriends/></p>
                    </div>
                  </div>
                  <BsThreeDots style={{ marginRight: '10px' }}/>
                </div>
                <div className={style.body}>
                  <h2>Time since we are official:</h2>
                  <p>
                    {count.months} months, {count.days} days, {count.hours} hours, {count.minutes} minutes, {count.seconds} seconds
                  </p>
                  <b>Since you answer me.</b> Its is real-time date
                  <br/>
                  <br/>
                  <div className={style.footer}>
                    <div className={style.horizontal}>
                      <GrLike/>
                      Like
                    </div>
                    <div className={style.horizontal}>
                      <FaRegComment/>
                      Comment
                    </div>
                    <div className={style.horizontal}>
                      <PiMessengerLogo/>
                      Send
                    </div>
                    <div className={style.horizontal}>
                      <PiShareFatLight/>
                      Share
                    </div>

                  </div>
                </div>
            </div>

            <div className={style.post}>
                <div className={style.sections}>sad</div>
                <div className={style.head}>
                  <div className={style.horizontal}>
                    <img src='/dp.jpg'/>
                    <div className={style.vertical}>
                      <h2>Jaimee Sauli Mamuyac <BiSolidRightArrow size={10} color='gray'/> Rumar Pamparo</h2>
                      <p>Sep 5 2023<FaUserFriends/></p>
                    </div>
                  </div>
                  <BsThreeDots style={{ marginRight: '10px' }}/>
                </div>
                <div className={style.body}>
                  <h2>The first time we talk:</h2>
                  <p>
                    {sinceFirst.months} months, {sinceFirst.days} days, {sinceFirst.hours} hours, {sinceFirst.minutes} minutes, {sinceFirst.seconds} seconds
                  </p>
                  <b>Since you reply on me.</b> Its is real-time date
                  <br/>
                  <br/>
                  tagal tagal nadin pala no.
                  <br/>
                  tamang pa "SUBSCRIBE PO" si kuya mo haha.
                  <img src='/ss.jpg'/>
                  <div className={style.footer}>
                    <div className={style.horizontal}>
                      <GrLike/>
                      Like
                    </div>
                    <div className={style.horizontal}>
                      <FaRegComment/>
                      Comment
                    </div>
                    <div className={style.horizontal}>
                      <PiMessengerLogo/>
                      Send
                    </div>
                    <div className={style.horizontal}>
                      <PiShareFatLight/>
                      Share
                    </div>

                  </div>
                </div>
            </div>

            <div className={style.post}>
                <div className={style.sections}>sad</div>
                <div className={style.head}>
                  <div className={style.horizontal}>
                    <img src='/dp.jpg'/>
                    <div className={style.vertical}>
                      <h2>Rumar Pamparo <BiSolidRightArrow size={10} color='gray'/> Rumar Pamparo</h2>
                      <p>March 1 <FaUserFriends/></p>
                    </div>
                  </div>
                  <BsThreeDots style={{ marginRight: '10px' }}/>
                </div>
                <div className={style.body}>
                  Cute mo dyan be your such an angel :3
                  <img src='/post1.jpg' />
                  <div className={style.footer}>
                    <div className={style.horizontal}>
                      <GrLike/>
                      Like
                    </div>
                    <div className={style.horizontal}>
                      <FaRegComment/>
                      Comment
                    </div>
                    <div className={style.horizontal}>
                      <PiMessengerLogo/>
                      Send
                    </div>
                    <div className={style.horizontal}>
                      <PiShareFatLight/>
                      Share
                    </div>

                  </div>
                </div>
            </div>

            <div className={style.post}>
                <div className={style.sections}>sad</div>
                <div className={style.head}>
                  <div className={style.horizontal}>
                    <img src='/dp.jpg'/>
                    <div className={style.vertical}>
                      <h2>Jaimee Sauli Mamuyac <BiSolidRightArrow size={10} color='gray'/> Rumar Pamparo</h2>
                      <p>March 1 <FaUserFriends/></p>
                    </div>
                  </div>
                  <BsThreeDots style={{ marginRight: '10px' }}/>
                </div>
                <div className={style.body}>
                  Food trip tayo dito Yiee!, Cute natin dyan. more gala pa satin.
                  <video controls>
                      <source src="/video.mp4" type="video/mp4"/>
                      Your browser does not support the video tag.
                  </video>
                  <div className={style.footer}>
                    <div className={style.horizontal}>
                      <GrLike/>
                      Like
                    </div>
                    <div className={style.horizontal}>
                      <FaRegComment/>
                      Comment
                    </div>
                    <div className={style.horizontal}>
                      <PiMessengerLogo/>
                      Send
                    </div>
                    <div className={style.horizontal}>
                      <PiShareFatLight/>
                      Share
                    </div>

                  </div>
                </div>
            </div>

            <div className={style.post}>
                <div className={style.sections}>sad</div>
                <div className={style.head}>
                  <div className={style.horizontal}>
                    <img src='/dp.jpg'/>
                    <div className={style.vertical}>
                      <h2>Jaimee Sauli Mamuyac <BiSolidRightArrow size={10} color='gray'/> Rumar Pamparo</h2>
                      <p>March 1 <FaUserFriends/></p>
                    </div>
                  </div>
                  <BsThreeDots style={{ marginRight: '10px' }}/>
                </div>
                <div className={style.body}>
                  Tamang Singerist lang tayo dyan hahah.
                  <video controls>
                      <source src="video1.mp4" type='video/mp4'/>
                      Your browser does not support the video tag.         
                  </video>
                  <div className={style.footer}>
                    <div className={style.horizontal}>
                      <GrLike/>
                      Like
                    </div>
                    <div className={style.horizontal}>
                      <FaRegComment/>
                      Comment
                    </div>
                    <div className={style.horizontal}>
                      <PiMessengerLogo/>
                      Send
                    </div>
                    <div className={style.horizontal}>
                      <PiShareFatLight/>
                      Share
                    </div>

                  </div>
                </div>
            </div>

            <div className={style.post}>
                <div className={style.sections}>sad</div>
                <div className={style.head}>
                  <div className={style.horizontal}>
                    <img src='/dp.jpg'/>
                    <div className={style.vertical}>
                      <h2>Jaimee Mamuyac<BiSolidRightArrow size={10} color='gray'/> Rumar Pamparo</h2>
                      <p>March 1 <FaUserFriends/></p>
                    </div>
                  </div>
                  <BsThreeDots style={{ marginRight: '10px' }}/>
                </div>
                <div className={style.body}>
                  Tamang Singerist lang tayo dyan hahah.
                  <video controls>
                      <source src="video2.mp4" type='video/mp4'/>
                      Your browser does not support the video tag.         
                  </video>
                  <div className={style.footer}>
                    <div className={style.horizontal}>
                      <GrLike/>
                      Like
                    </div>
                    <div className={style.horizontal}>
                      <FaRegComment/>
                      Comment
                    </div>
                    <div className={style.horizontal}>
                      <PiMessengerLogo/>
                      Send
                    </div>
                    <div className={style.horizontal}>
                      <PiShareFatLight/>
                      Share
                    </div>

                  </div>
                </div>
            </div>

            <div className={style.post}>
                <div className={style.sections}>sad</div>
                <div className={style.head}>
                  <div className={style.horizontal}>
                    <img src='/dp.jpg'/>
                    <div className={style.vertical}>
                      <h2>Jaimee Mamuyac<BiSolidRightArrow size={10} color='gray'/> Rumar Pamparo</h2>
                      <p>March 1 <FaUserFriends/></p>
                    </div>
                  </div>
                  <BsThreeDots style={{ marginRight: '10px' }}/>
                </div>
                <div className={style.body}>
                  Bait mo pa dyan be, ahhah char..
                  <video controls>
                      <source src="video3.mp4" type='video/mp4'/>
                      Your browser does not support the video tag.         
                  </video>
                  <div className={style.footer}>
                    <div className={style.horizontal}>
                      <GrLike/>
                      Like
                    </div>
                    <div className={style.horizontal}>
                      <FaRegComment/>
                      Comment
                    </div>
                    <div className={style.horizontal}>
                      <PiMessengerLogo/>
                      Send
                    </div>
                    <div className={style.horizontal}>
                      <PiShareFatLight/>
                      Share
                    </div>

                  </div>
                </div>
            </div>

            <div className={style.post}>
                <div className={style.sections}>sad</div>
                <div className={style.head}>
                  <div className={style.horizontal}>
                    <img src='/dp.jpg'/>
                    <div className={style.vertical}>
                      <h2>Jaimee Mamuyac<BiSolidRightArrow size={10} color='gray'/> Rumar Pamparo</h2>
                      <p>March 1 <FaUserFriends/></p>
                    </div>
                  </div>
                  <BsThreeDots style={{ marginRight: '10px' }}/>
                </div>
                <div className={style.body}>
                  Ang kukulit hahah.
                  <video controls>
                      <source src="video4.mp4" type='video/mp4'/>
                      Your browser does not support the video tag.         
                  </video>
                  <div className={style.footer}>
                    <div className={style.horizontal}>
                      <GrLike/>
                      Like
                    </div>
                    <div className={style.horizontal}>
                      <FaRegComment/>
                      Comment
                    </div>
                    <div className={style.horizontal}>
                      <PiMessengerLogo/>
                      Send
                    </div>
                    <div className={style.horizontal}>
                      <PiShareFatLight/>
                      Share
                    </div>

                  </div>
                </div>
            </div>

            <div className={style.post}>
                <div className={style.sections}>sad</div>
                <div className={style.head}>
                  <div className={style.horizontal}>
                    <img src='/dp.jpg'/>
                    <div className={style.vertical}>
                      <h2>Jaimee Mamuyac<BiSolidRightArrow size={10} color='gray'/> Rumar Pamparo</h2>
                      <p>March 1 <FaUserFriends/></p>
                    </div>
                  </div>
                  <BsThreeDots style={{ marginRight: '10px' }}/>
                </div>
                <div className={style.body}>
                  Naalala mo pato? Tamang laro laro lang ahhah.
                  <video controls>
                      <source src="video5.mp4" type='video/mp4'/>
                      Your browser does not support the video tag.         
                  </video>
                  <div className={style.footer}>
                    <div className={style.horizontal}>
                      <GrLike/>
                      Like
                    </div>
                    <div className={style.horizontal}>
                      <FaRegComment/>
                      Comment
                    </div>
                    <div className={style.horizontal}>
                      <PiMessengerLogo/>
                      Send
                    </div>
                    <div className={style.horizontal}>
                      <PiShareFatLight/>
                      Share
                    </div>

                  </div>
                </div>
            </div>

            <div className={style.post}>
                <div className={style.sections}>sad</div>
                <div className={style.head}>
                  <div className={style.horizontal}>
                    <img src='/dp.jpg'/>
                    <div className={style.vertical}>
                      <h2>Jaimee Mamuyac<BiSolidRightArrow size={10} color='gray'/> Rumar Pamparo</h2>
                      <p>March 1 <FaUserFriends/></p>
                    </div>
                  </div>
                  <BsThreeDots style={{ marginRight: '10px' }}/>
                </div>
                <div className={style.body}>
                  Haha Simangot yarn..
                  <video controls>
                      <source src="video6.mp4" type='video/mp4'/>
                      Your browser does not support the video tag.         
                  </video>
                  <div className={style.footer}>
                    <div className={style.horizontal}>
                      <GrLike/>
                      Like
                    </div>
                    <div className={style.horizontal}>
                      <FaRegComment/>
                      Comment
                    </div>
                    <div className={style.horizontal}>
                      <PiMessengerLogo/>
                      Send
                    </div>
                    <div className={style.horizontal}>
                      <PiShareFatLight/>
                      Share
                    </div>

                  </div>
                </div>
            </div>

            <div className={style.post}>
                <div className={style.sections}>sad</div>
                <div className={style.head}>
                  <div className={style.horizontal}>
                    <img src='/rumar1.jpg'/>
                    <div className={style.vertical}>
                      <h2>Rumar Pamparo <BiSolidRightArrow size={10} color='gray'/> Jaimee Sauli Mamuyac</h2>
                      <p>March 1<FaUserFriends/></p>
                    </div>
                  </div>
                  <BsThreeDots style={{ marginRight: '10px' }}/>
                </div>
                <div className={style.body}>
                      <b>HAPPY BIRTHDAY WABI KO</b> <br/>
                      (Mommy/Wabi/Wabibi)
                      <br/>
                      <br/>
                      Maligayang kaarawan sa nag iisa at pinaka cute kung asawa yiee, Birthday munanaman your age still counting how about the height haha charr. Hmm Ang wish ko lang para sayo to have a good health, ang be happy kahit minsan may mga problema satin or sa family andito lang ako lagi wabi diko nawawala im your Super kind boyfriend , Mahal na mahal ka ng habi tandaan mo always . It is your day now sana ma enjoy natin tong araw mo ngayon masaya ko para sayo , sana magustuhan mo yung gift ko para sayo . Dami pakong wish para sayo pero yan muna tyaka na muna yung iba haha jk. Mag tratravel pa tayo abroad haha and gagawa ng 3 baby haha charr . Ingatan mo palagi sarili mo bawas bawasan na pagiging topak please haha jk. Ok hanggang dito nalang itong long long message haha bye bye enjoy natin tong araw nato together yieee mwaaa mwaa.
                      <br/>
                      <br/>
                      -Your Super Duper Very so Kind Boy Friend forever
                      <img src='/together.jpg'/>
                  <div className={style.footer}>
                    <div className={style.horizontal}>
                      <GrLike/>
                      Like
                    </div>
                    <div className={style.horizontal}>
                      <FaRegComment/>
                      Comment
                    </div>
                    <div className={style.horizontal}>
                      <PiMessengerLogo/>
                      Send
                    </div>
                    <div className={style.horizontal}>
                      <PiShareFatLight/>
                      Share
                    </div>

                  </div>
                </div>
            </div>

            <div className={style.sections}>sad</div>
        </div>

        <div className={style.footerMenu}>
          <div className={style.verticalMenuIcons}>
            <HiHome size={25} color={'rgb(8, 102, 255)'}/>
            Home
          </div>
          <div className={style.verticalMenuIcons}>
            <PiVideo size={25}/>
            Video
          </div>
          <div className={style.verticalMenuIcons}>
            <LiaUserFriendsSolid size={25}/>
            Friends
          </div>
          <div className={style.verticalMenuIcons}>
            <GrNotification size={25}/>
            Notification
          </div>

          <div className={style.verticalMenuIcons}>
            <img src='/dp.jpg'/>
            Menu
          </div>
          
        </div>
    </div>
  ) 
}

export default Homepage