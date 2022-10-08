import "./App.css";
import ComponentA from "./Components/8. Context/ComponentA";
import { UserProvider } from "./Components/8. Context/userContext";

function App() {
  return (
    <div className="App">
      <UserProvider value="Pratham">
        <ComponentA />
      </UserProvider>
      {/* <Counter>
        {(count, incrementCount) => (
          <ClickCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter>
      <Counter>
        {(count, incrementCount) => (
          <HoverCounterTwo count={count} incrementCount={incrementCount} />
        )}
      </Counter> */}
      {/* <ClickCounterTwo /> */}
      {/* <HoverCounterTwo /> */}
      {/* <User render={(isLoggedIn) => (isLoggedIn ? "Pratham" : "Guest")} /> */}
      {/* <HoverCounter /> */}
      {/* <ClickCounter name="Pratham" /> */}
      {/* <ErrorBoundary>
        <Hero heroName="Batman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Superman" />
      </ErrorBoundary>

      <ErrorBoundary>
        <Hero heroName="Joker" />
      </ErrorBoundary> */}
      {/* <PortalsDemo /> */}
      {/* <FRParentInput /> */}
      {/* <FocusInput /> */}
      {/* <RefsDemo /> */}
      {/* <ParentComp /> */}
      {/* <FragmentDemo /> */}
    </div>
  );
}

export default App;
