import AboutUs from "@/components/aboutUs/AboutUs";
import ImageSlider from "@/components/imageSlider/ImageSlider";
import TopServices from "@/components/topServices/TopServices";
import CertificateSection from '@/components/certificateSection/CertificateSection';
import MapSection from '@/components/mapSection/MapSection';

function HomePage() {
  return (
    <>
      <ImageSlider />
      <TopServices />
      <AboutUs />
      <CertificateSection></CertificateSection>
      <MapSection></MapSection>
    </>
  );
}

export default HomePage;
