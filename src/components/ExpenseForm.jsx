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
      <h5 className="mb-3">Add Expense</h5>
      <Form onSubmit={addExpense}>
        <Form.Control
          placeholder="Expense name"
          value={expenseName}
          onChange={(event) => setExpenseName(event.target.value)}
          className="mb-2"
        />

        <Form.Control
          type="number"
          placeholder="Expense amount"
          value={expenseAmount}
          onChange={(event) => setExpenseAmount(event.target.value)}
          className="mb-3"
        />

        <Button type="submit">Add Expense</Button>
      </Form>
    </Card>
  )
}

export default ExpenseForm