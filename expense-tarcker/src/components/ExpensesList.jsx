import ExpenseItem from "./ExpensesItem";
import Card from "./card";

export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <p className="text-center mt-4 text-gray-500">No expenses yet.</p>;
  }

  return (
    <Card>
      <ul className="divide-y">
        {expenses.map((expense) => (
          <ExpenseItem key={expense.id} expense={expense} onDelete={onDelete} />
        ))}
      </ul>
    </Card>
  );
}
