import HomeAbout from "../../components/home/home-about.component";
import HomeBanner2 from "../../components/home/home-banner-2.component";
import HomeBanner from "../../components/home/home-banner.component";
import HomeBlog from "../../components/home/home-blog.component";
import HomeFeature from "../../components/home/home-feature.component";
import HomeProducts from "../../components/home/home-products";
import HomeSliderArea from "../../components/slider/home-slider-area.component";

const Home = () => {
  return (
    <>
      <div className="ltn__utilize-overlay"></div>
      <HomeSliderArea />
      <HomeAbout />
      <HomeBanner />
      <HomeProducts />
      <HomeBanner2 />
      <HomeFeature />
      <HomeBlog />
    </>
  );
};

export default Home;
