module.exports = {
  plugins: [
    {
      resolve: "@matthieuauger/gatsby-theme-meetup",
      options: {
        meetupName: "JAMstack London",
        meetupHomepageHeadline: "The JAMstack meetup with a cup of tea 🍵",
        meetupDotComGroupUrlName: "JAMstack-London",
        displayVideosLink: false,
        //meetupVideosUrl = 'https://www.youtube.com/channel/UC66eQOycjMnaqzpbRUhEK2w'
        talkProposalUrl: "https://twitter.com/philhawksworth",
        textBlocksPath: `${__dirname}/src/text-blocks`,
        translations: {
          PROPOSE_A_TALK: "Propose a talk to Phil →",
          FETCH_VIDEOS: "See videos →",
          LAST_MEETUPS: "Last meetups",
          REGISTER_ON_MEETUP: "Register on Meetup →"
        }
      }
    }
  ]
};
