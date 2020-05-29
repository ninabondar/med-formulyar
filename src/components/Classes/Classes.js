import React from "react";

import ItemCard from "../ItemCard";
import Search from "../Search";

import "./Classes.scss";

const Classes = ({ classList }) => {
  const spreadIntoCards = el => (
    <ItemCard title={el.title} rightCategory={el.category} />
  );

  return (
    <section className="classes-page">
      <Search />
      <main className="classes-page__cards">
        {classList?.map(spreadIntoCards)}
      </main>
    </section>
  );
};

Classes.defaultProps = {
  classList: [
    { title: "ПРОЦЕДУРИ НА НЕРВОВІЙ СИСТЕМІ", category: "КЛАС 1" },
    { title: "ПРОЦЕДУРИ НА ВЕЛИКІЙ  СИСТЕМІ", category: "КЛАС 3" },
    { title: "ПРОЦЕДУРИ НА НЕРВОВІЙ СИСТЕМІ", category: "КЛАС 3" },
    { title: "ПРОЦЕДУРИ НА НЕРВОВІЙ СИСТЕМІ", category: "КЛАС 1" },
    { title: "ПРОЦЕДУРИ НА НЕРВОВІЙ СИСТЕМІ", category: "КЛАС 3" },
    { title: "ПРОЦЕДУРИ НА НЕРВОВІЙ СИСТЕМІ", category: "КЛАС 1" },
    { title: "ПРОЦЕДУРИ НА ВЕЛИКІЙ  СИСТЕМІ", category: "КЛАС 3" },
    { title: "ПРОЦЕДУРИ НА НЕРВОВІЙ СИСТЕМІ", category: "КЛАС 3" }
  ]
};

export default Classes;
