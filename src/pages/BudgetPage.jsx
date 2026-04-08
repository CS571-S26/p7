import { useState } from 'react'
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap'
import ExpenseList from '../components/ExpenseList'

function BudgetPage({
  monthlyIncome,
  setMonthlyIncome,
  expenses,
  setExpenses,
  totalExpenses,
}) {
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

  const deleteExpense = (idToDelete) => {
    setExpenses(expenses.filter((expense) => expense.id !== idToDelete))
  }

  return (
    <Container className="py-4">
      <h1 className="mb-3">Budget</h1>
      <p className="mb-4">
        Enter your monthly income and add expenses from scratch. The Home page summary
        updates automatically.
      </p>

      <Row className="g-4">
        <Col md={6}>
          <Card className="p-3 shadow-sm">
            <h5 className="mb-3">Set Monthly Income</h5>
            <Form>
              <Form.Control
                type="number"
                placeholder="Enter monthly income"
                value={monthlyIncome}
                onChange={(event) => setMonthlyIncome(event.target.value)}
              />
            </Form>
          </Card>
        </Col>

        <Col md={6}>
          <Card className="p-3 shadow-sm">
            <h5 className="mb-3">Current Total Expenses</h5>
            <h2 className="mb-0">${totalExpenses}</h2>
          </Card>
        </Col>
      </Row>

      <Row className="g-4 mt-1">
        <Col md={6}>
          <Card className="p-3 shadow-sm">
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
        </Col>

        <Col md={6}>
          <Card className="p-3 shadow-sm">
            <h5 className="mb-3">Expense List</h5>
            <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default BudgetPage