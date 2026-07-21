import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Venue from "./components/Venue";
import Parking from "./components/Parking";
import Schedule from "./components/Schedule";
import SeatingChart from "./components/SeatingChart";
import Menu from "./components/Menu";
import UploadPhotos from "./components/UploadPhotos";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen font-body">
      <Navbar />
      <main>
        <Hero />
        <Venue />
        <Parking />
        <Schedule />
        <SeatingChart />
        <Menu />
        <UploadPhotos />
      </main>
      <Footer />
    </div>
  );
}
