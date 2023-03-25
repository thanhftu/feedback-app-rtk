import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    techs: null,
    loading: false,
    error: null,
  };

  export const getTechs = createAsyncThunk(
    'techs/gettechs',
    async (payload, { rejectWithValue, getState, dispatch })=>{
        try {
        
            const res = await fetch("/techs");
            const data = await res.json();
            // console.log(data)
            return data
          } catch (error) {
            return rejectWithValue(error.response.status);
          }
    }
  )
  export const deletetTechs = createAsyncThunk(
    'techs/deletetechs',
    async (id, { rejectWithValue, getState, dispatch })=>{
        try {
        
            await fetch(`/techs/${id}`, {
              method: "DELETE",
            });
        
            return id
          } catch (error) {
            return rejectWithValue(error.response.status);
          }
    }
  )
  
  export const addTechs = createAsyncThunk(
    'techs/addtechs',
    async (tech, { rejectWithValue, getState, dispatch })=>{
        try {
            
        
            const res = await fetch("/techs", {
              method: "POST",
              body: JSON.stringify(tech),
              headers: {
                "Content-Type": "application/json",
              },
            });
            const data = await res.json();
        
           return data
          } catch (error) {
            return rejectWithValue(error.response.status);
          }
    }
  )

  const techSlice=createSlice({
    name:"techs",
    initialState,
    
        extraReducers:(builder)=>{
            builder.addCase(getTechs.pending,(state)=>{
              state.loading = true;
            });
            builder.addCase(getTechs.fulfilled,(state,action)=>{
              state.loading = false;
              // console.log(action.payload)
              state.techs=action.payload;
            });
            builder.addCase(getTechs.rejected,(state,action)=>{
              state.loading = false;
              state.techs=[];
            });
            //addlog
            builder.addCase(addTechs.pending,(state)=>{
              state.loading = true;
            });
            builder.addCase(addTechs.fulfilled,(state,action)=>{
              state.loading = false;
              state.techs=[...state.techs, action.payload];
            });
            builder.addCase(addTechs.rejected,(state,action)=>{
              state.loading = false;
              state.error=action.payload;
            })
            
            //deletelog
            builder.addCase(deletetTechs.pending,(state)=>{
              state.loading = true;
            });
            builder.addCase(deletetTechs.fulfilled,(state,action)=>{
              state.loading = false;
              // state.techs=state.techs.map((tech) =>
              // tech.id === action.payload.id ? action.payload : tech
              state.techs=state.techs.filter((tech)=>tech.id!==action.payload)
            
            });
            builder.addCase(deletetTechs.rejected,(state,action)=>{
              state.loading = false;
              state.error=action.payload;
            })
            
          
    }
})
  
const techsReducer=techSlice.reducer
export default techsReducer