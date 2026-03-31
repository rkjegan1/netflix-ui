const movies = [
  // 🔥 TRENDING
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
    title: "Dark",
    category: "Sci-Fi",
    rating: 8.7,
    image: "https://tse1.mm.bing.net/th/id/OIP.R0cE5qHkK0xP0FQ8ZQqXcAHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 3,
    title: "The Witcher",
    category: "Fantasy",
    rating: 8.0,
    image: "https://tse2.mm.bing.net/th/id/OIP.K7nH7pZg5F4kP9uJ3mYvXgHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 4,
    title: "Black Mirror",
    category: "Sci-Fi",
    rating: 8.7,
    image: "https://tse1.mm.bing.net/th/id/OIP.F3cFv1F6z9k0Q3m7h4uQ2QHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 5,
    title: "Money Heist",
    category: "Crime",
    rating: 8.2,
    image: "https://tse4.mm.bing.net/th/id/OIP.9rS5lZlG9C3cWc4kN9EwHQHaEK?pid=Api&P=0&h=180"
  },

  // 🎭 DRAMA / CRIME
  {
    id: 6,
    title: "Breaking Bad",
    category: "Crime",
    rating: 9.5,
    image: "https://tse1.mm.bing.net/th/id/OIP.MNPtU6w-qr5nbeIcScBFCAHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 7,
    title: "Peaky Blinders",
    category: "Crime",
    rating: 8.8,
    image: "https://tse3.mm.bing.net/th/id/OIP.EzU4v1V4G8t7MZQw8z8sLQHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 8,
    title: "Narcos",
    category: "Crime",
    rating: 8.8,
    image: "https://tse4.mm.bing.net/th/id/OIP.xRZ0s0o7rZ7g5yJ2o6Yx0wHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 9,
    title: "Ozark",
    category: "Drama",
    rating: 8.5,
    image: "https://tse3.mm.bing.net/th/id/OIP.P5y7W3o9k0s8g2y6m4uX0wHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 10,
    title: "The Crown",
    category: "Drama",
    rating: 8.6,
    image: "https://tse4.mm.bing.net/th/id/OIP.f1vX3nQ7k1c6b5s8lXwY6QHaEK?pid=Api&P=0&h=180"
  },

  // 😂 COMEDY
  {
    id: 11,
    title: "The Office",
    category: "Comedy",
    rating: 8.8,
    image: "https://tse3.mm.bing.net/th/id/OIP.U-c4u1orbJVeuqI0k4aIwAHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 12,
    title: "Brooklyn Nine-Nine",
    category: "Comedy",
    rating: 8.4,
    image: "https://tse4.mm.bing.net/th/id/OIP.Wz7YgQx3Yk2l9p8n7c6b5QHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 13,
    title: "Friends",
    category: "Comedy",
    rating: 8.9,
    image: "https://tse2.mm.bing.net/th/id/OIP.7p8q9r0s1t2u3v4w5x6y7QHaEK?pid=Api&P=0&h=180"
  },

  // 🔫 ACTION
  {
    id: 14,
    title: "Avengers",
    category: "Action",
    rating: 8.0,
    image: "https://tse1.mm.bing.net/th/id/OIP.V1IuV7C-1_kNnIr2bPC7ngHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 15,
    title: "John Wick",
    category: "Action",
    rating: 7.8,
    image: "https://tse1.mm.bing.net/th/id/OIP.nGTJJr3Jhd9Fuy3YGK-gUAHaEA?pid=Api&P=0&h=180"
  },
  {
    id: 16,
    title: "Extraction",
    category: "Action",
    rating: 6.8,
    image: "https://tse2.mm.bing.net/th/id/OIP.Y8q5x4r8y0c7n3k5z9l2wQHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 17,
    title: "Red Notice",
    category: "Action",
    rating: 6.3,
    image: "https://tse3.mm.bing.net/th/id/OIP.k4m9x2z7p1c8v5b3y6w0qAHaEK?pid=Api&P=0&h=180"
  },

  // 🚀 SCI-FI
  {
    id: 18,
    title: "Interstellar",
    category: "Sci-Fi",
    rating: 8.6,
    image: "https://tse3.mm.bing.net/th/id/OIP.Lz5r7c8k9m1v2x3y4w0qAHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 19,
    title: "Inception",
    category: "Sci-Fi",
    rating: 8.8,
    image: "https://tse1.mm.bing.net/th/id/OIP.q4w5e6r7t8y9u0i1o2p3aAHaEK?pid=Api&P=0&h=180"
  },

  // 🧠 THRILLER
  {
    id: 20,
    title: "Shutter Island",
    category: "Thriller",
    rating: 8.2,
    image: "https://tse3.mm.bing.net/th/id/OIP.z9x8c7v6b5n4m3k2j1h0gAHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 21,
    title: "The Platform",
    category: "Thriller",
    rating: 7.0,
    image: "https://tse3.mm.bing.net/th/id/OIP.m1n2b3v4c5x6z7a8s9d0fAHaEK?pid=Api&P=0&h=180"
  },

  // 🎌 ANIME
  {
    id: 22,
    title: "Death Note",
    category: "Anime",
    rating: 9.0,
    image: "https://tse2.mm.bing.net/th/id/OIP.k2m9x3z7y1c8v5b4p6w0qAHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 23,
    title: "Attack on Titan",
    category: "Anime",
    rating: 9.1,
    image: "https://tse3.mm.bing.net/th/id/OIP.x8z3p5k4m7v6c2y9w1r0qAHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 24,
    title: "Demon Slayer",
    category: "Anime",
    rating: 8.7,
    image: "https://tse4.mm.bing.net/th/id/OIP.y2c5z7x9p1k4m6v8w3r0qAHaEK?pid=Api&P=0&h=180"
  },

  // 🎭 MISC
  {
    id: 25,
    title: "Fight Club",
    category: "Drama",
    rating: 8.8,
    image: "https://tse4.mm.bing.net/th/id/OIP.w1e2r3t4y5u6i7o8p9a0sAHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 26,
    title: "The Irishman",
    category: "Drama",
    rating: 7.8,
    image: "https://tse2.mm.bing.net/th/id/OIP.p0o9i8u7y6t5r4e3w2q1aAHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 27,
    title: "Bird Box",
    category: "Thriller",
    rating: 6.6,
    image: "https://tse1.mm.bing.net/th/id/OIP.a1s2d3f4g5h6j7k8l9z0xAHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 28,
    title: "Enola Holmes",
    category: "Drama",
    rating: 6.6,
    image: "https://tse4.mm.bing.net/th/id/OIP.l1k2j3h4g5f6d7s8a9p0oAHaEK?pid=Api&P=0&h=180"
  },
{
  id: 29,
  title: "Squid Game",
  category: "Trending",
  rating: 8.0,
  image: "https://tse3.mm.bing.net/th/id/OIP.3z0kXr1qv0w6zYFZ9zvW7gHaEK?pid=Api&P=0&h=180"
},
{
  id: 30,
  title: "Lucifer",
  category: "Trending",
  rating: 8.1,
  image: "https://tse2.mm.bing.net/th/id/OIP.yY2i0s2P4f7z5nZ9Z3pV2wHaEK?pid=Api&P=0&h=180"
},
{
  id: 31,
  title: "The Dark Knight",
  category: "Action",
  rating: 9.0,
  image: "https://tse2.mm.bing.net/th/id/OIP.s3d4f5g6h7j8k9l0z1x2cAHaEK?pid=Api&P=0&h=180"
},
{
  id: 32,
  title: "Mad Max Fury Road",
  category: "Action",
  rating: 8.1,
  image: "https://tse1.mm.bing.net/th/id/OIP.yxF6r2t7k9p4x8m3v1c0qAHaEK?pid=Api&P=0&h=180"
},
{
  id: 33,
  title: "Gladiator",
  category: "Action",
  rating: 8.5,
  image: "https://tse3.mm.bing.net/th/id/OIP.n2c4v6b8m0k1l3j5h7g9fAHaEK?pid=Api&P=0&h=180"
},
{
  id: 34,
  title: "The Big Bang Theory",
  category: "Comedy",
  rating: 8.1,
  image: "https://tse2.mm.bing.net/th/id/OIP.q1w2e3r4t5y6u7i8o9p0aAHaEK?pid=Api&P=0&h=180"
},
{
  id: 35,
  title: "How I Met Your Mother",
  category: "Comedy",
  rating: 8.3,
  image: "https://tse4.mm.bing.net/th/id/OIP.l3k5j7h9g1f2d4s6a8p0oAHaEK?pid=Api&P=0&h=180"
},
{
  id: 36,
  title: "Jujutsu Kaisen",
  category: "Anime",
  rating: 8.6,
  image: "https://tse1.mm.bing.net/th/id/OIP.m4x7z9p3k1c8v5y2w6r0qAHaEK?pid=Api&P=0&h=180"
},
{
  id: 37,
  title: "Tokyo Revengers",
  category: "Anime",
  rating: 7.9,
  image: "https://tse3.mm.bing.net/th/id/OIP.j8k6l4m2n0b9v7c5x3z1qAHaEK?pid=Api&P=0&h=180"
},
{
  id: 38,
  title: "Blade Runner 2049",
  category: "Sci-Fi",
  rating: 8.0,
  image: "https://tse2.mm.bing.net/th/id/OIP.b4n6m8v0c2x3z5a7s9d1fAHaEK?pid=Api&P=0&h=180"
},
{
  id: 39,
  title: "The Matrix",
  category: "Sci-Fi",
  rating: 8.7,
  image: "https://tse4.mm.bing.net/th/id/OIP.r1t2y3u4i5o6p7a8s9d0fAHaEK?pid=Api&P=0&h=180"
},
{
  id: 40,
  title: "Forrest Gump",
  category: "Drama",
  rating: 8.8,
  image: "https://tse3.mm.bing.net/th/id/OIP.x1c2v3b4n5m6k7j8h9g0fAHaEK?pid=Api&P=0&h=180"
},
{
  id: 41,
  title: "The Social Network",
  category: "Drama",
  rating: 7.7,
  image: "https://tse2.mm.bing.net/th/id/OIP.z1x2c3v4b5n6m7k8j9h0gAHaEK?pid=Api&P=0&h=180"
},
{
  id: 42,
  title: "Gone Girl",
  category: "Thriller",
  rating: 8.1,
  image: "https://tse1.mm.bing.net/th/id/OIP.a9s8d7f6g5h4j3k2l1z0xAHaEK?pid=Api&P=0&h=180"
},
{
  id: 43,
  title: "Prisoners",
  category: "Thriller",
  rating: 8.1,
  image: "https://tse4.mm.bing.net/th/id/OIP.q9w8e7r6t5y4u3i2o1p0aAHaEK?pid=Api&P=0&h=180"
},
];

export default movies;