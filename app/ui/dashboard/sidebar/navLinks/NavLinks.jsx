"use client";
import Link from "next/link";
import styles from "./NavLinks.module.css";
import { usePathname } from "next/navigation";

const NavLinks = ({ item }) => {
  const path = usePathname();

  return (
    <Link
      href={item.path}
      className={`${styles.container} ${
        path === item.path ? styles.active : ""
      }`}
    >
      {item.icon}
      {item.title}
    </Link>
  );
};
export default NavLinks;
