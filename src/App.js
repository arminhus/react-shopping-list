import React from "react";
import AddItemForm from "./components/AddItemForm";
import ShoppingList from "./components/ShoppingList";
class App extends React.Component {
  state = {
    shoppingItems: [
      { name: "apples", checked: false },
      { name: "oranges", checked: true },
      { name: "bread", checked: false }
    ]
  };

  render() {
    return (
      <div>
        <header>
          <h1>Shopping List</h1>
        </header>
        <main>
          <section>
            <AddItemForm />
          </section>
          <section>
            <ShoppingList items={this.state.shoppingItems} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
