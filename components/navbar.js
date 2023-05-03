import React from "react";
import Link from "next/link";
import styles from "@/styles/Home.module.css";

const Navbar = () => {
  return (
    <div>
      {" "}
      <nav className={styles.mainNav}>
        <ul>
          <li>
            <Link href="/" legacyBehavior>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/blogpost/heeelllloooo" legacyBehavior>
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a>contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
