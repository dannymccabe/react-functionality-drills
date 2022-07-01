import React from 'react'
import Card from '../components/Card'
import "../App.css"

const Home = () => {
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
    <div>
        {renderCards}
    </div>
  )
}

export default Home