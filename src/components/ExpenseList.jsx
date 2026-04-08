import { ListGroup, Button } from 'react-bootstrap'

function ExpenseList({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return <p className="mb-0">No expenses added yet.</p>
  }

  return (
    <ListGroup>
      {expenses.map((expense) => (
        <ListGroup.Item
          key={expense.id}
          className="d-flex justify-content-between align-items-center"
        >
          <span>
            <strong>{expense.name}</strong> — ${expense.amount}
          </span>
          <Button
            variant="outline-danger"
            size="sm"
            onClick={() => onDeleteExpense(expense.id)}
          >
            Delete
          </Button>
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default ExpenseList