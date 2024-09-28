import css from "./MovieReviews.module.css";

const reviews = [
  {
    author: "John Chard",
    author_details: {
      name: "",
      username: "John Chard",
      avatar_path: "/utEXl2EDiXBK6f41wCLsvprvMg4.jpg",
      rating: 8,
    },
    content:
      "Ahh, the magic begins.\r\n\r\nHarry Potter is an Orphan who on his eleventh birthday discovers he's a wizard and is called to term at Hogwarts School. But Harry is soon to find out that his past, and his destiny, is a truly remarkable, magical, and terrifying thing.\r\n\r\nHarry Potter And The Philosopher's Stone arrived in a blaze of publicity, one of the most hyped and talked about motion pictures of the decade had finally arrived. The box office was guaranteed to bulge based on fandom book base alone, regardless of if the film got bad word of mouth or not, it was destined to be a monster smash hit. To someone like me who to this day has never read any of the Harry Potter books, it was easy for me to view objectively without comparison to the source - I enjoyed it immensely upon theatre release, and I still enjoy it equally as much now.\r\n\r\nDirector Christopher Columbus, I believe has wisely stayed loyal to the source material, and thus pleased the literature masses. Yet not all newcomers to the party were that taken by the magic on show, that's a little baffling to me because the budget explodes from the screen at every turn. Oliver Twist like sets form the marvellous Diagon Alley, dream like smoke cloaks the splendid Hogwarts Express, the school itself is a monolithic delight nestling in among eerie mountains - and what about the exhilarating introduction of Quidditch? Pulsating and frantic with no amount of devilment to keep us intrigued throughout.\r\n\r\nThe characters are all perfectly formed in the first two thirds of the film, here Columbus pulls off a masterstroke by interjecting the character arcs with dashes of wonder so that we the audience never gets bored. The final reel plays out solidly as per the mysterious \"who done it\" core of the piece, but it's down to the previous work in the film that we actually care come the finale. Some great casting of the adults really helps to make the film triumph, with Maggie Smith, Robbie Coltrane (one of the best casting jobs of the decade I would say), Richard Harris, Alan Rickman and Zoe Wanamaker all doing excellent work here. The kids are all newcomers that overnight were to become household names, all fresh faced and wet behind the ears, Daniel Radcliffe, Emma Watson, Rupert Grint & Tom Felton are a delight to watch, and they all help to keep the feeling of charm constantly glowing up on the screen.\r\n\r\nOwls here, witches there, what's that strange three headed dog doing over there? The Harry Potter franchise begins with a bang and a whip of the wand, and I and gazillions of others personally love it. 8/10",
    created_at: "2019-07-24T23:48:19.801Z",
    id: "5d38ee43b1f68d0012c2abea",
    updated_at: "2024-05-16T15:22:24.150Z",
    url: "https://www.themoviedb.org/review/5d38ee43b1f68d0012c2abea",
  },
  {
    author: "Venti_Pro",
    author_details: {
      name: "",
      username: "Venti_Pro",
      avatar_path: null,
      rating: null,
    },
    content:
      "Alright first lets start with my problems with this movie.\r\nSome of the effects do not hold up and that can take away from the magic or suspense.\r\nThe child actors are not very good at acting in this movie.\r\n It is way to easy to nitpick this movie and all the nitpicks can be very distracting.\r\nI think the main theme was used way to much in the beginning and that kind of took the magic out of the main theme for me.\r\nI personally did not get sucked into this world which made me kind of bored at times.\r\nPeople love the harry potter movies but these movies don't really click with me when it comes to characters, the lore, and the magic and I think the full story of harry potter is to drawn out and I just want the movies to get to the point.\r\nFor me if the ending of the film is not very satisfying my respect for the movie drops a ton and I don't think the ending of this movie was very satisfying!\r\nThe villain in this movie is super basic.\r\nNow on to the good stuff!\r\nI like how most of the scenes build up the characters, show us some magic, and it builds up the mystery!\r\nI like the sets and costumes a lot!\r\nI like most of the music!",
    created_at: "2021-08-09T19:00:55.691Z",
    id: "61117b67344a8e005e2c2056",
    updated_at: "2021-08-10T18:05:08.865Z",
    url: "https://www.themoviedb.org/review/61117b67344a8e005e2c2056",
  },
];

const MovieReviews = () => {
  return (
    <div className={css.container}>
      {reviews.length === 0 ? (
        <p>We don&apos;t have any reviews for this movie</p>
      ) : (
        <>
          <ul className={css.list}>
            {reviews.map((review) => (
              <li key={review.id} className={css.item}>
                <p className={css.author}>Author: {review.author}</p>
                <p className={css.content}>{review.content}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default MovieReviews;
