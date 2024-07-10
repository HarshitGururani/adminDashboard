import Image from "next/image";
import styles from "./Transactions.module.css";

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Transactions</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt="User Avatar"
                  height={40}
                  width={40}
                  className={styles.userImage}
                />
                Pankaj Joshi
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>05.7.2025</td>
            <td>$4.200</td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt="User Avatar"
                  height={40}
                  width={40}
                  className={styles.userImage}
                />
                Pankaj Joshi
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.done}`}>Done</span>
            </td>
            <td>05.7.2025</td>
            <td>$4.200</td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt="User Avatar"
                  height={40}
                  width={40}
                  className={styles.userImage}
                />
                Pankaj Joshi
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.cancelled}`}>
                Cancelled
              </span>
            </td>
            <td>05.7.2025</td>
            <td>$4.200</td>
          </tr>

          <tr>
            <td>
              <div className={styles.user}>
                <Image
                  src={"/noavatar.png"}
                  alt="User Avatar"
                  height={40}
                  width={40}
                  className={styles.userImage}
                />
                Pankaj Joshi
              </div>
            </td>
            <td>
              <span className={`${styles.status} ${styles.pending}`}>
                Pending
              </span>
            </td>
            <td>05.7.2025</td>
            <td>$4.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
