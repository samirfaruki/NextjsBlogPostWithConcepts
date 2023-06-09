import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import styles from "@/styles/Blog.module.css";

function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/blogs");
      const data = await response.json();
      console.log(data);
      setBlogs(data);
    }
    fetchData();
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <div key={blog.title} className={styles.mainBlog}>
          <h2>
            <Link href={`api/getBlogPost?slug=${blog.slug}`} legacyBehavior>
              <a>{blog.title}</a>
            </Link>
          </h2>
          <p>{blog.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Blogs;
