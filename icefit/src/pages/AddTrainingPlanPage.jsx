import Navigator from "../components/Navigator";
import TrainingPlan from "../components/TrainingPlan";

const AddTrainingPlanPage = () => {
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
        <TrainingPlan week={5} />
      </div>
    </>
  );
};

export default AddTrainingPlanPage;
