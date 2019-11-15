const projectItems = [
  {
    id: 1,
    title: "St. Louis City Recycles",
    thumbnail: "/images/stlcityrecycles-cover.jpg",
    images: ["", "", ""],
    categories: [
      { id: 1, name: "Web Design" },
      { id: 2, name: "Front End Web Development" },
      { id: 3, name: "Logo/Identity Design" }
    ],
    link: "/projects/stl-recycles",
    description:
      "St. Louis City Recycles is an information campaign comissioned by Brightside STL to increase public education in regards to recycling."
  },
  {
    id: 2,
    title: "KDHX",
    thumbnail: "/images/kdhx-cover.jpg",
    images: ["", "", ""],
    categories: [
      { id: 1, name: "Web Design" },
      { id: 2, name: "Front End Web Development" }
    ],
    link: "/projects/kdhx"
  },
  {
    id: 3,
    title: "Rosemann and Associates",
    thumbnail: "/images/rosemann-lg.jpg",
    link: "/projects/rosemann",
    categories: [
      { id: 1, name: "Web Design" },
      { id: 2, name: "Front End Web Development" },
      { id: 3, name: "Logo/Identity Design" }
    ]
  }
];

export function getProjectItems() {
  return projectItems;
}

export function getProjectsByCategory(id) {
  // not working yet... try Obj.entries?? https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
  console.log(id);

  console.log(projectItems.filter(p => p.categories.id === id));

  return projectItems.filter(p => p.categories.id === id);
}

export function getProject(id) {
  return projectItems.find(p => p.id === id);
}
