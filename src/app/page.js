import Layout from "./components/Layout";
import Booking from "./components/Hero";
import AboutUs from "./components/AboutUs";
export default function Home() {
  return (
    <Layout>
      <Booking />
      <AboutUs />
    </Layout>
  );
}
