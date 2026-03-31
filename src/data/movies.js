const movies = [
  {
    id: 1,
    title: "Stranger Things",
    category: "Trending",
    rating: 8.7,
    link: "https://flixhd.cc/watch-tv/watch-stranger-things-full-39444.4874236",
    image: "https://tse4.mm.bing.net/th/id/OIP.m_4MTvgjdi1NTdbIwASd_gHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 2,
    title: "Breaking Bad",
    category: "Trending",
    rating: 9.5,
    link: "https://www.netflix.com/watch/70196252?trackId=253930456&tctx=1%2C0%2C7ca7efa9-7ddb-4011-bc89-7f6b674b0fc2-159362610%2CNES_F9092986C8A7BB128023630323A502-D046D8B4AFE38D-238F3893CF_p_1774898276552%2C%2C%2C%2C%2C%2CVideo%3A70143836%2CdetailsPagePlayButton",
    image: "https://tse1.mm.bing.net/th/id/OIP.MNPtU6w-qr5nbeIcScBFCAHaEK?pid=Api&P=0&h=180https://picsum.photos/300/200?2"
  },
    {
    id: 3,
    title: "Steel Ball Run",
    category: "Trending",
    rating: 9.7,
    link:"https://www.netflix.com/watch/82132224?trackId=284616272&tctx=0%2C0%2Ccdbb22ef-4f4b-464d-bb49-18b4c483a174%2Ccdbb22ef-4f4b-464d-bb49-18b4c483a174%7C%3DeyJwYWdlSWQiOiI3OTg1YmM2Ni1mZTQ0LTQ4MjUtOWZjZi00ZTk3YmFjYTQwNGIvMS8vc3RlZWwvMC8wIiwibG9jYWxTZWN0aW9uSWQiOiIyIn0%3D%2C%2C%2C%2C%2C%2CVideo%3A82116553%2CdetailsPagePlayButton",
    image: "https://tse4.mm.bing.net/th/id/OIP.9bxq_0VMIh9Zpi1KNuLv3wHaEK?pid=Api&P=0&h=180"
  },
      {
    id: 4,
    title: "The Office",
    category: "Trending",
    rating: 8.8,
    link:"https://www.netflix.com/watch/70069638?trackId=14170286&tctx=2%2C1%2C7ca7efa9-7ddb-4011-bc89-7f6b674b0fc2-159411428%2CNES_F9092986C8A7BB128023630323A502-994911DC4F528C-DBAEE66091_p_1774898435340%2CNES_F9092986C8A7BB128023630323A502_p_1774898276552%2C%2C%2C%2C%2CVideo%3A70136120%2CminiDpPlayButton",
    image: "https://tse3.mm.bing.net/th/id/OIP.U-c4u1orbJVeuqI0k4aIwAHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 5,
    title: "Avengers",
    category: "Action",
    rating: 8.0,
    link:"https://www.hotstar.com/in/movies/marvels-the-avengers/1660000015?search_query=avengers",
    image: "https://tse1.mm.bing.net/th/id/OIP.V1IuV7C-1_kNnIr2bPC7ngHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 6,
    title: "John Wick",
    category: "Action",
    rating: 7.8,
    image: "https://tse1.mm.bing.net/th/id/OIP.nGTJJr3Jhd9Fuy3YGK-gUAHaEA?pid=Api&P=0&h=180"
  },
  {
  id: 7,
  title: "Money Heist",
  category: "Trending",
  rating: 8.2,
  image: "https://tse4.mm.bing.net/th/id/OIP.9rS5lZlG9C3cWc4kN9EwHQHaEK?pid=Api&P=0&h=180"
},
{
  id: 8,
  title: "Peaky Blinders",
  category: "Trending",
  rating: 8.8,
  image: "https://tse3.mm.bing.net/th/id/OIP.EzU4v1V4G8t7MZQw8z8sLQHaEK?pid=Api&P=0&h=180"
},
{
  id: 9,
  title: "Dark",
  category: "Trending",
  rating: 8.7,
  image: "https://tse1.mm.bing.net/th/id/OIP.R0cE5qHkK0xP0FQ8ZQqXcAHaEK?pid=Api&P=0&h=180"
},
{
  id: 10,
  title: "Narcos",
  category: "Trending",
  rating: 8.8,
  image: "https://tse4.mm.bing.net/th/id/OIP.xRZ0s0o7rZ7g5yJ2o6Yx0wHaEK?pid=Api&P=0&h=180"
},
{
  id: 11,
  title: "The Witcher",
  category: "Trending",
  rating: 8.0,
  image: "https://tse2.mm.bing.net/th/id/OIP.K7nH7pZg5F4kP9uJ3mYvXgHaEK?pid=Api&P=0&h=180"
},
{
  id: 12,
  title: "Squid Game",
  category: "Trending",
  rating: 8.0,
  image: "https://tse3.mm.bing.net/th/id/OIP.3z0kXr1qv0w6zYFZ9zvW7gHaEK?pid=Api&P=0&h=180"
},
{
  id: 13,
  title: "Lucifer",
  category: "Trending",
  rating: 8.1,
  image: "https://tse2.mm.bing.net/th/id/OIP.yY2i0s2P4f7z5nZ9Z3pV2wHaEK?pid=Api&P=0&h=180"
},
{
  id: 14,
  title: "The Crown",
  category: "Trending",
  rating: 8.6,
  image: "https://tse4.mm.bing.net/th/id/OIP.f1vX3nQ7k1c6b5s8lXwY6QHaEK?pid=Api&P=0&h=180"
},
{
  id: 15,
  title: "Black Mirror",
  category: "Trending",
  rating: 8.7,
  image: "https://tse1.mm.bing.net/th/id/OIP.F3cFv1F6z9k0Q3m7h4uQ2QHaEK?pid=Api&P=0&h=180"
},
{
  id: 16,
  title: "Ozark",
  category: "Trending",
  rating: 8.5,
  image: "https://tse3.mm.bing.net/th/id/OIP.P5y7W3o9k0s8g2y6m4uX0wHaEK?pid=Api&P=0&h=180"
},

{
  id: 17,
  title: "Extraction",
  category: "Action",
  rating: 6.8,
  image: "https://tse2.mm.bing.net/th/id/OIP.Y8q5x4r8y0c7n3k5z9l2wQHaEK?pid=Api&P=0&h=180"
},
{
  id: 18,
  title: "6 Underground",
  category: "Action",
  rating: 6.1,
  image: "https://tse4.mm.bing.net/th/id/OIP.x9s8z3p4k2m7v6w1y5r8tQHaEK?pid=Api&P=0&h=180"
},
{
  id: 19,
  title: "Red Notice",
  category: "Action",
  rating: 6.3,
  image: "https://tse3.mm.bing.net/th/id/OIP.k4m9x2z7p1c8v5b3y6w0qAHaEK?pid=Api&P=0&h=180"
},
{
  id: 20,
  title: "The Gray Man",
  category: "Action",
  rating: 6.5,
  image: "https://tse2.mm.bing.net/th/id/OIP.j3x7c8z5y0k2p9m4v6w1qAHaEK?pid=Api&P=0&h=180"
},
{
  id: 21,
  title: "Army of the Dead",
  category: "Action",
  rating: 5.8,
  image: "https://tse1.mm.bing.net/th/id/OIP.y7p8z3k4c5m6v9w1x2r0qAHaEK?pid=Api&P=0&h=180"
},
{
  id: 22,
  title: "The Old Guard",
  category: "Action",
  rating: 6.7,
  image: "https://tse4.mm.bing.net/th/id/OIP.v8k3m5x7y2c9z1p6w4r0qAHaEK?pid=Api&P=0&h=180"
},
{
  id: 23,
  title: "Triple Frontier",
  category: "Action",
  rating: 6.4,
  image: "https://tse3.mm.bing.net/th/id/OIP.z2x5c7v9b1n4m6k8p0q3rAHaEK?pid=Api&P=0&h=180"
},

{
  id: 24,
  title: "Death Note",
  category: "Trending",
  rating: 9.0,
  image: "https://tse2.mm.bing.net/th/id/OIP.k2m9x3z7y1c8v5b4p6w0qAHaEK?pid=Api&P=0&h=180"
},
{
  id: 25,
  title: "Attack on Titan",
  category: "Trending",
  rating: 9.1,
  image: "https://tse3.mm.bing.net/th/id/OIP.x8z3p5k4m7v6c2y9w1r0qAHaEK?pid=Api&P=0&h=180"
},
{
  id: 26,
  title: "Demon Slayer",
  category: "Trending",
  rating: 8.7,
  image: "https://tse4.mm.bing.net/th/id/OIP.y2c5z7x9p1k4m6v8w3r0qAHaEK?pid=Api&P=0&h=180"
},
{
  id: 27,
  title: "Jujutsu Kaisen",
  category: "Trending",
  rating: 8.6,
  image: "https://tse1.mm.bing.net/th/id/OIP.m4x7z9p3k1c8v5y2w6r0qAHaEK?pid=Api&P=0&h=180"
},

{
  id: 28,
  title: "Interstellar",
  category: "Trending",
  rating: 8.6,
  image: "https://tse3.mm.bing.net/th/id/OIP.Lz5r7c8k9m1v2x3y4w0qAHaEK?pid=Api&P=0&h=180"
},
{
  id: 29,
  title: "Inception",
  category: "Trending",
  rating: 8.8,
  image: "https://tse1.mm.bing.net/th/id/OIP.q4w5e6r7t8y9u0i1o2p3aAHaEK?pid=Api&P=0&h=180"
},
{
  id: 30,
  title: "The Dark Knight",
  category: "Action",
  rating: 9.0,
  image: "https://tse2.mm.bing.net/th/id/OIP.s3d4f5g6h7j8k9l0z1x2cAHaEK?pid=Api&P=0&h=180"
},
{
  id: 31,
  title: "Fight Club",
  category: "Trending",
  rating: 8.8,
  image: "https://tse4.mm.bing.net/th/id/OIP.w1e2r3t4y5u6i7o8p9a0sAHaEK?pid=Api&P=0&h=180"
},
{
  id: 32,
  title: "Shutter Island",
  category: "Trending",
  rating: 8.2,
  image: "https://tse3.mm.bing.net/th/id/OIP.z9x8c7v6b5n4m3k2j1h0gAHaEK?pid=Api&P=0&h=180"
},
{
  id: 33,
  title: "The Irishman",
  category: "Trending",
  rating: 7.8,
  image: "https://tse2.mm.bing.net/th/id/OIP.p0o9i8u7y6t5r4e3w2q1aAHaEK?pid=Api&P=0&h=180"
},
{
  id: 34,
  title: "Bird Box",
  category: "Trending",
  rating: 6.6,
  image: "https://tse1.mm.bing.net/th/id/OIP.a1s2d3f4g5h6j7k8l9z0xAHaEK?pid=Api&P=0&h=180"
},
{
  id: 35,
  title: "Enola Holmes",
  category: "Trending",
  rating: 6.6,
  image: "https://tse4.mm.bing.net/th/id/OIP.l1k2j3h4g5f6d7s8a9p0oAHaEK?pid=Api&P=0&h=180"
},
{
  id: 36,
  title: "The Platform",
  category: "Trending",
  rating: 7.0,
  image: "https://tse3.mm.bing.net/th/id/OIP.m1n2b3v4c5x6z7a8s9d0fAHaEK?pid=Api&P=0&h=180"
},
];

export default movies;