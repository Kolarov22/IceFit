import AdminDashboard from "../components/AdminDashboard";

const AdminDashboardPage = () => {
  return (
    <>
      <section className="ellipses">
        <div className="ellipse ellipse1"></div>
        <div className="ellipse ellipse2"></div>
        <div className="ellipse ellipse3"></div>
        <div className="ellipse ellipse4"></div>
      </section>
      <div className="glass overflow-auto">
        <AdminDashboard />
      </div>
    </>
  );
};

export default AdminDashboardPage;
