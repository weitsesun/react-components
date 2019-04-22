var groceryItems = ['Pen', 'Pineapple', 'hi'];

var GroceryList = (props) => {
  
  return (
    <ul>
      <h4>Grocery is open now!</h4>
      {props.items.map(item => <GroceryListItem item={item} />)}
    </ul>
  )
};

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    //Using CSS
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    //HTML
    return (<li style={style} onMouseEnter={this.onListItemClick.bind(this)}>{this.props.item}</li>);
  }
}

ReactDOM.render(<GroceryList items={groceryItems}/>, document.getElementById("app"));





// var GroceryListItem = (props) => {

//   var onListItemClick = (event) => {
//     console.log("clicked");
//   };
//   return (
//   <ul>
//     {props.item.map((elem) => <li onClick={onListItemClick}>{elem}</li>)}
//   </ul>
//   );
// };