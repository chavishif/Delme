import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
// import testReducer from '../demo/testSlice';
import sampReducer from '../practice_3_component/sampSlice';
import productsSlice from '../products/productsSlice';

// אוסף של כל הרידוסרים בצורה של קי ווליו ולכל אחד מהרידוסר צריך לייבא אימפורט מתאים
// הקי: הניים שניתן לו בקאונטר  הווליו-ניקניים שניתן לו כאן
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    // test : testReducer ,
    samp : sampReducer,
    product : productsSlice
  },
});
