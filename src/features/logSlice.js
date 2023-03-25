import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


const initialState = {
    logs: null,
    current: null,
    loading: false,
    error: null,
  };

  export const getLogs = createAsyncThunk(
    'logs/getlogs',
    async (payload, { rejectWithValue, getState, dispatch })=>{
        try {
            const res = await fetch("/logs")
            const data = await res.json();
            return data
        } catch (error) {
            return rejectWithValue(error.response.status);
        }
    }
  )

  export const addLog = createAsyncThunk(
    'logs/addlog',
    async (log, { rejectWithValue, getState, dispatch })=>{
      try {
    
        const res = await fetch("/logs", {
          method: "POST",
          body: JSON.stringify(log),
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

  export const deleteLog = createAsyncThunk(
    'logs/deletelog',
    async (id, { rejectWithValue, getState, dispatch })=>{
      try {
        await fetch(`/logs/${id}`, {
          method: "DELETE",
        });
    
        return id
      } catch (error) {
        return rejectWithValue(error.response.status);
      }
    }
  )
  export const updateLog = createAsyncThunk(
      'logs/updatelog',
      async (log, { rejectWithValue, getState, dispatch })=>{
        try {
          const res = await fetch(`/logs/${log.id}`, {
            method: "PUT",
            body: JSON.stringify(log),
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data = await res.json();
          return data
        } catch (error) {
          return rejectWithValue(error.response.status);
        }
      })
      export const searchLogs = createAsyncThunk(
        'logs/serchlog',
        async (text, { rejectWithValue, getState, dispatch })=>{
          try {
        
            const res = await fetch(`/logs?q=${text}`);
            const data = await res.json();
           return data
          } catch (error) {
            return rejectWithValue(error.response.status);
          }
        })
      
  
  const logSlice=createSlice({
    name:"logs",
    initialState,
    reducers:{
      clearCurrent:(state)=>{
        state.logs=[];
      },
      setCurrent:(state,action)=>{
        state.current=action.payload;
      },
    },
    extraReducers:(builder)=>{
      builder.addCase(getLogs.pending,(state)=>{
        state.loading = true;
      });
      builder.addCase(getLogs.fulfilled,(state,action)=>{
        state.loading = false;
        // console.log(action.payload)
        state.logs=action.payload;
      });
      builder.addCase(getLogs.rejected,(state,action)=>{
        state.loading = false;
        state.logs=[];
      });
      //addlog
      builder.addCase(addLog.pending,(state)=>{
        state.loading = true;
      });
      builder.addCase(addLog.fulfilled,(state,action)=>{
        state.loading = false;
        state.logs=[...state.logs, action.payload];
      });
      builder.addCase(addLog.rejected,(state,action)=>{
        state.loading = false;
        state.error=action.payload;
      })
      //updatelog
      builder.addCase(updateLog.pending,(state)=>{
        state.loading = true;
      });
      builder.addCase(updateLog.fulfilled,(state,action)=>{
        state.loading = false;
        state.logs=state.logs.map((log) =>
        log.id === action.payload.id ? action.payload : log
      );
      });
      builder.addCase(updateLog.rejected,(state,action)=>{
        state.loading = false;
        state.error=action.payload;
      })
      //deletelog
      builder.addCase(deleteLog.pending,(state)=>{
        state.loading = true;
      });
      builder.addCase(deleteLog.fulfilled,(state,action)=>{
        state.loading = false;
      //   state.logs=state.logs.map((log) =>
      //   log.id === action.payload.id ? action.payload : log
      // );
      state.logs=state.logs.filter((log)=>log.id!==action.payload)
      });
      builder.addCase(deleteLog.rejected,(state,action)=>{
        state.loading = false;
        state.error=action.payload;
      })
      //addlog
      builder.addCase(searchLogs.pending,(state)=>{
        state.loading = true;
      });
      builder.addCase(searchLogs.fulfilled,(state,action)=>{
        state.loading = false;
        state.logs=[...state.logs, action.payload];
      });
      builder.addCase(searchLogs.rejected,(state,action)=>{
        state.loading = false;
        state.error=action.payload;
      })
    },

  })

  export const {clearCurrent, setCurrent}=logSlice.actions
  const logReducer = logSlice.reducer;
  export default logReducer