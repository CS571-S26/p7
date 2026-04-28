import { Card, Form, Button } from 'react-bootstrap'
import { useState } from 'react'

function ExpenseForm({ expenses, setExpenses }) {
  const [expenseName, setExpenseName] = useState('')
  const [expenseAmount, setExpenseAmount] = useState('')

  const addExpense = (event) => {
    event.preventDefault()

    const parsedAmount = Number(expenseAmount)

    if (!expenseName.trim() || expenseAmount.trim() === '' || Number.isNaN(parsedAmount)) {
      return
    }

    const newExpense = {
      id: Date.now(),
      name: expenseName.trim(),
      amount: parsedAmount,
    }

    setExpenses([...expenses, newExpense])
    setExpenseName('')
    setExpenseAmount('')
  }

  return (
    <Card className="p-3 shadow-sm h-100">
      <h2 className="h5 mb-3">Add Expense</h2>

      <Form onSubmit={addExpense}>
        <Form.Group controlId="expenseNameInput" className="mb-2">
          <Form.Label>Expense name</Form.Label>
          <Form.Control
            value={expenseName}
            onChange={(event) => setExpenseName(event.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="expenseAmountInput" className="mb-3">
          <Form.Label>Expense amount</Form.Label>
          <Form.Control
            type="number"
            value={expenseAmount}
            onChange={(event) => setExpenseAmount(event.target.value)}
          />
        </Form.Group>

        <Button type="submit">Add Expense</Button>
      </Form>
    </Card>
  )
}

export default ExpenseForm