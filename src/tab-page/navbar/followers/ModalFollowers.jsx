import React from "react";
import styles from "./ModalFollowers.module.scss";
import follower from "./img/1.jpg";
import follower2 from "./img/2.jpg";
import follower3 from "./img/3.jpg";
import follower4 from "./img/4.jpg";

const ModalFollowers = ({ isVisible, setVisible }) => {
  return (
    <div
      className={styles.container}
      onClick={() => setVisible((isVisible = false))}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        <div className="p-3 font-bold text-lg">Followers 4</div>

        <div className="flex">
          <div className={styles.img_container}>
            <a href="/">
              <img src={follower} alt="follower" className={styles.img} />
              <div className="p-2">Emma Bronson</div>
            </a>
          </div>
          <div className={styles.img_container}>
            <a href="/">
              <img src={follower2} alt="follower" className={styles.img} />
              <div className="p-2">Josh Lewis</div>
            </a>
          </div>
          <div className={styles.img_container}>
            <a href="/">
              <img src={follower3} alt="follower" className={styles.img} />
              <div className="p-2">Derick Jonatan</div>
            </a>
          </div>
          <div className={styles.img_container}>
            <a href="/">
              <img src={follower4} alt="follower" className={styles.img} />
              <div className="p-2">Elena Tetcher</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalFollowers;
