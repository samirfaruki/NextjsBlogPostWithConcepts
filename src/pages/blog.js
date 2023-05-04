import React from "react";
import Link from "next/link";
import styles from "@/styles/Blog.module.css";


const Blog = () => {
  return (
    <div className={styles.mainBlog}>
      <h2>This is my blog page</h2>
      <div className={styles.blogItems}>
        <h3>
          <Link href="/blogpost/learn java script">
            How to learn javascript in 2022
          </Link>
        </h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos commodi
          eum corporis illum beatae.
        </p>
      </div>
      <div>
        <h3>How to learn javascript in 2022</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos commodi
          eum corporis illum beatae.
        </p>
      </div>
      <div>
        <h3>How to learn javascript in 2022</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos commodi
          eum corporis illum beatae.
        </p>
      </div>
      <div>
        <h3>How to learn javascript in 2022</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos commodi
          eum corporis illum beatae.
        </p>
      </div>
    </div>
  );
};

export default Blog;
