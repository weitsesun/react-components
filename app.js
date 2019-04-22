var GroceryList = (props) => (
  <ul>
    <p>Grocery is open now!</p>
    <li>{props.item[0]}</li>
    <li>{props.item[1]}</li>
  </ul>
);

var items = ['Pen', 'Pineapple'];
ReactDOM.render(<GroceryList item={items}/>, document.getElementById("app"));

// var GroceryList = (props) => (
//   <ul>
//     <li>{props.groceryItems[0]}</li>
//     <li>{props.groceryItems[1]}</li>
//   </ul>
// );