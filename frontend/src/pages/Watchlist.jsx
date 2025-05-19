// import React from "react";
// import { Eye, Trash2 } from "lucide-react";

// const watchlistItems = [
//   {
//     id: 1,
//     name: "Vacation Budget",
//     type: "Goal",
//     value: "₹15,000",
//   },
//   {
//     id: 2,
//     name: "New Laptop",
//     type: "Wishlist",
//     value: "₹80,000",
//   },
//   {
//     id: 3,
//     name: "Stock: TCS",
//     type: "Investment",
//     value: "₹3,200",
//   },
// ];

// const Watchlist = () => {
//   return (
//     <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
//       <div className="p-4 border-b text-violet-900 font-semibold flex items-center gap-2">
//         <Eye className="w-5 h-5" />
//         Watchlist
//       </div>
//       <div className="p-4">
//         {watchlistItems.length === 0 ? (
//           <p className="text-gray-500 text-sm">No items in your watchlist.</p>
//         ) : (
//           <ul className="space-y-3">
//             {watchlistItems.map((item) => (
//               <li
//                 key={item.id}
//                 className="flex justify-between items-center bg-violet-50 p-3 rounded-md border border-violet-100"
//               >
//                 <div>
//                   <p className="text-sm font-medium text-violet-900">{item.name}</p>
//                   <p className="text-xs text-gray-600">{item.type}</p>
//                 </div>
//                 <div className="flex items-center gap-4">
//                   <span className="text-sm font-semibold text-violet-700">{item.value}</span>
//                   <button className="text-red-500 hover:text-red-600">
//                     <Trash2 className="w-4 h-4" />
//                   </button>
//                 </div>
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Watchlist;



import React from "react";
import { Eye, Trash2, Target, Briefcase, Heart } from "lucide-react";

const watchlistItems = [
  {
    id: 1,
    name: "Vacation Budget",
    type: "Goal",
    value: "₹15,000",
    status: "In Progress",
    progress: 65,
  },
  {
    id: 2,
    name: "New Laptop",
    type: "Wishlist",
    value: "₹80,000",
    status: "Pending",
  },
  {
    id: 3,
    name: "Stock: TCS",
    type: "Investment",
    value: "₹3,200",
    status: "Watching",
  },
];

// Type Icon Resolver
const getTypeIcon = (type) => {
  switch (type) {
    case "Goal":
      return <Target className="w-4 h-4 text-violet-700" />;
    case "Investment":
      return <Briefcase className="w-4 h-4 text-violet-700" />;
    case "Wishlist":
      return <Heart className="w-4 h-4 text-violet-700" />;
    default:
      return null;
  }
};

// Status Color Resolver
const getStatusColor = (status) => {
  switch (status) {
    case "Pending":
      return "bg-yellow-100 text-yellow-800";
    case "In Progress":
      return "bg-blue-100 text-blue-800";
    case "Completed":
      return "bg-green-100 text-green-800";
    case "Watching":
      return "bg-gray-100 text-gray-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const Watchlist = () => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Header */}
      <div className="p-4 border-b text-violet-900 font-semibold flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Eye className="w-5 h-5" />
          Watchlist
        </div>
        <button className="text-sm px-3 py-1 bg-violet-900 text-white rounded-md hover:bg-violet-800">
          + Add New
        </button>
      </div>

      {/* Content */}
      <div className="p-4">
        {watchlistItems.length === 0 ? (
          <p className="text-gray-500 text-sm">No items in your watchlist.</p>
        ) : (
          <ul className="space-y-4">
            {watchlistItems.map((item) => (
              <li
                key={item.id}
                className="flex flex-col md:flex-row justify-between md:items-center bg-violet-50 p-4 rounded-md border border-violet-100"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">{getTypeIcon(item.type)}</div>
                  <div>
                    <p className="text-sm font-medium text-violet-900">{item.name}</p>
                    <p className="text-xs text-gray-600">{item.type}</p>
                    {item.progress && (
                      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
                        <div
                          className="bg-violet-700 h-2 rounded-full"
                          style={{ width: `${item.progress}%` }}
                        ></div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex flex-col items-end justify-between mt-3 md:mt-0 gap-1">
                  <span className="text-sm font-semibold text-violet-700">{item.value}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(item.status)}`}
                  >
                    {item.status}
                  </span>
                  <button className="text-red-500 hover:text-red-600">
                    <Trash2 className="w-4 h-4 mt-1" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Watchlist;
