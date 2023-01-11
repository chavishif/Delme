import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
  // לא מובנה בקובץ- אימפורט נוסף של המשתנה סטטוס 
  selectStatus
} from './counterSlice';
import styles from './Counter.module.css';

export function Counter() {
  // הגדרת המשתנה שהוכרז בסלייס דרך יוזסלקטור
  //  ובסוגריים זה הערך שקיבל הסייט שהוגדר בסלייס
  const count = useSelector(selectCount);
  // לא מובנה בקובץ- יצירת יוזסלקטור של הסטייט שהוגדר בסלייס, על מנת שנוכל לחשוף אותו בבראוזר
  const status = useSelector(selectStatus);
  
  // dispatch - דרכו יתבצעו הקריאות למתודות שמוגדרות בסלייס
  const dispatch = useDispatch();

  // יוזסטייט מקומי
  const [incrementAmount, setIncrementAmount] = useState('2');
  // משתנה מקומי
  const incrementValue = Number(incrementAmount) || 0;

  // GUI
  return (
    <div>
      {/* status = לא מובנה בקובץ-חשיפה של המשתנה סטטוס */}
       <span className={styles.value}>{status}</span>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          -
        </button>
        {/*value = חשיפה של המשתנה קאונט  */}
        <span className={styles.value}>{count}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          +
        </button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <button
          className={styles.button}
          onClick={() => dispatch(incrementByAmount(incrementValue))}
        >
          Add Amount
        </button>
        <button
          className={styles.asyncButton}
          onClick={() => dispatch(incrementAsync(incrementValue))}
        >
          Add Async
        </button>
        <button
          className={styles.button}
          onClick={() => dispatch(incrementIfOdd(incrementValue))}
        >
          Add If Odd
        </button>
      </div>
    </div>
  );
}
