export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  date: string
  readTime: string
  category: string
  tags: string[]
  image: string
  author: string
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Winter Wanderlust: My Darjeeling Adventure",
    slug: "darjeeling-winter-adventure",
    excerpt:
      "Last winter, I embarked on a solo journey to the Queen of Hills. From sunrise at Tiger Hill to the warmth of local tea gardens, here's my complete Darjeeling experience.",
    content: `Last winter, I packed my bags and headed to Darjeeling, the Queen of Hills. The journey from Siliguri to Darjeeling is always magical, but in winter, it transforms into something ethereal.

## The Journey Begins

The toy train ride through the misty mountains was my first taste of what was to come. As we climbed higher, the air grew crisp and the views more spectacular. The winter fog added a mysterious charm to the entire landscape.

## Tiger Hill Sunrise

Waking up at 4 AM for the Tiger Hill sunrise was worth every shiver. Watching the first rays of sun illuminate the Kanchenjunga range while sipping hot tea from a local vendor - that's a memory I'll cherish forever.

## Tea Gardens and Local Culture

The tea gardens in winter have their own beauty. The workers, wrapped in colorful shawls, picking tea leaves in the morning mist created scenes straight out of a painting. I spent hours talking to local tea garden workers, learning about their lives and the tea-making process.

## Food and Warmth

The local momos and thukpa were my saviors against the cold. There's something special about eating hot, steaming food while the cold wind whistles outside. The local restaurants became my refuge, and I made friends with fellow travelers over shared meals.

## Reflections

This trip taught me that sometimes the best adventures happen when you step out of your comfort zone. Darjeeling in winter might be cold, but it warms your soul in ways you never expect.`,
    date: "December 15, 2024",
    readTime: "8 min read",
    category: "Travel",
    tags: ["Darjeeling", "Winter Travel", "Solo Trip", "Mountains", "Tea Gardens"],
    image: "/darjeeling-winter-sunrise.png",
    author: "Abhishek Bardhan",
  },
  {
    id: "2",
    title: "The Queen's Gambit: Chess Psychology and Strategy",
    slug: "queens-gambit-chess-psychology",
    excerpt:
      "Analyzing the chess scenes from The Queen's Gambit and what they teach us about strategic thinking, pattern recognition, and the psychology of competitive chess.",
    content: `The Queen's Gambit didn't just entertain millions; it brought chess into mainstream culture like never before. As someone who's been passionate about chess since childhood, I found the series fascinating not just for its storytelling, but for its accurate portrayal of chess psychology.

## The Opening Game

The Queen's Gambit opening (1.d4 d5 2.c4) is more than just a chess move - it's a philosophy. You sacrifice a pawn to gain control of the center, much like how Beth Harmon sacrifices her comfort zone to pursue excellence.

## Pattern Recognition

One of the most accurate aspects of the show is how it portrays pattern recognition. Beth's ability to see the board on the ceiling isn't just dramatic license - it's how chess masters actually think. They see patterns, not just individual pieces.

## The Psychology of Competition

The series brilliantly captures the mental aspect of chess. The pressure, the time constraints, the psychological warfare - it's all real. I've experienced that tunnel vision during important games, where the world narrows down to just 64 squares.

## Chess as Life Metaphor

What struck me most was how chess became a metaphor for life in the series. Every game teaches you something about decision-making, consequences, and thinking several moves ahead - skills that are invaluable beyond the chessboard.

## My Chess Journey

Watching the series reminded me of my own chess journey. Starting at age 8, I was fascinated by how a simple board game could be so complex. Though I stepped back from competitive play for studies, chess remains a part of my DNA.

The Queen's Gambit reminded the world that chess isn't just a game - it's an art, a science, and a way of thinking that can transform how you approach life itself.`,
    date: "November 28, 2024",
    readTime: "6 min read",
    category: "Chess",
    tags: ["Chess", "Strategy", "Psychology", "Queens Gambit", "Analysis"],
    image: "/chess-endgame-king-pawn.png",
    author: "Abhishek Bardhan",
  },
  {
    id: "3",
    title: "Desi Hip Hop: The Sound of My Generation",
    slug: "desi-hip-hop-music-taste",
    excerpt:
      "Exploring my love for desi hip hop artists like Seedhe Maut, KR$NA, Divine, Raftaar, and Karma. How Indian rap became the voice of our generation and shaped my musical identity.",
    content: `Music has always been my escape, but desi hip hop? That's my identity. From the raw energy of Seedhe Maut to the lyrical genius of KR$NA, Indian rap has become the soundtrack of my generation.

## The Revolution Begins

When Divine dropped "Yeh Mera Bombay" and "Mere Gully Mein," something shifted in Indian music. Suddenly, we had artists rapping about our streets, our struggles, our dreams - in our language, with our references.

## Seedhe Maut: The Pioneers

Calm and Encore changed the game with their wordplay and flow. Tracks like "Namastute" and "101" showcase why they're considered among the best in the scene. Their ability to blend humor with hard-hitting social commentary is unmatched.

## KR$NA: The Lyrical Assassin

Krishna Kaul, aka KR$NA, brought technical rap to India. His tracks like "No Cap" and "Overdrive" demonstrate complex rhyme schemes that rival international standards. His beef tracks are legendary, but his introspective songs hit different.

## Divine: The Gully Boy

Vivian Fernandes made us believe that dreams from the slums could reach the stars. "Jungli Sher" and "Satya" aren't just songs; they're anthems of resilience. His collaboration with international artists put Indian hip hop on the global map.

## Raftaar: The Versatile Veteran

From "Swag Mera Desi" to "Damn," Raftaar proved that desi hip hop could be both commercial and credible. His ability to switch between hardcore rap and mainstream appeal is remarkable.

## Karma: The New Wave

Karma represents the new generation of Indian rappers who aren't afraid to experiment. His melodic approach to rap, combined with hard-hitting lyrics, creates a unique sound that resonates with young India.

## Why Desi Hip Hop Matters

This isn't just music; it's a movement. These artists rap about unemployment, social issues, love, heartbreak, and dreams - all in a language and context we understand. They've given voice to a generation that felt unheard.

## My Playlist Philosophy

My Spotify playlist is a mix of these legends alongside international artists like Radiohead and Linkin Park. But there's something special about hearing "Bantai" or "Machayenge" that connects with my soul in a way English rap never could.

Desi hip hop taught me that authenticity trumps everything. These artists stayed true to their roots while reaching for the stars, and that's a lesson that goes beyond music.`,
    date: "October 20, 2024",
    readTime: "7 min read",
    category: "Music",
    tags: ["Hip Hop", "Desi Rap", "Music", "Culture", "Indian Artists"],
    image: "/hip-hop-chess-connection.png",
    author: "Abhishek Bardhan",
  },
]
