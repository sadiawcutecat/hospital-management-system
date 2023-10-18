import Appointment from "@/Components/Appointment/Appointment";
import BannerSlider from "@/Components/Banner/BannerSlider";
import OurDoctors from "@/Components/Content/OurDoctors/OurDoctors";
import OurTest from "@/Components/Content/OurTest/OurTest";
import Testimonial from "@/Components/Testimonial/Testimonial";

export default function Home() {
  return (
    <main>
      <BannerSlider></BannerSlider>
      <Appointment></Appointment>
      <OurDoctors />
      <OurTest />
      <Testimonial></Testimonial>
    </main>
  );
}
