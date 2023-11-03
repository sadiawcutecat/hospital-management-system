const DoctorsData = () => {
  const res = fetch("doctors.json", {
    cache: "force-cache",
  });
  return res.json();
};

export default DoctorsData;
