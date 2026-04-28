import { Card } from 'react-bootstrap'

function BudgetHealthCard({ savingsLeft, totalExpenses, monthlyIncome }) {
  let message = 'Enter income and expenses to see your budget status.'

  if (monthlyIncome > 0) {
    if (savingsLeft > 0) {
      message = 'You are spending less than your income.'
    } else if (savingsLeft === 0) {
      message = 'You are breaking even this month.'
    } else {
      message = 'Your expenses are higher than your income.'
    }
  }

  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title as="h2" className="h5">Budget Health</Card.Title>
        <Card.Text>{message}</Card.Text>
        <Card.Text>
          Income: ${monthlyIncome} | Expenses: ${totalExpenses}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default BudgetHealthCard