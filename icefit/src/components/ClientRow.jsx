const ClientRow = ({ name, nutrition, client, price, medicalHistory }) => {
  return (
    <ul className="flex justify-between items-center py-2 px-5 gap-3">
      <li className="basis-1/3">{client}</li>
      <div className="flex justify-around  gap-3 md:gap-12 basis-2/3 ">
        <li>{name}</li>
        <li className="md:mr-4">${price}</li>
        <li>{nutrition}</li>
        <li>{medicalHistory}</li>
      </div>
    </ul>
  );
};

export default ClientRow;
