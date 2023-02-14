const name_list = [
  {
    name: "Arun",
    image: "https://ui-avatars.com/api/?name=Arun",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Est unde quas laborum accusantium molestias velit mollitia alias quia earum repudiandae odio molestiae modi possimus aut, nisi magni quos.Dicta, cupiditate.",
  },
  {
    name: "Ajith",
    image: "https://ui-avatars.com/api/?name=Ajith",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Est unde quas laborum accusantium molestias velit mollitia alias quia earum repudiandae odio molestiae modi possimus aut, nisi magni quos.Dicta, cupiditate.",
  },
  {
    name: "Bala",
    image: "https://ui-avatars.com/api/?name=Bala",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Est unde quas laborum accusantium molestias velit mollitia alias quia earum repudiandae odio molestiae modi possimus aut, nisi magni quos.Dicta, cupiditate.",
  },
  {
    name: "Deva",
    image: "https://ui-avatars.com/api/?name=Deva",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Est unde quas laborum accusantium molestias velit mollitia alias quia earum repudiandae odio molestiae modi possimus aut, nisi magni quos.Dicta, cupiditate.",
  },
];

name_list[-1] = { name: "Surya" };

name_list[-1]["name"] = "Super star";

console.log(name_list);

name_list[-2] = { name: "surya" };

name_list[-2]["name"] = "susi";

console.log(name_list);

name_list[20] = { name: "surya" };

name_list[20]["name"] = "susi";

console.log(name_list);
