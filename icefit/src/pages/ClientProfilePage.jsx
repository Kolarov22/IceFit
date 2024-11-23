import Navigator from "../components/Navigator";
import ClientSettings from "../components/ClientSettings";

const ClientProfilePage = () => {
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
        <ClientSettings />
      </div>
    </>
  );
};

export default ClientProfilePage;
