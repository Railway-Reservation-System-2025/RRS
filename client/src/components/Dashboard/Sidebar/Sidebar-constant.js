import {
    MdOutlineLibraryBooks,
    MdOutlineDashboard,
    MdOutlineListAlt,
    MdOutlineHome
  } from "react-icons/md";
  
  export const sidebarConstant = [
    {
      path:"/",
      name:"Home",
      icon: MdOutlineHome
    },
    {
      path:"/booktickets",
      name:"Book Tickets",
      icon: MdOutlineDashboard
    },
    {
      path:"/pnr",
      name:"Check PNR No.",
      icon: MdOutlineListAlt
    },
    {
      path:"/prevbooking",
      name:"Previous Booking",
      icon: MdOutlineLibraryBooks
    },
   
    // {
    //   path:"/cryptowallet",
    //   name:"Crypto Wallet",
    //   icon: MdOutlineWallet
    // },
  ];