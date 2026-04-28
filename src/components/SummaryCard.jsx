import { Card } from 'react-bootstrap'

function SummaryCard({ title, value, text }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title as="h2" className="h5">{title}</Card.Title>
        <p className="display-6 fw-bold">{value}</p>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SummaryCard