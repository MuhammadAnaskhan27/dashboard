import Image from "next/image";
import TrackingImg from "../../assets/tracking.PNG";
const TimeTracking = () => {
  return (
    <>
      <div style={{ backgroundColor: "#F6FAFF" }} className="mt-12">
        <h1
          style={{ color: "#293763" }}
          className="text-center text-4xl font-bold pt-12"
        >
          Time Tracking With Screenshots
        </h1>
        <h1
          style={{ color: "#507DBB" }}
          className="text-center text-xl font-bold"
        >
          Clear visibility and insights into how employees work. Even remotely
        </h1>

        <div className="flex gap-16 ml-12 mr-12 mt-20 pb-20">
          <div>
            <Image width={3500} src={TrackingImg} />
          </div>
          <div>
            <p style={{ color: "#2969AE" }} className="mt-20 text-xl">
              Our computer monitoring software allows employees, <br /> field
              contractors, and freelancers to manually clock in when they begin
              working on an assignment. The application will take screenshots
              randomly or at set intervals, which allows employers to observe
              the work process. The application only tracks activity when the
              employee is clocked in. No spying, only transparency.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TimeTracking;
