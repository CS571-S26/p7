import { Container, Row, Col, Card } from 'react-bootstrap'
import ExpenseList from '../components/ExpenseList'
import IncomeForm from '../components/IncomeForm'
import ExpenseForm from '../components/ExpenseForm'
import BudgetOverview from '../components/BudgetOverview'

function BudgetPage({
  monthlyIncome,
  setMonthlyIncome,
  expenses,
  setExpenses,
  totalExpenses,
  savingsLeft,
}) {
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
          <IncomeForm
            monthlyIncome={monthlyIncome}
            setMonthlyIncome={setMonthlyIncome}
          />
        </Col>

        <Col md={6}>
          <BudgetOverview
            totalExpenses={totalExpenses}
            savingsLeft={savingsLeft}
            expenses={expenses}
            setExpenses={setExpenses}
          />
        </Col>
      </Row>

      <Row className="g-4 mt-1">
        <Col md={6}>
          <ExpenseForm expenses={expenses} setExpenses={setExpenses} />
        </Col>

        <Col md={6}>
          <Card className="p-3 shadow-sm h-100">
            <h5 className="mb-3">Expense List</h5>
            <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default BudgetPage