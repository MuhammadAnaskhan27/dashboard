import Image from "next/image";
import Capterra from "../../assets/capterra.webp";
import SoftwareAdvice from "../../assets/sadvice.webp";
import Crozdesk from "../../assets/crozdesk.webp";
import GetApp from "../../assets/getapp.webp";
import Ratings from "../../assets/rate.png";
const Users = () => {
  return (
    <>
      <div className="mb-20" style={{ backgroundColor: "#FFF" }}>
        <h1
          className="text-center text-4xl font-bold"
          style={{ color: "#293763" }}
        >
          Trusted by thousands of users
        </h1>

        <div className="flex mt-12 justify-around ml-40 mr-40 ">
          <div>
            <Image width={150} src={Capterra} />
            <Image className="ml-6" src={Ratings} />
          </div>

          <div className="mt-1">
            <Image width={150} src={SoftwareAdvice} />
            <Image className="ml-4" src={Ratings} />
          </div>

          <div>
            <Image width={150} src={Crozdesk} />
            <Image className="ml-4" src={Ratings} />
          </div>

          <div>
            <Image width={150} src={GetApp} />
            <Image className="ml-4" src={Ratings} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Users;
