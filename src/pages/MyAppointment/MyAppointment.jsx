import { useContext, useEffect } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import MyAppointmentRow from "./MyAppointmentRow";

const MyAppointment = () => {
  const { user, appointment, setAppointment } = useContext(AuthContext);
  const url = `https://doctor-portal-server-phi-one.vercel.app/bookings?email=${user?.email}`;
  useEffect(() => {
    fetch(url,{
      method: 'GET',
      headers:{
        authorization: `Bearer ${localStorage.getItem('doctor-access-token')}`
      }
    })
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
        fetch(`https://doctor-portal-server-phi-one.vercel.app/bookings/${id}`, {
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
    fetch(`https://doctor-portal-server-phi-one.vercel.app/bookings/${id}`,{
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
    <div className="max-w-screen-xl mx-auto pt-20">
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
