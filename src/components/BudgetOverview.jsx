import { Card, Button } from 'react-bootstrap'

function BudgetOverview({ totalExpenses, savingsLeft, expenses, setExpenses }) {
  const clearExpenses = () => {
    setExpenses([])
  }

  return (
    <Card className="p-3 shadow-sm h-100">
      <h2 className="h5 mb-3">Budget Overview</h2>
      <p className="mb-2"><strong>Total Expenses:</strong> ${totalExpenses}</p>
      <p className="mb-3"><strong>Savings Left:</strong> ${savingsLeft}</p>

      <Button
        variant="outline-secondary"
        onClick={clearExpenses}
        disabled={expenses.length === 0}
      >
        Clear All Expenses
      </Button>
    </Card>
  )
}

export default BudgetOverview