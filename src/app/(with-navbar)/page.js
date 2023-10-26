<<<<<<< HEAD:src/app/(with-navbar)/page.js
=======
import About from "@/Components/About/About";
import AllDoctors from "@/Components/AllDoctors/AllDoctors";
>>>>>>> Sraboni:src/app/page.js
import Appointment from "@/Components/Appointment/Appointment";
import BannerSlider from "@/Components/Banner/BannerSlider";
import OurDoctors from "@/Components/Content/OurDoctors/OurDoctors";
import OurTest from "@/Components/Content/OurTest/OurTest";
import PopularDoctors from "@/Components/PopularDoctors/PopularDoctors";
import Testimonial from "@/Components/Testimonial/Testimonial";

export default function Home() {
  return (
    <main>
      <BannerSlider></BannerSlider>
      <About></About>
      <OurDoctors />
      <OurTest />
      <PopularDoctors></PopularDoctors>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
    </main>
  );
}
