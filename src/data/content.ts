// ─────────────────────────────────────────────────────────────
//  SHASTI.EXE — editable personal content
//  Edit everything here. Presentation lives in components/pages.
// ─────────────────────────────────────────────────────────────

export const CONFIG = {
  secretPhrase: "i love u",
  songTitle: "Ey Sandakara",
  songSrc: "/audio/ey-sandakara.mp3", // ← drop the owner's licensed audio file here
  relationshipStatus: "Committed relationship",
  relationshipDuration: "One week",
}

export const LETTER_PARAGRAPHS: string[] = [
  "Hey Shasti Babe,",
  "I don't really know where to start, so I'll start with the truth: this little website exists because one week with you has somehow felt longer — and better — than a lot of time I've spent with other people. In the best way possible.",
  "That late-night confession? I still think about it. The way the night felt quiet, the way you were honest with me, the way everything just… clicked. It wasn't dramatic. It was real. And I knew, right then, that I wanted to keep having those nights with you.",
  "Your smile makes ordinary days better. I mean that literally — a boring Tuesday becomes a good day the second you show up in it. Your random pictures? I genuinely enjoy receiving them. Every single one. They land in my gallery and somehow make my whole day brighter.",
  "And your habit of spamming me? Please never stop. Every notification with your name on it makes me smile before I even open it. It's my favourite kind of interruption.",
  "I love when you randomly call me by my name — just 'Dheena,' out of nowhere, like it's the most natural thing in the world. It does something to me every time. I love your style, your personality, the way you carry yourself. You have this energy that makes people want to be around you, and somehow I get to be the one closest to it.",
  "I feel lucky to have you in my life. Not in a cheesy way — in a real, quiet, grateful way. I want to keep discovering new things about you: your favourite songs, your random thoughts at 2 a.m., the little things that make you laugh. I want to make more memories with you — the big ones and the tiny ordinary ones that somehow become my favourites.",
  "I don't know how you did it, but somehow you managed to make every other girl irrelevant to my attention. You're my favourite person.",
]

export type Reason = { title: string; detail: string }

const R = (title: string, detail: string): Reason => ({ title, detail })

