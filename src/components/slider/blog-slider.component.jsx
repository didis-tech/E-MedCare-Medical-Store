import Slider from "react-slick";
import BlogSliderItem from "../blog/blog-slider-item.component";

const SamplePrevArrow = (props) => {
  const { style, onClick } = props;
  return (
    <a class="slick-prev" style={{ ...style }} onClick={onClick}>
      <i class="fas fa-arrow-left" alt="Arrow Icon"></i>
    </a>
  );
};

const SampleNextArrow = (props) => {
  const { style, onClick } = props;
  return (
    <a class="slick-next" style={{ ...style }} onClick={onClick}>
      <i class="fas fa-arrow-right" alt="Arrow Icon"></i>
    </a>
  );
};
const slideSettings = {
  className:
    "row  ltn__blog-slider-one-active slick-arrow-1 ltn__blog-item-3-normal",

  arrows: true,
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
      },
    },
    {
      breakpoint: 575,
      settings: {
        arrows: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const BlogSlider = ({ posts }) => {
  return (
    <Slider {...slideSettings}>
      {posts.map((post) => (
        <BlogSliderItem key={post.post_id} post={post} />
      ))}
    </Slider>
  );
};

export default BlogSlider;
