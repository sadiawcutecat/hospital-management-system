import BannerSlider from "@/Components/Banner/BannerSlider";
import OurDoctors from "@/Components/Content/OurDoctors/OurDoctors";
import OurTest from "@/Components/Content/OurTest/OurTest";

export default function Home() {
  return (
    <main>
      <BannerSlider></BannerSlider>
      <OurDoctors />
      <OurTest />
    </main>
  );
}
