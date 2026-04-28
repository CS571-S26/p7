import { Container, Row, Col, Card } from 'react-bootstrap'
import ExpenseList from '../components/ExpenseList'
import IncomeForm from '../components/IncomeForm'
import ExpenseForm from '../components/ExpenseForm'
import BudgetOverview from '../components/BudgetOverview'
import SavingsGoalForm from '../components/SavingsGoalForm'
import GoalProgressCard from '../components/GoalProgressCard'

function BudgetPage({
  monthlyIncome,
  setMonthlyIncome,
  expenses,
  setExpenses,
  totalExpenses,
  savingsLeft,
  savingsGoal,
  setSavingsGoal,
}) {
  const deleteExpense = (idToDelete) => {
    setExpenses(expenses.filter((expense) => expense.id !== idToDelete))
  }

  return (
    <Container className="py-4">
      <h1 className="mb-3">Budget</h1>
      <p className="mb-4">
        Enter your monthly income, savings goal, and expenses. The summary updates
        automatically across the site.
      </p>

      <Row className="g-4">
        <Col md={4}>
          <IncomeForm
            monthlyIncome={monthlyIncome}
            setMonthlyIncome={setMonthlyIncome}
          />
        </Col>

        <Col md={4}>
          <SavingsGoalForm
            savingsGoal={savingsGoal}
            setSavingsGoal={setSavingsGoal}
          />
        </Col>

        <Col md={4}>
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
            <h2 className="h5 mb-3">Expense List</h2>
            <ExpenseList expenses={expenses} onDeleteExpense={deleteExpense} />
          </Card>
        </Col>
      </Row>

      <Row className="g-4 mt-1">
        <Col md={6}>
          <GoalProgressCard savingsLeft={savingsLeft} savingsGoal={savingsGoal} />
        </Col>
      </Row>
    </Container>
  )
}

export default BudgetPage