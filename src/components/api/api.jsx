import axios from "axios";

export const LoginApi = (data) => {
  const headers = {
    "Content-Type": "application/json",
  };
  axios
    .post("https://public.cuebackqa.com/api/alumni/login", data, {
      headers: headers,
    })
    .then((res) => {
      localStorage.setItem("token", res.data.Response.UserAuthToken);
    });
};

export const RecentPublishedApi = (data) => {
  const headers = {
    "Content-Type": "application/json",
    "X-CSRF-TOKEN": localStorage.getItem("token"),
  };
  axios
    .post("https://public.cuebackqa.com/api/timeline/list", data, {
      headers: headers,
    })
    .then((res) => {
      console.log("data", res.data.Details.data);
      return res.data.Details.data;
    })
    .catch((err) => {
      console.log(err);
    });
};


   
  
  
    
