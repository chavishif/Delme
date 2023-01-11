// סלייסר: בתוכו שמים את המשתנים שרוצים 
//  שיוכרו בכל האפליקצייה ודרכו שולחים קריאות לשרת ומעדכנים 
//  המשתנים שהוגדרו בתוכו = state את ה


//   אזור: אימפורטים של :רידקס
//  counterAPI של קובץ הקריאות לשרת,
// createslice,createAsyncThunk-מתודות שמורות
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchCount } from './counterAPI';

// אזור: הגדרת משתנים קבועים
// לשים לב שפה הוואליו מופרד עם נקודותיים
const initialState = {
  value: 0,
  status: 'idle',
};

//  אזור: מתודות אסנכרוניות המבצעות קריאה לשרת  
// fetchCount בשם של המתודה counterAPI מתוך הקובץ
// הקריאה אליו נעשית באמצעות השם של הסלייס שהוגדר בניים 
// counter + API שם המתודה בקובץ  - counter/fetchCount
export const incrementAsync = createAsyncThunk(
  'counter/fetchCount',
  async (amount) => {
    const response = await fetchCount(amount);
    // The value we return becomes the `fulfilled` action payload
    return response.data;
  }
);

//  אזור: יצירת והגדרת הסלייס
// Initial state כולל יצירת שם לסלייס וצירוף של המשתנים שהוגדרו ב-
export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  // אובייקט שמכיל את המתודות הסנכרוניות-reducer  אזור:מתודות סנכרוניות
  //פונקציה שלוקחת את המצב הנוכחי של האפליקציה +  פעולה, מחזירה מצב חדש = מעדכנת 
  // increment,decrement פעולה היא אובייקט שמתאר שינוי שצריך לעדכן את הסטייט לדוגמא:  
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    // state - משתנה קבוע שהוגדר בסלייס 
    // action.payload - מתאר את המשתנה שהובא מתוך הקומפוננטה 
    // בכדי להגיע למשתנה ספציפי יש לכתוב:
    //  action.payload.שם המשתנה ביוזסטייט של הקומפוננט
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  // אזור האקסטרה הוא אזור עדכון הסטייט של הפונקציות האסנכרוניות שקראו לשרת: 
  //. כלומר לפונקציות אסנכרוניות 4 שלבים: 1.קריאה לשרת, 2. ביצוע הקריאה בקובץ בקאונטראפי . 
  // ז3. אזור האקסטרה שדואג לעדכן את הסטייט-תשובות של המתודות האסנכרוניות
  //   ה4. הצגה של הסטייט המעודכן  בקומפוננטה
  extraReducers: (builder) => {
    // builder- קבוע מייצג את התשובות
    builder
      //  מה לעשות במקרה שהיא טוענת
      .addCase(incrementAsync.pending, (state) => {
        state.status = 'loading';
      })
      // מה לעשות במקרה שהיא מלאה
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.value += action.payload;
      });
  },
});
// חשיפת כל האקשיין של הרידוסרס שרוצים
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// חשיפת המשתנה של הסטייט
export const selectCount = (state) => state.counter.value;
// לא מובנה בקובץ חשיפה של המשתנה סטטוס
export const selectStatus = (state) => state.counter.status;

// דוגמא לפונקציה שניתן לכתוב באזור אחר חוץ מהאזור של המתודות הסנכרוניות
export const incrementIfOdd = (amount) => (dispatch, getState) => {
  const currentValue = selectCount(getState());
  if (currentValue % 2 === 1) {
    dispatch(incrementByAmount(amount));
  }
};

// חשיפה של כל הקובץ
export default counterSlice.reducer;
