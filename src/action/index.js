const addData = "addData";
const editData = "editData";
const removeData = "removeData";

export const add_data = (data) => {
  return {
    type: addData,
    payload: data,
  };
};

export const edit_data = (data) => {
  return {
    type: editData,
    payload: data,
  };
};

export const remove_data = (data) => {
  return {
    type: removeData,
    payload: data,
  };
};
