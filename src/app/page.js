import Layout from "./components/Layout";
import Booking from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import Works from "./components/Works";
import Contact from "./components/Contact"
export default function Home() {
  return (
    <Layout>
      <Booking />
      <AboutUs />
      <Services />
      <Works />
      <Contact/>
    </Layout>
  );
}
