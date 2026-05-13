import { createSlice , createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import { api } from "./api";


export const depositNotRecieved = createAsyncThunk(
  "auth/depositNotRecieved",
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post(`${api}deposit`, formData, {
        withCredentials: true,
     });
      return response.data;
    } catch (error) {
   
      return rejectWithValue(error.response?.data )
    }
  }
);

//export const api =  "http://localhost:4000/api/"
export const ifscModification   =  createAsyncThunk('ifscModification' , async(formData , {rejectWithValue})=>{
    try
    {   
        const response = await axios.post(`${api}ifsc`, formData , {withCredentials:true});
        return response.data;

    }
    catch(error){
        return rejectWithValue(error.response?.data || "Something went wrong");
    }

})

export const  changeBankName    =  createAsyncThunk('changeBankName' , async(formData , {rejectWithValue})=>{
    try
    {   
        const response = await axios.post(`${api}bankName`, formData , {withCredentials:true});
        return response.data;

    }
    catch(error){
        return rejectWithValue(error.response?.data || "Something went wrong");
    }



})

export const updatePassword  =   createAsyncThunk('updatePassword',async(formData,{rejectWithValue})=>{
     try
     {  
        const response = await axios.post(`${api}updatepassword`, formData , {withCredentials:true});
          return response.data;

     }
     catch(error)
     {
        return rejectWithValue(error.response?.data || "Something went wrong");
     }
})


export const  modifyBankInfo    =  createAsyncThunk('modifyBankInfo' , async(formData , {rejectWithValue})=>{
    try
    {   
        const response = await axios.post(`${api}modification`, formData , {withCredentials:true});
        return response.data;

    }
    catch(error){
        return rejectWithValue(error.response?.data || "Something went wrong");
    }



})

export const  usdtAddress    =  createAsyncThunk('usdtAddress' , async(formData , {rejectWithValue})=>{
    try
    {   
        const response = await axios.post(`${api}usdt`, formData , {withCredentials:true});
        return response.data;

    }
    catch(error){
        return rejectWithValue(error.response?.data || "Something went wrong");
    }



})

//activity bonus
export const  activityBonus    =  createAsyncThunk('activityBonus' , async(formData , {rejectWithValue})=>{
    try
    {   
        const response = await axios.post(`${api}bonus`, formData , {withCredentials:true});
        return response.data;

    }
    catch(error){
        return rejectWithValue(error.response?.data || "Something went wrong");
    }
})

export const otpSend  = createAsyncThunk('otpSend' , async(phone,{rejectWithValue})=>{
    try
    {  
      console.log(phone , "it is present in user Slice")  
      const response = await axios.post(`${api}sendotp`,{phone}, {withCredentials:true});
      return response.data;

    }
    catch(error){
      return rejectWithValue(error.response?.data || "Something went wrong");
    }

})


//gameProblem

export const  gameProblem   =  createAsyncThunk('gameProblem' , async(formData , {rejectWithValue})=>{
    try
    {   
        const response = await axios.post(`${api}problem`, formData , {withCredentials:true});
        return response.data;

    }
    catch(error){
        return rejectWithValue(error.response?.data || "Something went wrong");
    }

})


export const  withdrawlproblem   =  createAsyncThunk('withdrawlproblem' , async(formData , {rejectWithValue})=>{
  try
  {   
      const response = await axios.post(`${api}withdrawlproblem`,formData,{withCredentials:true});
      return response.data;

  }
  catch(error){
      return rejectWithValue(error.response?.data || "Something went wrong");
  }

})
//recharge

export const getRecharge = createAsyncThunk("getRecharge",async (auth, { rejectWithValue }) => {
    try {
      // if (!auth) throw new Error("No auth token found");

  

      const response = await axios.get(`${api}recharge/${auth}`, {
        withCredentials: true,
      });

      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data || "Something went wrong");
    }
  }
);



export const getwithdrawl = createAsyncThunk("getwithdrawl",async (auth, { rejectWithValue }) => {
  try {
  
    const response = await axios.get(`${api}withdrawl2/${auth}`, {
      withCredentials: true,
    });

    return response.data;
  } catch (error) {
    return rejectWithValue(error.response?.data || "Something went wrong");
  }
}
);












const slice  = createSlice({

      name:"slice",
      initialState:{
        deposit : null ,
        ifscModi:null ,
        bankName : null ,
        modifyBank:null ,
        usdtAddress:null ,
        bonus:null ,
        problem:null ,
        loading:false  ,
        error:null ,
        otp : null ,
        password:null,
        withdrawlProblem:null,
        recharge:null, 
        withdrawl:null
        

      },
      reducers:{
        addUser : (state , action) =>{
              
        },
        removeUser : (state ,  action) =>{

        },
        clearError: (state) => {
           state.error = null;
         },

      },

      extraReducers:(builder)=>{
          builder


          .addCase(depositNotRecieved.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(depositNotRecieved.fulfilled, (state, action) => {
            state.loading = false;
            state.deposit = action.payload;
          })
          .addCase(depositNotRecieved.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          //ifsc
          .addCase(ifscModification.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(ifscModification.fulfilled, (state, action) => {
            state.loading = false;
            state. ifscModi = action.payload
          })
          .addCase(ifscModification.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })

          //bankName 
          .addCase(changeBankName.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(changeBankName.fulfilled, (state, action) => {
            state.loading = false;
            state.bankName = action.payload
          })
          .addCase(changeBankName.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })

          //bankmodification

          .addCase(modifyBankInfo.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(modifyBankInfo.fulfilled, (state, action) => {
            state.loading = false;
            state.modifyBank = action.payload
          })
          .addCase(modifyBankInfo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })

          //usdtadress
          .addCase(usdtAddress.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(usdtAddress.fulfilled, (state, action) => {
            state.loading = false;
            state.usdtAddress = action.payload
          })
          .addCase(usdtAddress.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })


          //bonus
          .addCase(activityBonus.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(activityBonus.fulfilled, (state, action) => {
            state.loading = false;
            state.bonus = action.payload
          })
          .addCase(activityBonus.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })


          //problem
          .addCase(gameProblem.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(gameProblem.fulfilled, (state, action) => {
            state.loading = false;
            state.problem = action.payload
          })
          .addCase(gameProblem.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
          
          //sendotp
          .addCase(otpSend.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(otpSend.fulfilled, (state, action) => {
            state.loading = false;
            state.otp = action.payload
          })
          .addCase(otpSend.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })


          .addCase(updatePassword.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(updatePassword.fulfilled, (state, action) => {
            state.loading = false;
            state.password = action.payload
          })
          .addCase(updatePassword.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })




          .addCase(withdrawlproblem.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(withdrawlproblem.fulfilled, (state, action) => {
            state.loading = false;
            state.withdrawlProblem = action.payload
          })
          .addCase(withdrawlproblem.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })


          //recharge

          .addCase(getRecharge.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(getRecharge.fulfilled, (state, action) => {
            state.loading = false;
            state.recharge = action.payload
          })
          .addCase(getRecharge.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })

          .addCase(getwithdrawl.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          
          .addCase(getwithdrawl.fulfilled, (state, action) => {
            state.loading = false;
            state.withdrawl = action.payload
          })
          .addCase(getwithdrawl.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
          })
      }

})


export const{addUser , removeUser , clearError } =  slice.actions;

export default slice.reducer
