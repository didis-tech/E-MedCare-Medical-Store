const BlogSliderItem = ({ post }) => {
  const getDate = (date) => {
    var readable_date = new Date(date).toDateString();
    return readable_date;
  };
  return (
    <>
      {/* Blog Item */}
      <div className="col-lg-12">
        <div className="ltn__blog-item ltn__blog-item-3">
          <div className="ltn__blog-img">
            <a href="#!">
              <img
                src={`https://suretrending.com/assets/img/blog/${post.blog_img}`}
                alt="blog"
              />
            </a>
          </div>
          <div className="ltn__blog-brief">
            <div className="ltn__blog-meta">
              <ul>
                <li className="ltn__blog-author">
                  <a href="#">
                    <i className="far fa-user" />
                    by: {post.username}
                  </a>
                </li>
                <li className="ltn__blog-tags">
                  <a href="#">
                    <i className="fas fa-tags" />
                    Trend
                  </a>
                </li>
              </ul>
            </div>
            <h3 className="ltn__blog-title">
              <a href="#!">{post.blog_title}</a>
            </h3>
            <div className="ltn__blog-meta-btn">
              <div className="ltn__blog-meta">
                <ul>
                  <li className="ltn__blog-date">
                    <i className="far fa-calendar-alt" />
                    {getDate(post.date)}
                  </li>
                </ul>
              </div>
              <div className="ltn__blog-btn">
                <a href="#!">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Blog Item */}
    </>
  );
};

export default BlogSliderItem;
