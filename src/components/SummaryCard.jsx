import { Card } from 'react-bootstrap'

function SummaryCard({ title, value, text }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <h3>{value}</h3>
        <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default SummaryCard