import { Container, Card } from 'react-bootstrap'

function AboutPage() {
  return (
    <Container className="py-4">
      <h1 className="mb-3">About This Project</h1>

      <Card className="shadow-sm">
        <Card.Body>
          <h2 className="h5">Project Goal</h2>
          <Card.Text>
            Money Path Simulator helps people understand how monthly income,
            expenses, and savings goals connect. The goal is to make budgeting
            easier to visualize instead of only looking at numbers separately.
          </Card.Text>

          <h2 className="h5">Current Features</h2>
          <Card.Text>
            Users can enter monthly income, set a savings goal, add expenses,
            delete individual expenses, clear all expenses, and view updated
            summaries across the app.
          </Card.Text>

          <h2 className="h5">Design Choices</h2>
          <Card.Text>
            I used React Bootstrap cards, spacing, rows, and columns to keep the
            layout consistent. I also kept the design simple with clear sections
            so users can understand the app quickly.
          </Card.Text>

          <h2 className="h5">Accessibility</h2>
          <Card.Text>
            The app uses labeled form inputs, clear headings, keyboard-accessible
            controls, and high-contrast text to make the site easier to use.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default AboutPage