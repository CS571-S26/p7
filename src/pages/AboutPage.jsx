import { Container, Card } from 'react-bootstrap'

function AboutPage() {
  return (
    <Container className="py-4">
      <h1 className="mb-3">About This Project</h1>

      <Card className="shadow-sm">
        <Card.Body>
          <Card.Text>
            This project is the Money Path Simulator, which helps people get a better
            understanding of their spending and how it affects their savings over time.
          </Card.Text>

          <Card.Text>
            Right now, this is still an early version. So far, I have focused on setting
            up the overall structure using React, adding routing between pages, and
            building the layout with React Bootstrap.
          </Card.Text>

          <Card.Text>
            I also created reusable components like the navigation bar, summary cards,
            expense form, income form, budget overview, and an expense list to keep
            everything organized.
          </Card.Text>

          <Card.Text>
            Going forward, I plan to add more interactivity and allow users to explore
            different budgeting scenarios in a more realistic way.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default AboutPage