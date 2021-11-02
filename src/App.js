import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expences = [
    {
      id: '1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { 
      id: '2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12) },
    {
      id: '3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: '4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ]
  return (
    <div>
      <ExpenseItem
        title={expences[0].title} 
        amount={expences[0].amount} 
        date={expences[0].date}>
      </ExpenseItem>

      <ExpenseItem
        title={expences[1].title} 
        amount={expences[1].amount} 
        date={expences[1].date}>
      </ExpenseItem>

      <ExpenseItem
        title={expences[2].title} 
        amount={expences[2].amount} 
        date={expences[2].date}>
      </ExpenseItem>
    </div>
  );
}

export default App;
