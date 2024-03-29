import { axiosInstance } from "./agent"
import { authSlice } from '../slice';

const getToken = () => {
  const state = authSlice.getState();
  const token = state.auth.token;
  return token;
};

export const data={
    getAll:async(url)=>{
      
      // const token = getToken();
      // const headers = { Authorization: "Bearer " + token };

        let responsData=[]

        await axiosInstance.get(url,
          // { headers }
     
        )
        .then(res=>{
          
            responsData=res.data
        })
        .catch(err=>{
            console.log('err',err)
            // if (err.response.status == 401) window.location.href = "/";

        })

        return responsData
    },
    getById:async (url,id)=>{
      let tokens = localStorage.getItem("tokens");
        let response={}
        await axiosInstance.get(`/${url}/${id}/` 
        //  ,{
        //   headers: {
        //     Authorization: "Bearer " + tokens,
        //   },
        // }
        )
        .then(res=>{
            response=res.data
        })
      //  if(response==null){
      //   throw "404 Data not found"
      //  }

       return response
    },
    getByPost: async (url, data) => {
   
      
        let response = {};
       
        await axiosInstance.post(`/${url}`, data).then((res) => {
          response = res.data;
        });
        return response;
      },
      getByPost1: async (url, data) => {
   
      
        let response = {};
       
        await axiosInstance.post(url, data).then((res) => {
          response = res.data;
        });
        return response;
      },
  getByDelete: async (url, id) => {
        let response = {};
    
        await axiosInstance.delete(`${url}/${id}`).then((res) => {
          response = res.data;
        });
    
        return response;
      },
 getByPut:async(url,data)=>{
        let response = {};
        await axiosInstance.put(url,data)
        .then(res=>{
          response=res.data
        })
        return response
      }
    
}