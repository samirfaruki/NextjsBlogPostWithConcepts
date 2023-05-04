import { useRouter } from "next/router";
import styles from "@/styles/Blog.module.css";

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;

  return (
    <>
      {" "}
      <div className={styles.mainBlog}>
        <h3>Title of the h3age: {slug}</h3>
        <hr></hr>
        <p>
          lorem23 Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
          commodi eum corporis illum beatae.
        </p>
      </div>
    </>
  );
};

export default Slug;
