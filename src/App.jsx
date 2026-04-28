import { HashRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import NavigationBar from './components/NavigationBar'
import HomePage from './pages/HomePage'
import BudgetPage from './pages/BudgetPage'
import AboutPage from './pages/AboutPage'

function App() {
  const [monthlyIncome, setMonthlyIncome] = useState('')
  const [expenses, setExpenses] = useState([])
  const [savingsGoal, setSavingsGoal] = useState('')

  const parsedIncome = Number(monthlyIncome) || 0
  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0)
  const savingsLeft = parsedIncome - totalExpenses

  return (
    <HashRouter>
      <NavigationBar />
      <Routes>
        <Route
          path="/"
          element={
            <HomePage
              monthlyIncome={parsedIncome}
              totalExpenses={totalExpenses}
              savingsLeft={savingsLeft}
              expenseCount={expenses.length}
              savingsGoal={savingsGoal}
            />
          }
        />
        <Route
          path="/budget"
          element={
            <BudgetPage
              monthlyIncome={monthlyIncome}
              setMonthlyIncome={setMonthlyIncome}
              expenses={expenses}
              setExpenses={setExpenses}
              totalExpenses={totalExpenses}
              savingsLeft={savingsLeft}
              savingsGoal={savingsGoal}
              setSavingsGoal={setSavingsGoal}
            />
          }
        />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App