// import About from "@/Components/About/About";
// import AllDoctors from "@/Components/AllDoctors/AllDoctors";
// import About from "@/Components/About/About";
import BannerSlider from "@/Components/Banner/BannerSlider";
import OurDoctors from "@/Components/Content/OurDoctors/OurDoctors";
import OurTest from "@/Components/Content/OurTest/OurTest";
import Faq from "@/Components/Faq/Faq";
import PopularDoctors from "@/Components/PopularDoctors/PopularDoctors";
import Service from "@/Components/Service/Service";
import Testimonial from "@/Components/Testimonial/Testimonial";

export default function Home() {
  return (
    <main>
      <BannerSlider></BannerSlider>
      {/* <About></About> */}
      <OurDoctors />
      <OurTest />
      <PopularDoctors></PopularDoctors>
      <Faq></Faq>
      <Testimonial></Testimonial>
    </main>
  );
}
