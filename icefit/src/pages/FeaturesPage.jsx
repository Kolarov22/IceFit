import Navbar from "../components/Navbar";
import Subscriptions from "../components/Subscriptions";
const FeaturesPage = () => {
  return (
    <>
      <section className="ellipses">
        <div className="ellipse ellipse1"></div>
        <div className="ellipse ellipse2"></div>
        <div className="ellipse ellipse3"></div>
        <div className="ellipse ellipse4"></div>
      </section>
      <div className="glass overflow-hidden">
        <Navbar />
        <Subscriptions />
      </div>
    </>
  );
};

export default FeaturesPage;
