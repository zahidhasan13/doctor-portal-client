import qoute from "../../../assets/icons/quote.svg";
import people1 from "../../../assets/images/people1.png";
import people2 from "../../../assets/images/people2.png";
import people3 from "../../../assets/images/people3.png";
const Testmonial = () => {
  return (
    <div className="max-w-screen-xl mx-auto my-16">
      <div className="flex justify-between mx-4 lg:mx-0">
        <div>
          <h4 className="text-md font-bold uppercase text-[#12D0DC]">
            appointment
          </h4>
          <h3 className="text-3xl">What Our Patients Says</h3>
        </div>
        <div>
          <img src={qoute} alt="" className="w-[200px]" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-6 my-16 mx-4">
        <div className="p-8 shadow-md rounded-lg">
          <p>
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className="flex items-center mt-8">
            <img src={people1} alt="" className="w-[75px] border-2 border-[#19D3AE] rounded-full p-1 mr-4"/>
            <div>
              <h3 className="text-xl font-semibold">Winson Herry</h3>
              <p>California</p>
            </div>
          </div>
        </div>
        <div className="p-8 shadow-md rounded-lg my-16 lg:my-0">
          <p>
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className="flex items-center mt-8">
            <img src={people2} alt="" className="w-[75px] border-2 border-[#19D3AE] rounded-full p-1 mr-4"/>
            <div>
              <h3 className="text-xl font-semibold">Raveena</h3>
              <p>London, UK</p>
            </div>
          </div>
        </div>
        <div className="p-8 shadow-md rounded-lg">
          <p>
            It is a long established fact that by the readable content of a lot
            layout. The point of using Lorem a more-or-less normal distribu to
            using Content here, content
          </p>
          <div className="flex items-center mt-8">
            <img src={people3} alt="" className="w-[75px] border-2 border-[#19D3AE] rounded-full p-1 mr-4"/>
            <div>
              <h3 className="text-xl font-semibold">Alice Joseph</h3>
              <p>New York</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testmonial;
