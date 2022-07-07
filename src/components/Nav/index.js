import React from "react";

function Nav() {
  const categories = [
    {
      name: "About",
      description:
        "About Me",
    },
    { name: "Portfolio", description: "Portfolio" },
    { name: "Contact", description: "Contact" },
    {
      name: "Resume",
      description: "Resume",
    },
  ];

  function categorySelected(name) {
    console.log(`${name} clicked`);
  }

  return (
    <header>
      <h2>
        <a href="/">Blessing</a>
      </h2>
      <nav>
        <ul className="flex-row">
        {categories.map((category) => (
        <li
          className="mx-1"
          key={category.name}
        >
         <span onClick={()=>categorySelected(category.name)} >
            {category.name}
          </span>
        </li>
      ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
