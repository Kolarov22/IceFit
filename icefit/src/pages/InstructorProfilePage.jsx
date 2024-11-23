import Navigator from "../components/Navigator";
import InstructorSettings from "../components/InstructorSettings";
const InstructorProfilePage = () => {
  return (
    <>
      <section className="ellipses">
        <div className="ellipse ellipse1"></div>
        <div className="ellipse ellipse2"></div>
        <div className="ellipse ellipse3"></div>
        <div className="ellipse ellipse4"></div>
      </section>
      <div className="glass overflow-auto">
        <Navigator />
        <InstructorSettings />
      </div>
    </>
  );
};

export default InstructorProfilePage;
