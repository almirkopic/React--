import Accordion from "./components/Accordion/Accordion";
import AccordionContent from "./components/Accordion/AccordionContent";
import AccordionTitle from "./components/Accordion/AccordionTitle";
import SearchableList from "./components/SearchableList/SearchableList";
import savannaImg from "./assets/african-savanna.jpg";
import amazonImg from "./assets/amazon-river.jpg";
import caribbeanImg from "./assets/caribbean-beach.jpg";
import desertImg from "./assets/desert-dunes.jpg";
import forestImg from "./assets/forest-waterfall.jpg";
import Place from "./components/Place";

const PLACES = [
  {
    id: "african-savanna",
    image: savannaImg,
    title: "African Savanna",
    description: "Experience the beauty of nature.",
  },
  {
    id: "amazon-river",
    image: amazonImg,
    title: "Amazon River",
    description: "Get to know the largest river in the world.",
  },
  {
    id: "caribbean-beach",
    image: caribbeanImg,
    title: "Caribbean Beach",
    description: "Enjoy the sun and the beach.",
  },
  {
    id: "desert-dunes",
    image: desertImg,
    title: "Desert Dunes",
    description: "Discover the desert life.",
  },
  {
    id: "forest-waterfall",
    image: forestImg,
    title: "Forest Waterfall",
    description: "Listen to the sound of the water.",
  },
];

function App() {
  return (
    <main>
      <section>
        <h2>Why work with us?</h2>

        <Accordion className="accordion">
          <Accordion.Item id="experience" className="accordion-item">
            <AccordionTitle className="accordion-item-title">
              We got 20 years of expirience
            </AccordionTitle>
            <AccordionContent
              className="accordion-item-content"
              id="experience"
            >
              <article>
                <p>You can not go wrong with us.</p>
                <p>
                  We are in the businnes of planning highly individualized
                  vacation trips for more than 20y.
                </p>
              </article>
            </AccordionContent>
          </Accordion.Item>
          <Accordion.Item id="local-guides" className="accordion-item">
            <AccordionTitle>We are working with local guides</AccordionTitle>
            <AccordionContent id="local-guides">
              <article>
                <p>We are not doing this along from out office.</p>
                <p>
                  We are in the businnes of planning highly individualized
                  vacation trips for more than 20y.
                </p>
              </article>
            </AccordionContent>
          </Accordion.Item>
        </Accordion>
      </section>

      <section>
        <SearchableList items={PLACES} itemKeyFn={(item) => item.id}>
          {(item) => <Place item={item} />}
        </SearchableList>
        <SearchableList items={["item 1", "item 2"]} itemKeyFn={(item) => item}>
          {(item) => item}
        </SearchableList>
      </section>
    </main>
  );
}

export default App;
