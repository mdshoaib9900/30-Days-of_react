export default function ExpenseItem({ expense, onDelete }) {
    return (
      <li className="flex justify-between items-center p-2">
        <div>
          <h3 className="font-semibold">{expense.title}</h3>
          <p className="text-sm text-gray-500">
            {expense.category} | {expense.date}
          </p>
        </div>
        <div className="flex items-center gap-4">
          <span className="font-bold text-green-600">₹{expense.amount}</span>
          <button
            onClick={() => onDelete(expense.id)}
            className="bg-red-500 text-white px-2 py-1 rounded"
          >
            X
          </button>
        </div>
      </li>
    );
  }