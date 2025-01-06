import Image from "next/image";

const Components = ({ title, description, img }) => {
  return (
    <>
      <div
        style={{ backgroundColor: "#F6FAFF" }}
        className="bg-purple-500 h-102 w-64 ml-12 p-4 pt-8 rounded-2xl  "
      >
        <Image src={img} />
        <h1 className="text-3xl font-bold pt-4" style={{ color: "#293763" }}>
          {title}
        </h1>
        <p className="pt-2 pb-10 text-lg">{description}</p>
      </div>
    </>
  );
};

export default Components;
