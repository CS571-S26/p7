import { Card, Form } from 'react-bootstrap'

function SavingsGoalForm({ savingsGoal, setSavingsGoal }) {
  return (
    <Card className="p-3 shadow-sm h-100">
      <h2 className="h5 mb-3">Set Savings Goal</h2>

      <Form>
        <Form.Group controlId="savingsGoalInput">
          <Form.Label>Monthly savings goal</Form.Label>
          <Form.Control
            type="number"
            value={savingsGoal}
            onChange={(event) => setSavingsGoal(event.target.value)}
          />
        </Form.Group>
      </Form>
    </Card>
  )
}

export default SavingsGoalForm