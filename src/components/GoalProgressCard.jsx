import { Card, ProgressBar } from 'react-bootstrap'

function GoalProgressCard({ savingsLeft, savingsGoal }) {
  const parsedGoal = Number(savingsGoal) || 0
  const progress = parsedGoal > 0 ? Math.min((savingsLeft / parsedGoal) * 100, 100) : 0

  return (
    <Card className="p-3 shadow-sm h-100">
      <h2 className="h5 mb-3">Goal Progress</h2>

      {parsedGoal === 0 ? (
        <p className="mb-0">Enter a savings goal to track your progress.</p>
      ) : (
        <>
          <p>
            You have ${savingsLeft} left toward a ${parsedGoal} savings goal.
          </p>
          <ProgressBar now={progress} label={`${Math.round(progress)}%`} />
        </>
      )}
    </Card>
  )
}

export default GoalProgressCard