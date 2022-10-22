const axios = require("axios").default;

export const register = async (form) => {
  return await axios({
    method: "post",
    url: "/register",
    data: form,
    headers: { "Content-Type": "application/json" },
  });
};

export const login = async (form) => {
  return await axios({
    method: "post",
    url: "/login",
    data: form,
    headers: { "Content-Type": "application/json" },
  });
};

export const update = async (form) => {
  return await axios({
    method: "post",
    url: "/update",
    data: form,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getProfile = async (id) => {
  return await axios({
    method: "get",
    url: `/profile/${id}`,
    // data: form,
    // headers: { "Content-Type": "application/json" },
  });
};

export const post = async (form) => {
  return await axios({
    method: "post",
    url: "/postArt",
    data: form,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

export const getPost = async () => {
  return await axios({
    method: "get",
    url: "/getPosts",
  });
}

export const deletePost = async (form) => {
  return await axios({
    method: "delete",
    url:"/deletePost",
    data: form,
    headers: { "Content-Type": "application/json" },
  })
}

export const getAPost = async (id) => {
  return await axios({
    method:"get",
    url: `/getAPost/${id}`,
  })
}

export const updatePost = async (form) => {
  return await axios({
    method: "put",
    url: "/updatePost",
    data: form,
    headers: { "Content-Type": "multipart/form-data" },
  });
};

// export const addtocart = async (form) => {
//   return await axios({
//     method: "post",
//     url: "/addtocart",
//     data: form,
//     headers: { "Content-Type": "application/json" },
//   });
// };