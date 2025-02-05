import CoreConcept from "./components/CoreConcept.jsx";
import Header from "./components/Header/Header.jsx";
import TabButton from "./components/TabButton.jsx";
import { CORE_CONCEPTS } from "./data";

function App() {
  let tabContent = "Please click a button";

  function handleClick(selectedButton) {
    //for event handling
    tabContent = selectedButton;
    console.log(tabContent);
  }
  console.log("asdfghjgfdsad");

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} />
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton onSelect={() => handleClick("components")}>
              COMPONENTS
            </TabButton>
            {/* <TabButton label="Components"></TabButton> */}
            <TabButton
              onSelect={function () {
                //withuout arrow function
                handleClick("jsx");
              }}
            >
              JSX
            </TabButton>
            <TabButton onSelect={() => handleClick("props")}>PROPS</TabButton>
            <TabButton onSelect={() => handleClick("state")}>STATE</TabButton>
          </menu>
          tabContent
        </section>
      </main>
    </div>
  );
}

export default App;
