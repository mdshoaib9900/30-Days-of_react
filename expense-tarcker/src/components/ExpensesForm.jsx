import React,{useState} from 'react'
import Card from './card'
export default function ExpensesForm({onAdd}){
    const [title,setTitle]=useState("");
    const [amount,setAmount]=useState("");
    const [category,setCategory]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !amount || !category) return;
        onAdd({ title, amount: parseFloat(amount), category, date: new Date().toISOString().split("T")[0] });
        setTitle(""); setAmount(""); setCategory("");
      };

    return (
        <Card>
          <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-2">
            <input
              className="border p-2 rounded w-full"
              placeholder="Expense Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="number"
              className="border p-2 rounded w-full"
              placeholder="Amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <input
              className="border p-2 rounded w-full"
              placeholder="Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Add
            </button>
          </form>
        </Card>
      );
}