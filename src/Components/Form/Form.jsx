import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const Form = ({ patient }) => {
  const { user } = useAuth();
  const handlePrescription = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const Date_Time = form.Date_Time.value;
    const Purpose = form.Purpose.value;
    const Type = form.Type.value;
    const Prescription = form.Prescription.value;

    const prescription = {
      name,
      email,
      Date_Time,
      Purpose,
      Type,
      Prescription,
      doctorPhoto: user.photoURL,
      doctorName: user.displayName
    };

    console.log(prescription);

    fetch(`/api/prescription`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(prescription),
    })
      .then((res) => res.json())
      .then((data) => {
      if(data.success){
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Prescription Added Successfully",
          showConfirmButton: false,
          timer: 1000,
        });
      }
        console.log(data);
      });
  };

  return (
    <div>
      <form onSubmit={(e) => handlePrescription(e)}>
        <div className="flex gap-6 font-bold ">

          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={patient.name}
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="md:flex gap-6 font-bold ">
          <div className="form-control md:w-1/2 w-full  ">
            <label className="label">
              <span className="label-text">email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={patient.email}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control md:w-1/2 w-full">
            <label className="label">
              <span className="label-text">APPt.Date</span>
            </label>
            <input
              type="datetime-local"
              name="Date_Time"
              placeholder="Date & Time"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex gap-6 font-bold ">
          <div className="form-control md:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Purpose</span>
            </label>
            <input
              type="text"
              name="Purpose"
              placeholder="Purpose"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control md:w-1/2 w-full">
            <label className="mt-2" htmlFor="category">
              Type
            </label>
            <select
              className="h-12 mt-2 input input-bordered"
              name="Type"
              id="Type"
              required
            >
              <option value="Type">Type</option>
              <option value="New Patient">New Patient</option>
              <option value="Old patient">Old Patient</option>
            </select>
          </div>
        </div>

        <div className="flex gap-6 font-bold ">
          <div className="form-control md:w-1/2 w-full">
            <label className="label">
              <span className="label-text">Prescription</span>
            </label>
            <textarea
              type="text"
              cols="30"
              rows="10"
              name="Prescription"
              placeholder=" write prescription..."
              className="rounded-xl"
              required
            />
          </div>
        </div>

        <input
          type="submit"
          value="ADD A Prescription "
          className=" my-9 btn btn-block bg-emerald-500 hover:bg-emerald-700 text-white font-serif font-bold "
        />
      </form>
    </div>
  );
};

export default Form;
