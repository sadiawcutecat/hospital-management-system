import AllDoctors from "@/Components/AllDoctors/AllDoctors";
import Appointment from "@/Components/Appointment/Appointment";
import BannerSlider from "@/Components/Banner/BannerSlider";
import OurDoctors from "@/Components/Content/OurDoctors/OurDoctors";
import OurTest from "@/Components/Content/OurTest/OurTest";
// import Dashboard from "@/Components/Dashboard/Dashboard";
import PopularDoctors from "@/Components/PopularDoctors/PopularDoctors";
import Testimonial from "@/Components/Testimonial/Testimonial";

export default function Home() {
  return (
    <main>
      <BannerSlider></BannerSlider>
      {/* <Dashboard></Dashboard> */}
      <OurDoctors />
      <AllDoctors></AllDoctors>
      <OurTest />
      <PopularDoctors></PopularDoctors>
      <Appointment></Appointment>
      <Testimonial></Testimonial>
    </main>
  );
}
