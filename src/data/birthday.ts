export interface Memory { date: string; title: string; description: string; image: string; caption: string }
export const birthdayConfig = {
  name: "Serey Seavor", birthdayDate: "2026-08-20",
  introMessage: "Hey, I made something special for you ❤️", heroMessage: "Today is all about you ✨",
  birthdayMessage: ["Happy Birthday!", "I hope your day is filled with happiness, laughter, beautiful memories, and everything you've been wishing for.", "You deserve all the good things coming your way. 😎"],
  giftMessage: "My wish for you is that this year brings you closer to everything you've been dreaming about.",
  finalMessage: "I hope this little surprise made you smile.",
  letter: "I'm really grateful to have a friend like you—someone I can always talk to and be myself around.\n\nThank you for listening, encouraging me, and motivating me whenever I need it. Your support means more to me than you probably realize.\n\nOn your birthday, I hope you receive the same kindness and encouragement that you always give to others. Keep smiling and keep being the amazing person you are.\n\nHappy Birthday, my friend! 🎂❤️",
  appreciation: ["Your smile", "Your kindness", "Your personality", "The way you make people happy", "Your determination", "The memories we've created"],
  memories: [
    {date:"Our First Memory", title:"The Beginning", description:"This is where one of my favorite memories started.", image:"/memories/1.jpg", caption:"A moment worth keeping"},
    {date:"A Little Adventure", title:"The Best Kind of Days", description:"The ordinary moments somehow become extraordinary with you.", image:"/memories/2.jpg", caption:"One for the books"},
    {date:"One of My Favorites", title:"That Smile", description:"A reminder to always make more room for joy.", image:"/memories/3.jpg", caption:"Pure sunshine"}
  ] satisfies Memory[],
  gallery: [
    {image:"/memories/1.jpg",caption:"A precious little moment"},{image:"/memories/2.jpg",caption:"Just us"},{image:"/memories/3.jpg",caption:"Sunshine energy"},{image:"/memories/4.jpg",caption:"A day to remember"},{image:"/memories/5.jpg",caption:"Beautiful memories"},{image:"/memories/6.jpg",caption:"More adventures ahead"}
  ]
} as const;
