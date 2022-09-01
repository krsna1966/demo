import './App.css';
import Expenseitem from './components/Expenses/Expenseitem';

function App() {
     const expenses = [
     {
        name: 'Car insurance',
        price : 294 ,
        date : new Date(2022, 8 , 23)
     },
     
     {
      name: 'Life',
      price : 45,
      date : new Date(2022, 7 , 23)
      },

      {
       name: 'New York',
       price : 2 ,
       date : new Date(2022, 6 , 23)
      },

      {
       name: 'Health',
       price : 44 ,
       date : new Date(2022, 5 , 23)
      }

    ]


  return (
    <div className="App">
    <Expenseitem
        name = {expenses[0].name}
        price = {expenses[0].price} 
        date = {expenses[0].date}
    />

    <Expenseitem
        name = {expenses[1].name}
        price = {expenses[1].price} 
        date = {expenses[1].date}
    />

    <Expenseitem
        name = {expenses[2].name}
        price = {expenses[2].price} 
        date = {expenses[2].date}
    />

    <Expenseitem
        name = {expenses[3].name}
        price = {expenses[3].price} 
        date = {expenses[3].date}
    />

    </div>
  );
}

export default App;
