import { useState } from 'react'
import ExpensesForm from './components/ExpensesForm'
import ExpensesList from './components/ExpensesList'
import useLocalStorage from './hooks/useLocalStorage'

function App() {
  const [expenses,setExpenses]=useLocalStorage("expenses",[]);
  const addExpense=(expense)=>{
    setExpenses([...expenses, { id: Date.now() + Math.random(), ...expense }]);
  }
  const deleteExpense=(id)=>{
    setExpenses(expenses.filter((e)=> e.id != id));
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-4 text-center"> Expense Tracker</h1>
      <ExpensesForm onAdd={addExpense} />
      <ExpensesList expenses={expenses} onDelete={deleteExpense} />
    </div>
  );
}

export default App
