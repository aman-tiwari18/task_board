import React from "react";
import Avatar from "@mui/material/Avatar";

const Navbar = () => {
  return (
    <div className="flex justify-between w-full text-2xl font-bold py-8 px-28">
      <div>Task Board</div>
      <Avatar
        alt="Remy Sharp"
        src="/static/images/avatar/1.jpg"
        sx={{ width: 56, height: 56 }}
      />
    </div>
  );
};

export default Navbar;
