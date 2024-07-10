"use client";
import styles from "./Navbar.module.css";
import { usePathname } from "next/navigation";
import {
  MdNotifications,
  MdOutlineChat,
  MdPublic,
  MdSearch,
  MdLogout,
} from "react-icons/md";
const Navbar = () => {
  const path = usePathname();
  return (
    <div className={styles.container}>
      <div className={styles.title}>{path.split("/").pop()}</div>
      <div className={styles.menu}>
        <div className={styles.search}>
          <MdSearch />
          <input type="text" placeholder="search" className={styles.input} />
        </div>

        <div className={styles.icons}>
          <MdOutlineChat size={20} />
          <MdNotifications size={20} />
          <MdPublic size={20} />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