export const REASONS: Reason[] = [
  R("Your smile.", "The kind that fixes a bad day without even trying. One look and the whole mood shifts."),
  R("Your random pictures.", "Every one of them lands in my gallery and quietly makes my day better. Keep them coming."),
  R("The way you spam my notifications.", "My favourite kind of interruption. I smile before I even open the message."),
  R("When you randomly call me by my name.", "Just 'Dheena' out of nowhere. It does something to me every single time."),
  R("Your personality.", "Warm, funny, a little chaotic in the best way — and completely, effortlessly you."),
  R("Your style.", "You have this way of carrying yourself that makes everything around you look better."),
  R("Our late-night conversations.", "The night feels different when it's us. Quieter, warmer, more honest."),
  R("The little things you do without realising.", "The tiny gestures nobody else would notice. I notice all of them."),
  R("The way you make ordinary moments special.", "A normal day with you never stays normal for long."),
  R("Simply because you're you.", "No reason needed. You're Shasti, and that's enough."),
  R("Your laugh.", "The real one — the one you can't hold back. It's my favourite sound."),
  R("The way you get excited about small things.", "Your enthusiasm is contagious. It makes me excited too."),
  R("How you remember things I forgot.", "You keep track of the details. I keep track of you."),
  R("Your random voice notes.", "Hearing you is always better than reading you. Always."),
  R("The way you say my name.", "Say it again. And again. I could listen forever."),
  R("Your confidence.", "You walk into a room and it changes. I've watched it happen."),
  R("How you make me feel chosen.", "Not lucky by accident — chosen on purpose. That's rare."),
  R("Your honesty.", "You say what you mean. With you, I never have to guess."),
  R("The way you tease me.", "Annoying? Yes. Adorable? Also yes. I wouldn't trade it."),
  R("Your late-night thoughts.", "The 2 a.m. version of you is my favourite version of anyone."),
  R("How you care about people.", "You notice when someone's off. You actually care. That's rare."),
  R("Your eyes.", "The way they light up when you're talking about something you love."),
  R("The way you get shy sometimes.", "For someone so confident, the shy moments are my secret favourites."),
  R("Your random questions.", "You ask the things nobody else thinks to ask. It keeps me on my toes."),
  R("How you make silence comfortable.", "Even when we're not talking, it doesn't feel empty. It feels like us."),
  R("Your taste in things.", "Songs, reels, memes — your taste is just… good. I trust it."),
  R("The way you say 'babe'.", "One word from you and my whole day rearranges itself."),
  R("How you handle your bad days.", "You don't pretend. You feel it, you say it, you get through it. I respect that."),
  R("Your curiosity.", "You want to know everything about everything. It makes conversations with you endless."),
  R("The way you make me laugh.", "Not polite laughter. The real, can't-breathe kind."),
  R("How you look in your favourite outfit.", "You already know. I just like saying it."),
  R("Your random 'what are you doing?' texts.", "My answer is always the same: thinking about you."),
  R("The way you remember my small things.", "My favourite food, my mood, my random habits. You pay attention."),
  R("Your energy.", "You bring a kind of warmth into a room that can't be faked."),
  R("How you say goodnight.", "Even the short ones. Especially the short ones."),
  R("Your stubbornness.", "You fight for what you want. It's one of the things I admire most."),
  R("The way you make me want to be better.", "Not perfect. Just better — for you, for us."),
  R("Your handwriting of a heart.", "Every ♡ you send feels like a tiny signature on my day."),
  R("How you make one week feel like a story.", "Seven days, and already there's a chapter I'll never forget."),
  R("Your random compliments.", "Out of nowhere, mid-conversation. They land harder than you know."),
  R("The way you get sleepy mid-talk.", "Half-asleep Shasti is the most honest Shasti. I love her."),
  R("Your loyalty.", "When you care about someone, you care completely. I feel it."),
  R("How you make me feel safe.", "Being myself around you is easy. That's the rarest thing."),
  R("Your little habits.", "The way you type, the way you react, the way you exist. All of it."),
  R("The way you say 'I knowww'.", "With all those w's. It's become my favourite word."),
  R("Your presence.", "Just knowing you're there — even across a screen — changes my day."),
  R("How you make time move differently.", "Hours with you feel like minutes. Minutes without you feel long."),
  R("Your voice when you're excited.", "It goes up an octave and I can't help but smile."),
  R("The way you forgive.", "You don't hold grudges. You choose peace. I learn from that."),
  R("Your dreams.", "The way you talk about what you want in life — I want to be part of all of it."),
  R("How you make me feel like a priority.", "Not an option. Not a backup. A priority. Thank you for that."),
  R("Your random selfies.", "Unfiltered, unposed, just you. My favourite kind of picture."),
  R("The way you say 'tell me again'.", "You like hearing it. Good — because I'll never stop saying it."),
  R("Your courage.", "You say the hard things. The late-night confession took courage. I saw it."),
  R("How you make ordinary food taste better.", "Not literally. But somehow everything's better with you in it."),
  R("Your playlists.", "Every song you send me becomes a song I can't stop replaying."),
  R("The way you get jealous.", "Cute jealous. The kind that proves you care. I take it as a compliment."),
  R("Your hugs.", "Even the virtual ones. Especially the virtual ones, because I have to imagine them."),
  R("How you make me feel understood.", "You get the parts of me I don't explain. That's rare."),
  R("Your random 'I miss you' moments.", "They hit different every time. I miss you too, always."),
  R("The way you laugh at my bad jokes.", "Even the ones that don't deserve it. Especially those."),
  R("Your independence.", "You don't need anyone. And yet you choose me. That means everything."),
  R("How you make my name sound good.", "Nobody says 'Dheena' like you do. Nobody."),
  R("Your late-night confessions.", "The things you only say when the world is asleep. I treasure them."),
  R("The way you make me feel like home.", "Not a place. A person. You."),
  R("Your random acts of kindness.", "Small ones. The kind that show who you really are."),
  R("How you look at the world.", "Curious, hopeful, a little mischievous. I want to see it through your eyes."),
  R("Your 'good morning' texts.", "They set the tone for my whole day. Every day."),
  R("The way you get competitive.", "Board games, quizzes, anything — you play to win. I love that fire."),
  R("Your soft side.", "Under all the confidence, there's this softness. I get to see it. I'm grateful."),
  R("How you make me feel like a team.", "It's not me and you. It's us. You make that real."),
  R("Your random photo dumps.", "Ten pictures of nothing in particular. All of them perfect."),
  R("The way you say my name when you're sleepy.", "Half-awake, fully honest. My favourite version of you."),
  R("Your taste in chaos.", "A little chaos, a little calm — you balance both beautifully."),
  R("How you make me want to plan things.", "Trips, movies, everything. I keep imagining us doing it all."),
  R("Your honesty about feelings.", "You don't hide them. You feel them out loud. That's brave."),
  R("The way you make me feel seen.", "Not just looked at. Seen. There's a difference, and you know it."),
  R("Your random voice notes at midnight.", "The world is asleep and you're telling me about your day. Perfect."),
  R("How you make every 'goodnight' harder.", "Because ending the day means ending us — even for a few hours."),
  R("Your little victories.", "When something goes right for you, I celebrate like it's mine."),
  R("The way you make me feel like a hero.", "Your Batman gets to be a hero because you make him feel like one."),
  R("Your Catwoman energy.", "Mysterious, confident, a little dangerous. You were made for the role."),
  R("How you make me feel like the story matters.", "This isn't just a week. It's the beginning of something."),
  R("Your random 'what if' questions.", "You think about the future. So do I. With you in it."),
  R("The way you make me feel chosen every day.", "Not once. Every day, you choose me again. I notice."),
  R("Your smile in pictures.", "The one where you're not even trying. Those are the best ones."),
  R("How you make me feel like I belong.", "With you, I don't have to perform. I just have to be."),
  R("Your random 'I love you' energy.", "Even when you don't say it, I feel it in everything you do."),
  R("The way you make me feel like a king.", "Your Batman, your king — whatever title, you make me feel royal."),
  R("Your curiosity about me.", "You ask about my day, my thoughts, my everything. Nobody does that like you."),
  R("How you make me feel like time is precious.", "Every hour with you feels like it matters. Because it does."),
  R("Your random memes.", "You send me the ones that are exactly my humour. You know me too well."),
  R("The way you make me feel like I'm enough.", "Not perfect. Enough. For you, that's always been enough."),
  R("Your presence in my thoughts.", "You're in almost every thought I have. Good ones, mostly."),
  R("How you make me feel like this is real.", "Not a phase. Not a fling. Real. You make it real."),
  R("Your random 'Dheena' moments.", "Out of nowhere, mid-day, mid-conversation. My favourite interruption."),
  R("The way you make me feel like a story worth telling.", "If someone wrote our story, they'd start with that night."),
  R("Your heart.", "The way you love — fully, honestly, without holding back. That's why I'm here."),
  R("Simply because you're Shasti.", "Reason 101 is the same as reason 1: you're you. And I love you."),
]

