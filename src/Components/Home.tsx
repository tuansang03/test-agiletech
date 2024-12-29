import Features from "./Features";
import Footer from "./Footer";
import Header from "./Header";
import Testimonials from "./Testimonials";

function Home() {
  return (
    <div style={{ overflow: "hidden" }}>
      <Header />
      <Features />
      <Testimonials />
      <hr
        style={{
          height: "2px",
          color: "hsla(265, 68%, 65%, 1)",
        }}
      />
      <Footer />
    </div>
  );
}

export default Home;
