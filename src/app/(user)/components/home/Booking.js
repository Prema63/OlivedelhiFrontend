// import { useState, useRef, useEffect } from "react";

// const Booking = () => {
//   const [selectedHotel, setSelectedHotel] = useState("Select your Preferred Hotel");
//   const [arrivalDate, setArrivalDate] = useState("");
//   const [checkoutDate, setCheckoutDate] = useState("");
//   const [nightsDifference, setNightsDifference] = useState(1);

//   const checkoutRef = useRef(null);
//   const arrivalRef = useRef(null);

//   const hotelOptions = [
//     "Select your Preferred Hotel",
//     "Olive Apartments Greater Kailash",
//     "Olive Apartments Green Park",
//     "Olive Apartments Safdarjung Enclave",
//     "Olive Apartments Defence Colony",
//     "Olive Apartments Saket",
//     "Olive Apartments Central Delhi",
//     "Olive Apartments New Friends Colony",
//     "Olive Apartments Rohini"
//   ];

//   const getTodayDate = () => {
//     const today = new Date();
//     return today.toISOString().split("T")[0];
//   };

//   const getTomorrowDate = () => {
//     const tomorrow = new Date();
//     tomorrow.setDate(tomorrow.getDate() + 1);
//     return tomorrow.toISOString().split("T")[0];
//   };

//   useEffect(() => {
//     setArrivalDate("2025-06-19");
//     setCheckoutDate("2025-06-20");
//     setNightsDifference(1);
//   }, []);

//   const handleHotelChange = (e) => {
//     setSelectedHotel(e.target.value);
//   };

//   const handleCheckInChange = (e) => {
//     const newArrivalDate = e.target.value;
//     if (newArrivalDate >= getTodayDate()) {
//       setArrivalDate(newArrivalDate);
//       const nextDay = new Date(newArrivalDate);
//       nextDay.setDate(nextDay.getDate() + 1);
//       const nextDayString = nextDay.toISOString().split("T")[0];
//       setCheckoutDate(nextDayString);
//       calculateNights(newArrivalDate, nextDayString);
//     }
//   };

//   const handleCheckoutChange = (e) => {
//     const newCheckoutDate = e.target.value;
//     if (newCheckoutDate > arrivalDate) {
//       setCheckoutDate(newCheckoutDate);
//       calculateNights(arrivalDate, newCheckoutDate);
//     }
//   };

//   const calculateNights = (arrival, checkout) => {
//     if (arrival && checkout) {
//       const nightDifference = (new Date(checkout) - new Date(arrival)) / (1000 * 3600 * 24);
//       setNightsDifference(nightDifference >= 1 ? nightDifference : 1);
//     } else {
//       setNightsDifference(1);
//     }
//   };

//   const openDatePicker = (ref) => {
//     ref.current?.showPicker();
//   };

//   const formatDateForDisplay = (dateString) => {
//     if (!dateString) return "";
//     const date = new Date(dateString);
//     return date.toLocaleDateString('en-GB');
//   };

//   return (
//     <div className="flex justify-center items-center pb-3 ">
//       <div className="flex flex-wrap md:flex-row items-center gap-3  bg-[#3f3f3f] p-4 rounded border border-gray-300 w-[82vw]">

//         {/* Property Dropdown */}
//         <div className="flex flex-col">
//           <label className="text-white text-sm font-semibold mb-1">Property</label>
//           <select
//             value={selectedHotel}
//             onChange={handleHotelChange}
//             className="px-3 py-2 text-sm border border-gray-300 rounded bg-white min-w-[200px] focus:outline-none focus:ring-2 focus:ring-[#719430]"
//           >
//             {hotelOptions.map((hotel, index) => (
//               <option 
//                 key={index} 
//                 value={hotel}
//                 className={index === 0 ? "text-[#719430] font-semibold" : "text-black"}
//                 disabled={index === 0}
//               >
//                 {hotel}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Check In */}
//         <div className="flex flex-col">
//           <label className="text-white text-sm font-semibold mb-1">Check In</label>
//           <div className="relative">
//             <input
//               type="date"
//               ref={arrivalRef}
//               value={arrivalDate}
//               min={getTodayDate()}
//               onChange={handleCheckInChange}
//               onClick={() => openDatePicker(arrivalRef)}
//               className="px-3 py-2 text-sm border border-gray-300 rounded bg-white min-w-[120px] focus:outline-none focus:ring-2 focus:ring-[#719430]"
//             />
//           </div>
//         </div>

//         {/* Check Out */}
//         <div className="flex flex-col">
//           <label className="text-white text-sm font-semibold mb-1">Check Out</label>
//           <div className="relative">
//             <input
//               type="date"
//               ref={checkoutRef}
//               value={checkoutDate}
//               min={arrivalDate ? arrivalDate : getTomorrowDate()}
//               onChange={handleCheckoutChange}
//               onClick={() => openDatePicker(checkoutRef)}
//               className="px-3 py-2 text-sm border border-gray-300 rounded bg-white min-w-[120px] focus:outline-none focus:ring-2 focus:ring-[#719430]"
//             />
//           </div>
//         </div>

//         {/* Book Now Button */}
//         <div className="flex items-end">
//           <button
//             onClick={() => window.open("https://live.ipms247.com/booking/book-rooms-BluoKolkata", "_blank")}
//             className="bg-[#719430] hover:bg-green-700 text-white font-bold text-sm px-6 py-2 rounded transition-colors duration-200 mt-6"
//           >
//             BOOK NOW
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Booking;









import { useState, useRef, useEffect } from "react";

