
const MyAppointmentRow = ({ appointment, handleUpdate, handleDelete }) => {
  const { _id, dieseas, price, time, date, status } = appointment;
  console.log(status);
  return (
    <div className="border-2 border-[#11D0DE] p-4 text-center">
      <h2 className="text-xl font-bold">Appointment: {dieseas}</h2>
      <p>{date}</p>
      <p>Time: {time}</p>
      <p>Price: ${price}</p>
      <div className="grid grid-cols-2 gap-4 mt-4 text-white font-bold">
      {
          status === "confirm" ? <span className="text-[#FF3811]">Confirmed</span> : <button onClick={() => handleUpdate(_id)} className="bg-[#11D0DE] px-5 py-2.5 rounded-md">Confirm</button>
        }
        <button onClick={() => handleDelete(_id)} className="bg-[#11D0DE] px-5 py-2.5 rounded-md">Delete</button>
      </div>
    </div>
  );
};

export default MyAppointmentRow;
