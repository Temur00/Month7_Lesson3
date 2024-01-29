// import * as React from "react";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// // import ListSubheader from "@mui/material/ListSubheader";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// // import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// // import LayersIcon from "@mui/icons-material/Layers";
// // import AssignmentIcon from "@mui/icons-material/Assignment";
// import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
// import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
// import LogoutIcon from "@mui/icons-material/Logout";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";

// const handleDelete = (id) => {
//   if (confirm("Are you sure you want to delete this product? ❌")) {
//     axios
//       .delete(`http://localhost:3000/students/${id}`)
//       .then((res) => {
//         console.log("Product deleted successfully ✅", res.data);
//         fetchStudents();
//       })
//       .catch((error) => {
//         console.log("The product was not deleted ❌");
//       });
//   }
// };

// export const mainListItems = (
//   <React.Fragment>
//     <ListItemButton>
//       <ListItemIcon>
//         <DashboardIcon />
//       </ListItemIcon>
//       <ListItemText primary="Main" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <PeopleAltRoundedIcon />
//       </ListItemIcon>
//       <ListItemText primary="Teachers" />
//     </ListItemButton>

//     <ListItemButton>
//       <ListItemIcon>
//         <GroupRoundedIcon />
//       </ListItemIcon>
//       <ListItemText primary="Students" />
//     </ListItemButton>

//     <ListItemButton>
//       <ListItemIcon>
//         <AccountCircleIcon />
//       </ListItemIcon>
//       <ListItemText primary="Profile" />
//     </ListItemButton>
//   </React.Fragment>
// );

// export const secondaryListItems = (
//   <React.Fragment>
//     {/* <ListSubheader component="div" inset>
//       Saved reports
//     </ListSubheader> */}
//     <ListItemButton
//       style={{ marginTop: "365px" }}
//       onClick={() => handleDelete(student.id)}
//     >
//       <ListItemIcon>
//         <LogoutIcon />
//       </ListItemIcon>
//       <ListItemText primary="Logout" onClick={() => handleDelete(student.id)} />
//     </ListItemButton>
//   </React.Fragment>
// );

// import * as React from "react";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import DashboardIcon from "@mui/icons-material/Dashboard";
// import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
// import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
// import LogoutIcon from "@mui/icons-material/Logout";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import axios from "axios"; // Import axios for making HTTP requests

// const handleDelete = (id) => {
//   if (confirm("Are you sure you want to log out?")) {
//     // Make an HTTP DELETE request to the logout endpoint with the provided ID
//     axios
//       .delete(`http://localhost:3000/logout/${id}`)
//       .then((res) => {
//         console.log("Logout successful ✅", res.data);
//         // Perform any necessary actions after successful logout
//       })
//       .catch((error) => {
//         console.error("Logout failed ❌", error);
//         // Handle errors if logout fails
//       });
//   }
// };

// export const mainListItems = (
//   <React.Fragment>
//     <ListItemButton>
//       <ListItemIcon>
//         <DashboardIcon />
//       </ListItemIcon>
//       <ListItemText primary="Main" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <PeopleAltRoundedIcon />
//       </ListItemIcon>
//       <ListItemText primary="Teachers" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <GroupRoundedIcon />
//       </ListItemIcon>
//       <ListItemText primary="Students" />
//     </ListItemButton>
//     <ListItemButton>
//       <ListItemIcon>
//         <AccountCircleIcon />
//       </ListItemIcon>
//       <ListItemText primary="Profile" />
//     </ListItemButton>
//   </React.Fragment>
// );

// export const secondaryListItems = (
//   <React.Fragment>
//     <ListItemButton onClick={() => handleDelete(userId)}>
//       {/* Replace 'userId' with the actual ID of the user */}
//       <ListItemIcon>
//         <LogoutIcon />
//       </ListItemIcon>
//       <ListItemText primary="Logout" />
//     </ListItemButton>
//   </React.Fragment>
// );

import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios"; // Import axios for making HTTP requests

// Function to handle deletion
const handleDelete = () => {
  if (window.confirm("Are you sure you want to log out?")) {
    // If confirmed, perform logout
    console.log("Performing logout...");
    // You can perform any additional logout actions here
  } else {
    // If not confirmed, do nothing
    console.log("Logout cancelled.");
  }
};

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Main" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <PeopleAltRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Teachers" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <GroupRoundedIcon />
      </ListItemIcon>
      <ListItemText primary="Students" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AccountCircleIcon />
      </ListItemIcon>
      <ListItemText primary="Profile" />
    </ListItemButton>
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListItemButton onClick={handleDelete}>
      <ListItemIcon>
        <LogoutIcon />
      </ListItemIcon>
      <ListItemText primary="Logout" />
    </ListItemButton>
  </React.Fragment>
);