const Booking = () => {
  const [selectedHotel, setSelectedHotel] = useState("Select your Preferred Hotel");
  const [arrivalDate, setArrivalDate] = useState("");
  const [checkoutDate, setCheckoutDate] = useState("");
  const [nightsDifference, setNightsDifference] = useState(1);

  const checkoutRef = useRef(null);
  const arrivalRef = useRef(null);

  const hotelOptions = [
    "Select your Preferred Hotel",
    "Olive Apartments Greater Kailash",
    "Olive Apartments Green Park",
    "Olive Apartments Safdarjung Enclave",
    "Olive Apartments Defence Colony",
    "Olive Apartments Saket",
    "Olive Apartments Central Delhi",
    "Olive Apartments New Friends Colony",
    "Olive Apartments Rohini"
  ];

  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split("T")[0];
  };

  useEffect(() => {
    setArrivalDate("2025-06-19");
    setCheckoutDate("2025-06-20");
    setNightsDifference(1);
  }, []);

  const handleHotelChange = (e) => {
    setSelectedHotel(e.target.value);
  };

  const handleCheckInChange = (e) => {
    const newArrivalDate = e.target.value;
    if (newArrivalDate >= getTodayDate()) {
      setArrivalDate(newArrivalDate);
      const nextDay = new Date(newArrivalDate);
      nextDay.setDate(nextDay.getDate() + 1);
      const nextDayString = nextDay.toISOString().split("T")[0];
      setCheckoutDate(nextDayString);
      calculateNights(newArrivalDate, nextDayString);
    }
  };

  const handleCheckoutChange = (e) => {
    const newCheckoutDate = e.target.value;
    if (newCheckoutDate > arrivalDate) {
      setCheckoutDate(newCheckoutDate);
      calculateNights(arrivalDate, newCheckoutDate);
    }
  };

  const calculateNights = (arrival, checkout) => {
    if (arrival && checkout) {
      const nightDifference = (new Date(checkout) - new Date(arrival)) / (1000 * 3600 * 24);
      setNightsDifference(nightDifference >= 1 ? nightDifference : 1);
    } else {
      setNightsDifference(1);
    }
  };

  const openDatePicker = (ref) => {
    ref.current?.showPicker();
  };

  const formatDateForDisplay = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB');
  };

  return (
    <>
      <style>{`
        /* Custom styles for date picker calendar */
        input[type="date"]::-webkit-calendar-picker-indicator {
          color: #719430;
        }
        
        input[type="date"]::-webkit-datetime-edit-fields-wrapper {
          color: #000;
        }
        
        /* Style for select dropdown hover */
        select option:hover {
          background-color: #719430 !important;
          color: white !important;
        }
        
        /* Date input focus accent color */
        input[type="date"]:focus {
          accent-color: #719430;
        }
        
        /* Calendar popup styling */
        input[type="date"]::-webkit-calendar-picker-indicator:hover {
          background-color: rgba(113, 148, 48, 0.1);
          border-radius: 2px;
        }
      `}</style>
      
      <div className="flex justify-center items-center pb-3 ">
        <div className="flex flex-wrap md:flex-row items-center gap-3  bg-[#3f3f3f] p-4 rounded border border-gray-300 w-[82vw]">

          {/* Property Dropdown */}
          <div className="flex flex-col flex-1 min-w-[200px]">
            <label className="text-white text-sm font-semibold mb-1">Property</label>
            <select
              value={selectedHotel}
              onChange={handleHotelChange}
              className="px-3 py-2 text-sm border border-gray-300 rounded bg-white w-full focus:outline-none focus:ring-2 focus:ring-[#719430]"
            >
              {hotelOptions.map((hotel, index) => (
                <option 
                  key={index} 
                  value={hotel}
                  className={index === 0 ? "text-[#719430] font-semibold" : "text-black"}
                  disabled={index === 0}
                >
                  {hotel}
                </option>
              ))}
            </select>
          </div>

          {/* Check In */}
          <div className="flex flex-col flex-1 min-w-[150px]">
            <label className="text-white text-sm font-semibold mb-1">Check In</label>
            <div className="relative">
              <input
                type="date"
                ref={arrivalRef}
                value={arrivalDate}
                min={getTodayDate()}
                onChange={handleCheckInChange}
                onClick={() => openDatePicker(arrivalRef)}
                className="px-3 py-2 text-sm border border-gray-300 rounded bg-white w-full focus:outline-none focus:ring-2 focus:ring-[#719430]"
              />
            </div>
          </div>

          {/* Check Out */}
          <div className="flex flex-col flex-1 min-w-[150px]">
            <label className="text-white text-sm font-semibold mb-1">Check Out</label>
            <div className="relative">
              <input
                type="date"
                ref={checkoutRef}
                value={checkoutDate}
                min={arrivalDate ? arrivalDate : getTomorrowDate()}
                onChange={handleCheckoutChange}
                onClick={() => openDatePicker(checkoutRef)}
                className="px-3 py-2 text-sm border border-gray-300 rounded bg-white w-full focus:outline-none focus:ring-2 focus:ring-[#719430]"
              />
            </div>
          </div>

          {/* Book Now Button */}
          <div className="flex items-end flex-1 min-w-[120px]">
            <button
              onClick={() => window.open("https://live.ipms247.com/booking/book-rooms-BluoKolkata", "_blank")}
              className="bg-[#719430] hover:bg-green-700 text-white font-bold text-sm px-6 py-2 rounded transition-colors duration-200 mt-6 w-full"
            >
              BOOK NOW
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;