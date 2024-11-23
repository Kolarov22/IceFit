// eslint-disable-next-line react/prop-types
const Personal = ({ onInputChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-semibold font-poppins border-b-2 text-xl border-primary">
        BASIC INFO
      </h2>
      <span className="flex flex-auto justify-between gap-5">
        <div className="flex flex-col w-2/3">
          <label htmlFor="">FIRST NAME</label>
          <input
            className="border border-gray-300"
            type="text"
            name="firstName"
            id=""
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col w-1/3">
          <label htmlFor="">LAST NAME</label>
          <input
            className="border border-gray-300"
            type="text"
            name="lastName"
            id=""
            onChange={handleChange}
          />
        </div>
      </span>
      <label htmlFor="">PHONE</label>
      <input
        className="border border-gray-300"
        type="tel"
        name="phoneNumber"
        id=""
        onChange={handleChange}
      />
      <label htmlFor="">FITNESS GOALS</label>
      <input
        className="border border-gray-300"
        type="text"
        name="fitnessGoals"
        id=""
        onChange={handleChange}
      />
      <label htmlFor="">NUTRITIONAL PREFERENCES</label>
      <input
        className="border border-gray-300"
        type="text"
        name="nutritionalPreferences"
        id=""
        onChange={handleChange}
      />
      <h2 className="font-semibold font-poppins border-b-2 text-xl border-primary">
        ABOUT ME
      </h2>
      <textarea
        className="border border-gray-300 h-20"
        name="aboutMe"
        id=""
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default Personal;
