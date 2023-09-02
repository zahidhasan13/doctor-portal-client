import { useContext, useEffect } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import MyAppointmentRow from "./MyAppointmentRow";
import Swal from "sweetalert2";

const MyAppointment = () => {
  const { user, appointment, setAppointment } = useContext(AuthContext);
  const url = `http://localhost:5000/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAppointment(data));
  }, [url]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/bookings/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your appointment has been deleted.", "success");
              const remaining = appointment.filter((apt) => apt._id !== id);
              setAppointment(remaining);
            }
          });
      }
    });
  };
  const handleUpdate = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`,{
      method: "PATCH",  
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        status: "confirm",
      }),
    })
    .then(res => res.json())
    .then(data => {
      if(data.modifiedCount > 0) {
        const remaining = appointment.filter(apt => apt._id !== id);
        const confirmed = appointment.find(apt => apt._id === id);
        confirmed.status = "confirm";
        if(confirmed){
          alert("Confirmed")
        }
        const newAppointment = [...remaining, confirmed];
        setAppointment(newAppointment);
      }
    })
  };

  return (
    <div className="max-w-screen-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold text-[#11D0DE] text-center mb-8">Total Appointment: {appointment.length}</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-4 lg:mx-0">
            {appointment?.map((appoint) => (
              <MyAppointmentRow
                key={appoint._id}
                appointment={appoint}
                handleUpdate={handleUpdate}
                handleDelete={handleDelete}
              ></MyAppointmentRow>
            ))}
          </div>
    </div>
  );
};

export default MyAppointment;
