from app.models import db
from app.models.review import Review

def seed_reviews():
    review1 = Review(
        is_recommended = True,
        content = "“I'm very prone to loneliness,” said Kojima. “I think there are similar people around the world — especially gamers. … When they're alone playing video games in their living room, they don't feel like they fit into society or their community. So when people play this game they realize people like them exist all over the world. Knowing that even though I'm lonely, there are other people like me — and that makes you feel at ease. That's what I want people to feel when they play this game.”",
        game_id = 2,
        user_id = 2,
    )
    review2 = Review(
        is_recommended = False,
        content = "TOGETHAAAA, WE WILL DEVOAHHH THE VERYY GOOOUHDS",
        game_id = 1,
        user_id = 1,
    )
    review3 = Review(
        is_recommended = True,
        content = "This game is outstanding! You can do just about every thing. No lake of fun and finding other places to roam. I think it is the best game I ever plaid. I had a stroke recently, I can still play the game. I really enjoy the game very much. Give it a try, it's not like other racing games, so give it a try. Thank you",
        game_id = 3,
        user_id = 3,
    )
    review4 = Review(
        is_recommended = False,
        content = "This game is honestly fun but lately i have not been able to get on the game cause it crashes at loading screen and i spent 60$ or something on a crashs",
        game_id = 3,
        user_id = 2,
    )
    review5 = Review(
        is_recommended = False,
        content = "I like killing the crabs. I do not like the skeleton men because they are annoying. In no part are the skeleton men a bad thing in the game but I just find them a little bit spooky for my taste.",
        game_id = 4,
        user_id = 1,
    )
    review6 = Review(
        is_recommended = True,
        content = "Once you've played one Dynasty Warriors you've played them all, but that does not mean that each individual one is a stagnant experience. Taken as a separate entity in a vacuum DW8 is a really fun and hectic experience. If you're new to the DW franchise this is probably the best entry point so far. However, old school fans of the series will not find anything new here",
        game_id = 5,
        user_id = 5,
    )
    review7 = Review(
        is_recommended = True,
        content = "Sometimes you just wanna feel good while gaming. Dynasty Warriors has always done that for me. From my days of DW3XL on my PS2 to now DW8XLCE on my PC it always puts a smile on my face and helps me forget about everything. I can appreciate the story now that I'm older too (watching Three Kingdoms the TV show to enjoy the drama). It's already 3 times as much content as DW7 (Story alone). Hypotheticals and What-ifs take quite a few tries unless you look it up (and even then). You're getting at least 1 hour per dollar here. DLCs are all extra and not needed but once I finish the story I'll be throwing down for costumes (because they're not usable in Story anyway). We'll see how many hours I have left for Jin and Other. I'm not here to convince you to buy it, I'm just here to tell you I'm having fun. If you buy it I hope you do too.",
        game_id = 5,
        user_id = 1,
    )
    review8 = Review(
        is_recommended = False,
        content = "Horrific controls mar what is probably a fun beat em up in this port. Ive enjoyed console versions of past games in this series but clunky, unresponsive controls are completely unacceptable.",
        game_id = 5,
        user_id = 2,
    )
    review9 = Review(
        is_recommended = True,
        content = "I like anime like I like my partners: big & tall. This game's got some Yao Ming mofos I can climb like a tree",
        game_id = 6,
        user_id = 3,
    )
    review10 = Review(
        is_recommended = True,
        content = "The game is fun, but don't go into it with high expectations. like all anime games it is an amazing framework for a good game but is about as polished as an unusually smooth boulder. If you are willing to put up with the glitches (which include essentially nonfunctional titan physics in the last few levels) then you will enjoy the game quite a bit especially with how much extra content it has. that being said, there is very little game play outside of 'find titan, kill titan, set up base, protect citizen/MP troops. This is fine by me because that is what i wanted in the first place, but watch some gameplay before buying this game so you can make sure you actually want it. also, the multiplayer is dead and does not have cross-platform.",
        game_id = 6,
        user_id = 4,
    )
    review11 = Review(
        is_recommended = True,
        content = "it's not the same without hiroyuki's music but still a really nice game. buy this. don't buy wings of freedom.",
        game_id = 6,
        user_id = 1,
    )
    review12 = Review(
        is_recommended = False,
        content = "I misread the title, I was looking for the game 'Dun', accidentally bought this",
        game_id = 7,
        user_id = 5,
    )
    review13 = Review(
        is_recommended = True,
        content = "House Atreidis: This is my honor. This is my dune. Smugglers: This is my opportunity. This is my dune. Fremen: This is my future. This is my dune. Baron Harkonnen and co.: No, no, no, you all got it wrong. This is not YOURrakis. This Is OURrakis.",
        game_id = 7,
        user_id = 3,
    )
    review14 = Review(
        is_recommended = True,
        content = "Pretty basic RTS mechanics with some irritating features, few units (footmen, long range, strong footmen + some variances of these) and three factions that are very much alike. Landstraat voting gives a small fun extra layer into the game, but overall even winning a game feels shallow and strategy level is minimal. The AI is very bad, it forgets I am attacking its main base while holding a massive army and sometimes the game crashes (got this with worm rides).",
        game_id = 7,
        user_id = 4,
    )
    review15 = Review(
        is_recommended = True,
        content = "Anakin bananakin 🍌",
        game_id = 8,
        user_id = 4,
    )
    review16 = Review(
        is_recommended = True,
        content = "For me as Casual player.. This is One of the best Star games in the series👍.After 600 hours+ playing from Origins. All my progress still save because we must use the Origin to play, I bought this game again because I wanted to share screenshots and talk/chat with the community😅.I enjoyed it a lot in my childhood. I used to play the classic version from 2005. I was probably 8 years old at the time😂. This game is really fun if you are a Star Wars fan. And it will be more fun with more mods.",
        game_id = 8,
        user_id = 2,
    )
    review17 = Review(
        is_recommended = False,
        content = "Too many cheating aimbotting hackers using mods and flying through the air as ground unit or hero.... Call trash out on it and ea warns / suspends your account while the cheater seems to get away scott free.",
        game_id = 8,
        user_id = 5,
    )
    review17 = Review(
        is_recommended = True,
        content = "I can't believe Picard kills Kylo Ren in this one, wow",
        game_id = 8,
        user_id = 3,
    )
    review18 = Review(
        is_recommended = True,
        content = "My generation doesnt really take to soccer, but Im a trend breaker. Good game but hard because I prefer American soccer, aka football",
        game_id = 9,
        user_id = 1,
    )
    review19 = Review(
        is_recommended = False,
        content = "the fifa organization is about as corrupt as EA is. got this for free and it's trash",
        game_id = 9,
        user_id = 4,
    )
    review20 = Review(
        is_recommended = True,
        content = "I love career mode, the majority of my time on the game is career mode and it is really fun. The game has a lot of depth and things you can do. This game single-handedly made melike soccer/football again from when i was 9.",
        game_id = 9,
        user_id = 5,
    )
    review21 = Review(
        is_recommended = True,
        content = "I love career mode, the majority of my time on the game is career mode and it is really fun. The game has a lot of depth and things you can do. This game single-handedly made melike soccer/football again from when i was 9.",
        game_id = 9,
        user_id = 5,
    )
    review22 = Review(
        is_recommended = True,
        content = "Hello. In the beninging. Inni the beanie. Listen properly. Inni de beninin. E... So in the beginning, it is the same game as the years before. Just some little spicy differences. Yeah, we still pay for it. Just updated players and some new modes and this and that. Yeah. But me still likey likey. Because me adores football. Eh. I don`t like to play FUT but me likes the VOLTA, the career and por club. Guud guud. Very guud.",
        game_id = 9,
        user_id = 3,
    )
    review23 = Review(
        is_recommended = True,
        content = "Hello. In the beninging. Inni the beanie. Listen properly. Inni de beninin. E... So in the beginning, it is the same game as the years before. Just some little spicy differences. Yeah, we still pay for it. Just updated players and some new modes and this and that. Yeah. But me still likey likey. Because me adores football. Eh. I don`t like to play FUT but me likes the VOLTA, the career and por club. Guud guud. Very guud.",
        game_id = 9,
        user_id = 3,
    )
    review24 = Review(
        is_recommended = True,
        content = "👍 Only nfl game there is. What choice do you have? lol",
        game_id = 10,
        user_id = 3,
    )
    review25 = Review(
        is_recommended = False,
        content = "Game is barely playable. It is so buggy that it takes a lot the fun away.",
        game_id = 10,
        user_id = 3,
    )
    review26 = Review(
        is_recommended = False,
        content = "after purchasing late (about january/feb 2022) i quickly found i was having to look up articles or videos explaining how to change things in the game just to make it playable. i dont have to list all the issues with this game because its been beat to death and Ea will never change them.",
        game_id = 10,
        user_id = 1,
    )
    review27 = Review(
        is_recommended = True,
        content = "This game was legendary when it was released vanilla, now with all the updates, dlcs, it has ascended into gotf (game of the forever) status. It doesn't get any better than this",
        game_id = 11,
        user_id = 5,
    )
    review28 = Review(
        is_recommended = True,
        content = "Quite possibly the greatest western rpg series ever, and the witcher 3 is the best of the bunch. ",
        game_id = 11,
        user_id = 3,
    )
    review29 = Review(
        is_recommended = True,
        content = "I've put a total of 500 hours into this and got all the achievements. The only thing left for me to do is to get a tattoo on my chest of the wolf emblem to truly make my allegiance to this modern classic complete",
        game_id = 11,
        user_id = 1,
    )
    review30 = Review(
        is_recommended = False,
        content = "didn't play the other ones. whats even a witcher anyway? gave up after an hour. the controls are bad",
        game_id = 11,
        user_id = 2,
    )


    db.session.add_all([review1, review2, review3,review4,review5,review6,review7,
                        review8,review9,review10,review11,review12,review13,review14,
                        review15,review16,review17,review18,review19,review20,review21,
                        review22,review23,review24,review25,review26,review27,review28,
                        review29,review30
                        ])
    db.session.commit()

def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
