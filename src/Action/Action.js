export const AddData = (data) => {
  console.log("actondata", data);
  return {
    type: "addData",
    payload: data,
  };
};

export const EditData = (data) => {
  return {
    type: "editData",
    payload: data,
  };
};

export const RemoveData = (data) => {
  return {
    type: "removeData",
    payload: data,
  };
};
