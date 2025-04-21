import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  // state variable for Dark Mode Toggle feature
  const [isDarkMode, setIsDarkMode] = React.useState(false);
  const appClass = isDarkMode ? "App dark" : "App light";
  const toggleDarkMode = () => setIsDarkMode(prevMode => !prevMode);

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={toggleDarkMode}>Toggle Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
