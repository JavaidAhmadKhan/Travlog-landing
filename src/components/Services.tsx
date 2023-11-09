import Card from "./Card";

const Services = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 px-4 lg:px-24 pt-12 pb-12">
      <div>
        <h2 className="text-[23px]  font-bold leading-tight  text-[#F85E9F] uppercase">
          Services
        </h2>
        <p className="text-[#191825] text-[24px] lg:text-[24px] font-bold mt-4">
          Our top value <br /> categories for you
        </p>
      </div>
      <Card />
    </div>
  );
};

export default Services;
