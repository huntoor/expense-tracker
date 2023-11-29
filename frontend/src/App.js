import React from 'react';
import UserComponent from './UserComponent';
import ExpenseComponent from './ExpenseComponent';
import ExpenseCategoryComponent from './ExpenseCategoryComponent';

function App() {
  return (
    <div>
      <h1>Expense Tracking System</h1>
      <UserComponent />
      <ExpenseComponent />
      <ExpenseCategoryComponent />
    </div>
  );
}

export default App;
