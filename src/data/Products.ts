interface Products {
  _id: string;
  name: string;
  image: string;
  description: string;
  price: number;
  countInStock: number;
  rating: number;
  numReviews: number;
}

const products: Products[] = [
  {
    _id: "1",
    name: "Nike Revolution 6",
    image:
      "https://static.nike.com/a/images/t_default/e839f55c-84d5-4030-9bcf-644e6a6463ea/%E0%B8%A3%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B9%89%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B9%88%E0%B8%87%E0%B8%9C%E0%B8%B9%E0%B9%89-revolution-6-%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2-5k6Jh6.png",
    description:
      "Created in 1917 as a non-skid basketball shoe, the All Star was originally promoted for its superior court performance by basketball mastermind Chuck Taylor.",
    price: 89,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    _id: "2",
    name: "Nike Revolution 4",
    image:
      "https://img.freepik.com/free-photo/fashion-shoes-sneakers_1203-7528.jpg?w=2000",
    description:
      "Created in 1917 as a non-skid basketball shoe, the All Star was originally promoted for its superior court performance by basketball mastermind Chuck Taylor.",
    price: 57,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    _id: "3",
    name: "Vans",
    image:
      "https://images.vans.com/is/image/VansEU/VN0A3WMAVNE-HERO?$PDP-FULL-IMAGE$",
    description:
      "Created in 1917 as a non-skid basketball shoe, the All Star was originally promoted for its superior court performance by basketball mastermind Chuck Taylor.",
    price: 192,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    _id: "4",
    name: "Nike Air Max",
    image:
      "https://static.nike.com/a/images/t_default/bd414c34-43e6-406d-8b51-780dfea83543/air-max-bliss-next-nature-shoes-JztRrh.png",
    description:
      "The sneaker, with its timeless silhouette and unmistakable ankle patch, was organically adopted by rebels, artists, musicians, dreamers, thinkers and originals.",
    price: 8373,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    _id: "5",
    name: "Converse",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRorK8GG8mmd1Xhqc9Vc9s_trsLE4Kt3yLOVQ&usqp=CAU",
    description:
      "The sneaker, with its timeless silhouette and unmistakable ankle patch, was organically adopted by rebels, artists, musicians, dreamers, thinkers and originals.",
    price: 89,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
  {
    _id: "6",
    name: "Nike",
    image:
      "https://hypebeast.com/image/2020/03/nike-air-max-200-white-laser-blue-ct1262-001-release-001.jpg",
    description:
      "The sneaker, with its timeless silhouette and unmistakable ankle patch, was organically adopted by rebels, artists, musicians, dreamers, thinkers and originals.",
    price: 433,
    countInStock: 3,
    rating: 3,
    numReviews: 4,
  },
  {
    _id: "7",
    name: "Converse",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdKRJ60tZ4uQ8MiLF38-6XbWPnJnTr2ivY2g&usqp=CAU",
    description:
      "The sneaker, with its timeless silhouette and unmistakable ankle patch, was organically adopted by rebels, artists, musicians, dreamers, thinkers and originals.",
    price: 384,
    countInStock: 3,
    rating: 4,
    numReviews: 4,
  },
];

export default products;
