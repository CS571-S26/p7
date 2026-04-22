import { Card, Form } from 'react-bootstrap'

function IncomeForm({ monthlyIncome, setMonthlyIncome }) {
  return (
    <Card className="p-3 shadow-sm h-100">
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
  )
}

export default IncomeForm