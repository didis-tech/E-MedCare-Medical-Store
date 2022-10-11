import { useEffect, useState } from "react";
import BlogSlider from "../slider/blog-slider.component";

const blogLink = `https://suretrending.com/api/blog/getAll`;
const HomeBlog = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getAllBlog = async () => {
      const res = await fetch(blogLink);
      const data = await res.json();

      setPosts(data);
    };
    getAllBlog();
    return () => {};
  }, []);
  const filteredPosts = posts.filter((e, i) => i < 12);

  return (
    <>
      {/* BLOG AREA START (blog-3) */}
      <div className="ltn__blog-area pt-115 pb-45">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title-area ltn__section-title-2--- text-center">
                <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color d-none">
                  News &amp; Blogs
                </h6>
                <h1 className="section-title">Leatest Blogs</h1>
              </div>
            </div>
          </div>
          <BlogSlider posts={filteredPosts} />
        </div>
      </div>
      {/* BLOG AREA END */}
    </>
  );
};

export default HomeBlog;
