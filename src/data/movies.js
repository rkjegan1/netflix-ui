const movies = [
  // 🔥 TRENDING
  {
    id: 1,
    title: "Stranger Things",
    category: "Trending",
    rating: 8.7,
    link: "https://www.netflix.com/watch/81599029?trackId=14170035",
    image: "https://tse4.mm.bing.net/th/id/OIP.m_4MTvgjdi1NTdbIwASd_gHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 2,
    title: "Dark",
    category: "Sci-Fi",
    rating: 8.7,
    link:"https://www.netflix.com/watch/80114790?trackId=284616272&tctx=0%2C0%2C81617e86-3029-4cdd-b966-6e9259095bff%2C81617e86-3029-4cdd-b966-6e9259095bff%7C%3DeyJwYWdlSWQiOiIxYTBjYzVlNi01YjNhLTQxNWQtODNkMy01OWUyNjYwNGJkOGEvMS8vZGFyay8wLzAiLCJsb2NhbFNlY3Rpb25JZCI6IjIifQ%3D%3D%2C%2C%2C%2C%2C%2CVideo%3A80100172%2CdetailsPagePlayButton",
    image: "https://tse1.mm.bing.net/th/id/OIP.S3FMXqsR1528DGJ5mLFDjAHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 3,
    title: "The Witcher",
    category: "Fantasy",
    rating: 8.0,
    image: "https://tse4.mm.bing.net/th/id/OIP.SQJIMi0rfLJNBe7AbWAfWwHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 4,
    title: "Black Mirror",
    category: "Sci-Fi",
    rating: 8.7,
    link:"https://www.netflix.com/watch/81716301?trackId=284616272",
    image: "https://tse2.mm.bing.net/th/id/OIP.1FNm3eMsOYDuMAWTzY916gHaEk?pid=Api&P=0&h=180"
  },
  {
    id: 5,
    title: "Money Heist",
    category: "Crime",
    rating: 8.2,
    image: "https://tse4.mm.bing.net/th/id/OIP.rxp_SXDZm6XBBsL_4ImqeAHaEK?pid=Api&P=0&h=180"
  },
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
    image: "https://tse3.mm.bing.net/th/id/OIP.7XC02UHjAlJz3cxhoQ_g4AHaFj?pid=Api&P=0&h=180"
  },
  {
    id: 8,
    title: "Narcos",
    category: "Crime",
    rating: 8.8,
    image: "https://tse4.mm.bing.net/th/id/OIP.4aWBON2k9Nb3xBKedDqw3wHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 9,
    title: "Ozark",
    category: "Drama",
    rating: 8.5,
    image: "https://tse1.mm.bing.net/th/id/OIP.mhen_TBkOnry4Utgc-jt4gHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 10,
    title: "The Crown",
    category: "Drama",
    rating: 8.6,
    image: "https://tse4.mm.bing.net/th/id/OIP.BWZELlMOK7VPkmEc4gcL-AHaEK?pid=Api&P=0&h=180"
  },

  {
    id: 11,
    title: "The Office",
    category: "Comedy",
    rating: 8.8,
    link:"https://www.netflix.com/watch/70069638?trackId=14170287&tctx=2%2C0%2C465f7877-5097-4bad-a921-9ab5d0193ee9-389093682%2CNES_F9092986C8A7BB128023630323A502-994911DC4F528C-659C691187_p_1775368520296%2C%2C%2C%2C%2C%2CVideo%3A70136120%2CdetailsPagePlayButton",
    image: "https://tse3.mm.bing.net/th/id/OIP.U-c4u1orbJVeuqI0k4aIwAHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 12,
    title: "Brooklyn Nine-Nine",
    category: "Comedy",
    rating: 8.4,
    image: "https://tse2.mm.bing.net/th/id/OIP.cXtILW3_C2CbCbdu7dFATgHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 13,
    title: "Friends",
    category: "Comedy",
    rating: 8.9,
    image: "https://tse2.mm.bing.net/th/id/OIP.fFYxlMgx1UmJCmVOQfaSwAHaEK?pid=Api&P=0&h=180"
  },

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
    image: "https://tse4.mm.bing.net/th/id/OIP.seDvPvDXjJE2onpz5yyecgHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 17,
    title: "Red Notice",
    category: "Action",
    rating: 6.3,
    image: "https://tse3.mm.bing.net/th/id/OIP.YDhD5PYxcvIJ6QLhw3YCBAHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 18,
    title: "Interstellar",
    category: "Sci-Fi",
    rating: 8.6,
    link:"https://www.hotstar.com/in/paywall?content_id=1971000531&content_title=Interstellar&content_type=MOVIE&entitlement_failed_context=Cglob2xseXdvb2QKBHBhaWQKA3ZpcBIDd2Vi&is_content_paid=true&search_query=interstellar&source=content&user_status=guest",
    image: "https://image.tmdb.org/t/p/w1280/djS3XxneEFjCM6VlCiuuN8QavE6.jpg"
  },
  {
    id: 19,
    title: "Inception",
    category: "Sci-Fi",
    rating: 8.8,
    image: "https://tse2.mm.bing.net/th/id/OIP.07JtZAHeB63sMlMmC3DT-wHaEo?pid=Api&P=0&h=180"
  },

  {
    id: 20,
    title: "Shutter Island",
    category: "Thriller",
    rating: 8.2,
    image: "https://tse4.mm.bing.net/th/id/OIP.0b_q6KKhu_-xoqHVGDUqOgHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 21,
    title: "The Platform",
    category: "Thriller",
    rating: 7.0,
    image: "https://tse3.mm.bing.net/th/id/OIP.CEguVp0DC52rFzDkJA1xkwHaEK?pid=Api&P=0&h=180"
  },

  {
    id: 22,
    title: "Death Note",
    category: "Anime",
    rating: 9.0,
    image: "https://tse2.mm.bing.net/th/id/OIP.RWB6__JVTSAIdXG5ayEKkwHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 23,
    title: "Attack on Titan",
    category: "Anime",
    rating: 9.1,
    image: "https://tse4.mm.bing.net/th/id/OIP.l8kdR8PHy_q2l2X5Ev4L7gHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 24,
    title: "Demon Slayer",
    category: "Anime",
    rating: 8.7,
    image: "https://tse2.mm.bing.net/th/id/OIP.lq9VzzTRaUktAhOXvmLUtAHaEK?pid=Api&P=0&h=180"
  },

  {
    id: 25,
    title: "Fight Club",
    category: "Drama",
    rating: 8.8,
    image: "https://tse3.mm.bing.net/th/id/OIP.Yt1kUfWD4lgIpuQdnW_ZvAHaE8?pid=Api&P=0&h=180"
  },
  {
    id: 26,
    title: "The Irishman",
    category: "Drama",
    rating: 7.8,
    image: "https://tse2.mm.bing.net/th/id/OIP.lbcu0EIXRmd4XmZS34E8BQHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 27,
    title: "Bird Box",
    category: "Thriller",
    rating: 6.6,
    image: "https://tse4.mm.bing.net/th/id/OIP.TVxfnMosjtZZ8vJiF96z0wHaEK?pid=Api&P=0&h=180"
  },
  {
    id: 28,
    title: "Enola Holmes 2",
    category: "Drama",
    rating: 6.6,
    image: "https://tse3.mm.bing.net/th/id/OIP.JOuhnfseEjjWel-8RRwizgHaEK?pid=Api&P=0&h=180"
  },
{
  id: 29,
  title: "Squid Game",
  category: "Trending",
  rating: 8.0,
  link:"https://www.netflix.com/watch/81262746?trackId=284616272",
  image: "https://tse1.mm.bing.net/th/id/OIP.h61ZleX_IXWKtRs5fSvcUAHaD5?pid=Api&P=0&h=180"
},
{
  id: 30,
  title: "Lucifer",
  category: "Trending",
  rating: 8.1,
  link:"https://www.netflix.com/watch/80138256?trackId=284616272&tctx=0%2C0%2C38d18ce3-5c55-4b60-aabd-ec4439e66190%2C38d18ce3-5c55-4b60-aabd-ec4439e66190%7C%3DeyJwYWdlSWQiOiI5Yzg1MmI5Zi02OWYwLTQwMTUtYTkwOC05ZGU1Yzg2MGU3YTEvMS8vbHVjaS8wLzAiLCJsb2NhbFNlY3Rpb25JZCI6IjIifQ%3D%3D%2C%2C%2C%2CtitlesResults%2C%2CVideo%3A80057918%2CdetailsPagePlayButton",
  image: "https://tse1.mm.bing.net/th/id/OIP.w-lgk60EtYcimaHSqTI52gHaEK?pid=Api&P=0&h=180"
},
{
  id: 31,
  title: "The Dark Knight",
  category: "Action",
  rating: 9.0,
  image: "https://tse3.mm.bing.net/th/id/OIP.-62L5CW4zMKurUEA64TJ4gHaFj?pid=Api&P=0&h=180"
},
{
  id: 32,
  title: "Mad Max Fury Road",
  category: "Action",
  rating: 8.1,
  image: "https://tse4.mm.bing.net/th/id/OIP.Ftj3SyFBk6PMdX3NC6PHWQHaDa?pid=Api&P=0&h=180"
},
{
  id: 33,
  title: "Gladiator",
  category: "Action",
  rating: 8.5,
  image: "https://tse1.mm.bing.net/th/id/OIP.3X94Lg8Rl0u-xQcVKw-X2QHaEK?pid=Api&P=0&h=180"
},
{
  id: 34,
  title: "The Big Bang Theory",
  category: "Comedy",
  rating: 8.1,
  image: "https://tse1.mm.bing.net/th/id/OIP.pPzaw0Cp1aVnafXVtrShIgHaEo?pid=Api&P=0&h=180"
},
{
  id: 35,
  title: "How I Met Your Mother",
  category: "Comedy",
  rating: 8.3,
  image: "https://tse4.mm.bing.net/th/id/OIP.HyDbjCx9ns_u4bk3qAkw_AHaEK?pid=Api&P=0&h=180"
},
{
  id: 36,
  title: "Jujutsu Kaisen",
  category: "Anime",
  rating: 8.6,
  image: "https://tse4.mm.bing.net/th/id/OIP.xe2JUNLactt0YX9Eov1FpQHaEO?pid=Api&P=0&h=180"
},
{
  id: 37,
  title: "Tokyo Revengers",
  category: "Anime",
  rating: 7.9,
  image: "https://tse1.mm.bing.net/th/id/OIP.sjeEeUtEgg0HV6FJFMQCCwHaEK?pid=Api&P=0&h=180"
},
{
  id: 38,
  title: "Blade Runner 2049",
  category: "Sci-Fi",
  rating: 8.0,
  image: "https://tse3.mm.bing.net/th/id/OIP.f29nOQeXS__bo5Q0nSJTJwHaEn?pid=Api&P=0&h=180"
},
{
  id: 39,
  title: "The Matrix",
  category: "Sci-Fi",
  rating: 8.7,
  image: "https://tse1.mm.bing.net/th/id/OIP.6p6gwW5M7RMPkGiSus6YPgHaEc?pid=Api&P=0&h=180"
},
{
  id: 40,
  title: "Forrest Gump",
  category: "Drama",
  rating: 8.8,
  image: "https://tse1.mm.bing.net/th/id/OIP.HoKHskMytWzPzoQcdzbwSAHaEK?pid=Api&P=0&h=180"
},

{
  id: 43,
  title: "Prisoners",
  category: "Thriller",
  rating: 8.1,
  image: "https://tse3.mm.bing.net/th/id/OIP.DT0NvA3wgy5-qW56qGbKaQHaEK?pid=Api&P=0&h=180"
},
];

export default movies;