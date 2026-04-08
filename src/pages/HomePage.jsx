import { Container, Row, Col } from 'react-bootstrap'
import SummaryCard from '../components/SummaryCard'

function HomePage({ monthlyIncome, totalExpenses, savingsLeft, expenseCount }) {
  return (
    <Container className="py-4">
      <h1 className="mb-3">Home</h1>
      <p className="mb-4">
        This is the Money Path Simulator!!
      </p>

      <Row className="g-4">
        <Col md={4}>
          <SummaryCard
            title="Monthly Income"
            value={`$${monthlyIncome}`}
            text="This is based on the income entered by the user."
          />
        </Col>
        <Col md={4}>
          <SummaryCard
            title="Total Expenses"
            value={`$${totalExpenses}`}
            text="This updates based on the expenses added on the Budget page."
          />
        </Col>
        <Col md={4}>
          <SummaryCard
            title="Savings Left"
            value={`$${savingsLeft}`}
            text="This shows income minus total expenses."
          />
        </Col>
      </Row>

      <Row className="g-4 mt-1">
        <Col md={6}>
          <SummaryCard
            title="Expense Entries"
            value={expenseCount}
            text="The current number of expenses the user has entered."
          />
        </Col>
      </Row>
    </Container>
  )
}

export default HomePage