const Subscriptions = () => {
  return (
    <section className="m-2">
      <h1 className="text-primary font-bold text-4xl text-center m-20 ">
        Subscriptions
      </h1>
      <div className="flex  justify-around gap-16 items-center md:mx-20">
        <div className="flex flex-col grow max-w-sm border border-primary rounded-md pb-4 ">
          <h3 className="bg-primary p-8 text-white text-center">
            Basic <br /> 3 Months
          </h3>
          <ul className="py-2 px-4 flex items-center flex-col gap-4 my-6">
            <li>
              <a href="">Personalized Training Plans</a>
            </li>
            <li>
              <a href="">Customized Nutrition Guides</a>
            </li>
            <li>
              <a href="">One-On-One Coaching</a>
            </li>
            <li>
              <a href="">Progress Tracking</a>
            </li>
            <li>
              <a href="">Interactive Workshops</a>
            </li>
            <li>
              <a href="">Flexible Scheduling</a>
            </li>
            <li>
              <a href="">Secure Payments</a>
            </li>
          </ul>
          <button className="m-4 rounded-full py-2 text-primary border-primary border hover:transition ease-in-out duration-300 delay-75 hover:bg-primary hover:text-white">
            SELECT
          </button>
        </div>
        <div className="flex flex-col grow max-w-sm border border-primary rounded-md pb-4">
          <h3 className="bg-primary p-8 text-white text-center">
            Premium <br /> 12 Months
          </h3>
          <ul className="py-2 px-4 flex flex-col items-center gap-4 my-6">
            <li>
              <a href="">Personalized Training Plans</a>
            </li>
            <li>
              <a href="">Customized Nutrition Guides</a>
            </li>
            <li>
              <a href="">One-On-One Coaching</a>
            </li>
            <li>
              <a href="">Progress Tracking</a>
            </li>
            <li>
              <a href="">Interactive Workshops</a>
            </li>
            <li>
              <a href="">Flexible Scheduling</a>
            </li>
            <li>
              <a href="">Secure Payments</a>
            </li>
          </ul>
          <button className="m-4 rounded-full py-2 text-primary border-primary border  transition ease-in-out duration-300 delay-75 hover:bg-primary hover:text-white">
            SELECT
          </button>
        </div>
      </div>
    </section>
  );
};

export default Subscriptions;
