import React from "react";
import Friend from "./Friend";
import styles from "./ModalFriends.module.scss";

const ModalFriends = ({ isVisible, setVisible }) => {
  const friends = [
    {
      name: "Emma Bronson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      id: Date.now(),
    },
    {
      name: "Artem Kolektor",
      avatar:
        "https://photoplay.ru/sites/default/files/styles/r-1-1-mobile/public/gallery_images/bez_nazvaniya_2.jpg?itok=neZUWJ7E",
      id: Date.now(),
    },
    {
      name: "Pavel Durov",
      avatar:
        "https://w35sr6r2cw.cloudcdn.info/files/2021/05/rqzyvca0av8-kopiya-758x505.jpg",
      id: Date.now(),
    },
    {
      name: "Vladimir Erokhin",
      avatar:
        "http://photar.ru/wp-content/uploads/2017/11/fake3.jpg",
      id: Date.now(),
    },
    {
      name: "Sveta Ivleeva",
      avatar:
        "https://n1s2.hsmedia.ru/82/2e/fb/822efb46114be1437d7702897dca5cde/728x546_1_35026874213d2aa042b279dcd77039c2@1706x1280_0xac120003_10396362651655480846.jpeg",
      id: Date.now(),
    },
    {
      name: "Kristina Grey",
      avatar:
        "https://dekatop.com/wp-content/uploads/2019/01/people_03.jpg",
      id: Date.now(),
    },
  ];

  return (
    <div
      className={styles.container}
      onClick={() => setVisible((isVisible = false))}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className="p-3 font-bold text-lg">Friends 6</div>
        <div className="flex">
          {friends.map((friend) => {
            return <Friend friend={friend} key={friend.id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ModalFriends;