// ── Memory timeline (edit placeholders with real details) ──
export const MEMORY_CHAPTERS = [
  { tag: "Chapter One", title: "The Night It Began", body: "It was a late night — the kind where the world goes quiet and the real conversations start. [Add the date / how the night started here.]" },
  { tag: "Chapter Two", title: "The Confession", body: "You said what you felt, honestly and without holding back. [Add what was said, in your own words, here.]" },
  { tag: "Chapter Three", title: "The Beginning", body: "From that night, everything changed — in the best way. [Add what changed for you here.]" },
  { tag: "Chapter Four", title: "One Week Down", body: "Seven days later, and it already feels like a story worth telling. [Add your favourite moment from this week here.]" },
]

export const MEMORY_STORY =
  "Some nights you just remember. Not because they were planned, but because they were real. That night, the stars did their thing, the moon did its thing, and you — you said the words that started everything. This chapter is yours to finish, Shasti. [Add the full story here.]"

// ── Batman × Catwoman dialogue (original, playful) ──
export const DIALOGUE = [
  { who: "Batman", text: "So the Catwoman finally showed up in my city." },
  { who: "Catwoman", text: "Your city? I thought it was ours now, Batman." },
  { who: "Batman", text: "Careful. I protect this place. I don't share it." },
  { who: "Catwoman", text: "Good thing I never asked to share it. I just moved in." },
  { who: "Batman", text: "…You did what?" },
  { who: "Catwoman", text: "Nine lives, remember? I plan to use them all — with you." },
  { who: "Batman", text: "Then it's settled. Same city. Same story. Same us." },
  { who: "Catwoman", text: "Took you long enough to figure it out, Batman." },
]

// ── Little things scrapbook (add photo paths to populate) ──
export type LittleThing = { title: string; caption: string; photo?: string; icon: string }
export const LITTLE_THINGS: LittleThing[] = [
  { title: "Her Smile", caption: "The one that fixes everything. [Add a favourite photo of her smile here.]", icon: "smile" },
  { title: "Her Random Pictures", caption: "Unposed, unfiltered, perfect. My gallery thanks her.", icon: "camera" },
  { title: "Her Notification Spam", caption: "Every ping with her name is a tiny gift.", icon: "bell" },
  { title: "Her Randomly Saying “Dheena”", caption: "Out of nowhere. My favourite sound in the world.", icon: "heart" },
  { title: "Her Outfits & Style", caption: "She could wear anything and make it iconic.", icon: "sparkles" },
  { title: "The Late-Night Confession", caption: "The night everything began. Chapter one of us.", icon: "moon" },
]

export const APPRECIATION_MESSAGE =
  "Then hear it again, Shasti Babe — I love you. Not in a small, casual way. In the way that makes a guy build an entire website at midnight because words alone weren't enough. You're my favourite person, my favourite notification, my favourite late-night conversation. You're the reason ordinary days feel special. And I'm not going anywhere. So — tell me again? Fine. I love you. Again. And again. And again."

export const PAGES = [
  { id: "letter", label: "The Letter", num: "01" },
  { id: "reasons", label: "101 Reasons", num: "02" },
  { id: "memory", label: "Our Memory", num: "03" },
  { id: "gotham", label: "Batman × Catwoman", num: "04" },
  { id: "little", label: "Little Things", num: "05" },
  { id: "question", label: "The Question", num: "06" },
  { id: "ending", label: "The Last Message", num: "07" },
] as const

export type PageId = (typeof PAGES)[number]["id"]
