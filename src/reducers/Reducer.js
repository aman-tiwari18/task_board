// import { createReducer } from "@reduxjs/toolkit";
// const initialState = {
//   tasks: [],
// };

// export const taskReducer = createReducer(initialState, (builder) => {
//   builder

//     .addCase("ADD_TASK", (state) => {
//       state.loading = false;
//       state.user = null;
//       state.isAuthenticated = false;
//     })
//     .addCase("EDIT_TASK", (state) => {
//       state.loading = true;
//     })
//     .addCase("DELETE_TASK", (state, action) => {
//       state.loading = true;
//       state.user = action.payload;
//       state.isAuthenticated = true;
//     })

//     .addDefaultCase((state) => state);
// });

// // const taskReducer = (state = initialState, action) => {
// //   switch (action.type) {
// //     case "ADD_TASK":
// //       return {
// //         ...state,
// //         tasks: [...state.tasks, action.payload],
// //       };
// //     case "UPDATE_TASK":
// //       return {
// //         ...state,
// //         tasks: state.tasks.map((task) =>
// //           task.id === action.payload.id ? action.payload : task
// //         ),
// //       };
// //     default:
// //       return state;
// //   }
// // };

// // export default taskReducer;
