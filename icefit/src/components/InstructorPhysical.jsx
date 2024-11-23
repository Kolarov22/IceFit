const InstructorPhysical = ({ onInputChange }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onInputChange(name, value);
  };

  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-semibold font-poppins border-b-2 text-xl border-primary">
        PHYSICAL STATS AND ACTIVITY LEVEL
      </h2>
      <label htmlFor="">HEIGHT</label>
      <input
        className="border border-gray-300"
        type="number"
        name="height"
        id=""
        onChange={handleChange}
      />
      <label htmlFor="">WEIGHT</label>
      <input
        className="border border-gray-300"
        type="number"
        name="weight"
        id=""
        onChange={handleChange}
      />
      <label htmlFor="">BODY-FAT PERCENTAGE</label>
      <input
        className="border border-gray-300"
        type="number"
        name="bodyFat"
        id=""
        onChange={handleChange}
      />
      <h2 className="font-semibold font-poppins border-b-2 text-xl border-primary">
        TELLS US ABOUT YOUR SPECIALIZATION
      </h2>
      <textarea
        className="border border-gray-300 h-20"
        name="speciality"
        id=""
        onChange={handleChange}
      ></textarea>
      <h2 className="font-semibold font-poppins border-b-2 text-xl border-primary">
        CERTIFICATIONS & EXPERIENCE
      </h2>
      <textarea
        className="border border-gray-300 h-20"
        name="certifications"
        id=""
        onChange={handleChange}
      ></textarea>
    </div>
  );
};

export default InstructorPhysical;
