const Form = ({ patient }) => {
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
        console.log(data);
      });
  };

  return (
    <div>
      <form onSubmit={(e) => handlePrescription(e)}>
        <div className="flex gap-6 font-bold ">
          {/* <div className="form-control w-1/2">
                        <label className="label">
                            <span className="label-text">Photo Url</span>
                        </label>
                        <input type="url" name='photo' placeholder="photo url" className="input input-bordered" />
                    </div> */}
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={patient.petainName}
              placeholder="name"
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex gap-6 font-bold ">
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={patient.petainEmail}
              placeholder="email"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text">APPt.Date</span>
            </label>
            <input
              type="datetime-local"
              name="Date_Time"
              placeholder="Date & Time"
              // defaultValue={}
              className="input input-bordered"
              required
            />
          </div>
        </div>
        <div className="flex gap-6 font-bold ">
          <div className="form-control w-1/2">
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
          <div className="form-control w-1/2">
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
          <div className="form-control w-full">
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
