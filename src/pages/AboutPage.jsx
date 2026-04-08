import { Container, Card } from 'react-bootstrap'

function AboutPage() {
  return (
    <Container className="py-4">
      <h1 className="mb-3">About This Project</h1>

      <Card className="shadow-sm">
        <Card.Body>
          <Card.Text>
            This project is the Money Path Simulator which hels people get a better understanding of their spending and how it affects their savings over time.
          </Card.Text>

          <Card.Text>
            Right now, this is still an early version. Currently I have focused on setting up the overall structure using React, adding routing between pages, and building with React Bootstrap.
          </Card.Text>

          <Card.Text>
            I also created some reusable components like the navigation bar, summary cards, and an expense list to keep things organized.
          </Card.Text>

          <Card.Text>
            Going forward, I plan to add more interactivity, like letting users input their own data and actually simulate different financial scenarios.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  )
}

export default AboutPage