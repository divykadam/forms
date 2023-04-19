const initialState = {
  empData: [
    {
      id: "1",
      name: "Ram",
      email: "ram@gmail.com",
      mobno: "999999999",
      address: "Indore",
    },
    {
      id: "2",
      name: "Sita",
      email: "sita@gmail.com",
      mobno: "99999999",
      address: "Indore",
    },
  ],
};
const Reducer = (state = initialState, action) => {
  const stateData = state.empData;
  switch (action.type) {
    case "addData":
      return { empData: [...state.empData, action.payload] };

    case "editData":
      const newState = stateData.map((data) => {
        return data.id === action.payload.id ? action.payload : data;
      });
      return { ...state, empData: newState };

    case "removeData":
      return {
        ...state,
        empData: stateData.filter((post) => post.id !== action.payload),
      };

    default:
      return state;
  }
};
export default Reducer;
