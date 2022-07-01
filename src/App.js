import "./App.css";
import Card from "./components/Card";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  const dataSet = [
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&9=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit-max&ixid=eyJhcHBfaWQiOjEONTg5fQ",
      title: "Salad",
      description:
        "The best salad in the whole world is here to stay for a great price.",
      price: "€20",
    },
    {
      img: "https://tse1.mm.bing.net/th?id=OIP.2Ps4SUW-F91xmn_OM3MC2gHaE7&pid=Api",
      title: "Choripan",
      description:
        "The best sambo in the whole world is here to stay for a great price.",
      price: "€6",
    },
    {
      img: "https://tse1.mm.bing.net/th?id=OIP.2Ps4SUW-F91xmn_OM3MC2gHaE7&pid=Api",
      title: "Choripan",
      description:
        "The best sambo in the whole world is here to stay for a great price.",
      price: "€6",
    },
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&9=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit-max&ixid=eyJhcHBfaWQiOjEONTg5fQ",
      title: "Salad",
      description:
        "The best salad in the whole world is here to stay for a great price.",
      price: "€20",
    },
    {
      img: "https://tse1.mm.bing.net/th?id=OIP.2Ps4SUW-F91xmn_OM3MC2gHaE7&pid=Api",
      title: "Choripan",
      description:
        "The best sambo in the whole world is here to stay for a great price.",
      price: "€6",
    },
    {
      img: "https://images.unsplash.com/photo-1536304929831-ee1ca9d44906?ixlib=rb-1.2.1&9=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit-max&ixid=eyJhcHBfaWQiOjEONTg5fQ",
      title: "Salad",
      description:
        "The best salad in the whole world is here to stay for a great price.",
      price: "€20",
    },
  ];

  const renderCards = dataSet.map((card, index) => {
    return (
      <Card
        description={card.description}
        img={card.img}
        title={card.title}
        price={card.price}
        key={index}
      />
    );
  });

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contact" element={<Contact />}/>
        {/* {renderCards} */}
      </Routes>
    </div>
  );
}

export default App;
