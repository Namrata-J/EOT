import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content:
      "Don't wish for it, work for it.",
    likes: {
      likeCount: 3,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshbalika",
    firstName: "Adarsh",
    lastName: "Balika",
    profilePic: "https://tinyurl.com/j6v2eejb",
    media: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "tanaypratap",
        firstName: "Tanay",
        lastName: "Pratap",
        profilePic: "https://tinyurl.com/24bvpbzu",
        content: "Totally agree!!!",
        media: [],
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: uuid(),
        username: "flyingbeast320",
        firstName: "Gaurav",
        lastName: "Taneja",
        profilePic: "https://tinyurl.com/r4b68v7s",
        content: "So true!!!",
        media: [],
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
  },
  {
    _id: uuid(),
    content:
      "Rocketry | Malayalam Trailer is OUT NOW.#RocketryTheFilm",
    likes: {
      likeCount: 35,
      likedBy: [],
      dislikedBy: [],
    },
    username: "NambiNOfficial",
    firstName: "Nambi",
    lastName: "Narayanan",
    profilePic: "https://tinyurl.com/2syjpmyd",
    media: ["https://tinyurl.com/4wtueaaw"],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "thetanmay",
        firstName: "Tanmay",
        lastName: "Bhat",
        profilePic: "https://tinyurl.com/4xbybcf5",
        content: "So excited to watch it!!",
        media: [],
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      }
    ],
  },
  {
    _id: uuid(),
    content:
      "A few weeks ago, @NambiNOfficial and I had the honour of calling on PM @narendramodi.We spoke on the upcoming film #Rocketrythefilm and were touched and honored by PM's reaction to the clips and concern for Nambi ji & the wrong done to him. Thank you for the privilege sir.",
    likes: {
      likeCount: 56,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ActorMadhavan",
    firstName: "Ranganathan",
    lastName: "Madhavan",
    profilePic: "https://tinyurl.com/2p9724zh",
    media: ["https://tinyurl.com/2pdzs4db"],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: uuid(),
        username: "narendramodi",
        firstName: "Narendra",
        lastName: "Modi",
        profilePic: "https://tinyurl.com/yc4kzvs4",
        content: "Happy to have met you and the brilliant Nambi Narayanan Ji. This film covers an important topic, which more people must know about.Our scientists and technicians have made great sacrifices for our country, glimpses of which I could see in the clips of Rocketry.",
        media: [],
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      }
    ],
  },
  {
    _id: uuid(),
    content:
      "Happy Birthday to one of the most outstanding and spectacular gentleman I have ever met.May you have the most fantastic year yet.Full of Love happiness and great Health.#Rocketry",
    likes: {
      likeCount: 99,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ActorMadhavan",
    firstName: "Ranganathan",
    lastName: "Madhavan",
    profilePic: "https://tinyurl.com/2p9724zh",
    media: ["https://tinyurl.com/4ss4akr5"],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Today 5pm IST.",
    likes: {
      likeCount: 256,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ActorMadhavan",
    firstName: "Ranganathan",
    lastName: "Madhavan",
    profilePic: "https://tinyurl.com/2p9724zh",
    media: ["https://tinyurl.com/3987zcv4"],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Love you guys ..🙏🙏🚀🚀🚀🚀",
    likes: {
      likeCount: 23,
      likedBy: [],
      dislikedBy: [],
    },
    username: "ActorMadhavan",
    firstName: "Ranganathan",
    lastName: "Madhavan",
    profilePic: "https://tinyurl.com/2p9724zh",
    media: ["https://tinyurl.com/hkfu8u7r"],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "Glad to have met PT Usha Ji in Parliament.",
    likes: {
      likeCount: 54,
      likedBy: [],
      dislikedBy: [],
    },
    username: "narendramodi",
    firstName: "Narendra",
    lastName: "Modi",
    profilePic: "https://tinyurl.com/yc4kzvs4",
    media: ["https://tinyurl.com/8kj2sbj2"],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "log kya kahenge, yehi sochte rahoge toh kuch nahi kar paoge.",
    likes: {
      likeCount: 76,
      likedBy: [],
      dislikedBy: [],
    },
    username: "tanaypratap",
    firstName: "Tanay",
    lastName: "Pratap",
    profilePic: "https://tinyurl.com/24bvpbzu",
    media: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "What a lifetime opportunity to meet Mr Barack Obama. Also had the pleasure to attend his session in Singapore. One of the finest speakers on the planet.",
    likes: {
      likeCount: 32,
      likedBy: [],
      dislikedBy: [],
    },
    username: "flyingbeast320",
    firstName: "Gaurav",
    lastName: "Taneja",
    profilePic: "https://tinyurl.com/r4b68v7s",
    media: ["https://tinyurl.com/2p9nvztx"],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: uuid(),
    content:
      "My skin care routine is Paris..",
    likes: {
      likeCount: 65,
      likedBy: [],
      dislikedBy: [],
    },
    username: "thetanmay",
    firstName: "Tanmay",
    lastName: "Bhat",
    profilePic: "https://tinyurl.com/4xbybcf5",
    media: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
];
