import { Card, Form } from 'react-bootstrap'

function IncomeForm({ monthlyIncome, setMonthlyIncome }) {
  return (
    <Card className="p-3 shadow-sm h-100">
      <h2 className="h5 mb-3">Set Monthly Income</h2>

      <Form>
        <Form.Group controlId="monthlyIncomeInput">
          <Form.Label>Monthly income</Form.Label>
          <Form.Control
            type="number"
            value={monthlyIncome}
            onChange={(event) => setMonthlyIncome(event.target.value)}
          />
        </Form.Group>
      </Form>
    </Card>
  )
}

export default IncomeForm