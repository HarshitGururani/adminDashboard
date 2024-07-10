import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./Card.module.css";
const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total users</span>
        <span className={styles.number}>18,678</span>
        <span className={styles.details}>
          <span className={styles.positive}>15% </span>more than previous week
        </span>
      </div>
    </div>
  );
};
export default Card;
