const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors")

dotenv.config();

const host = process.env.HOST;
const port = process.env.PORT;

const app = express();

app.use(express.json());
app.use(cors())

const dataJson = [
  {
    id: 1,
    title: "Local Elections Yield Surprising Results",
    date: "2024-04-11",
    img: "https://tengrinews.kz/userdata/news/2024/news_532042/thumb_b/photo_468609.jpeg.webp",
    text: "The recent local elections have concluded with unexpected outcomes...",
  },
  {
    id: 2,
    title: "Tech Conference Announces Revolutionary Product",
    date: "2024-04-12",
    img: "https://tengrinews.kz/userdata/news/2024/news_532042/thumb_b/photo_468609.jpeg.webp",
    text: "A major tech conference today unveiled a new product that promises to change the industry...",
  },
  {
    id: 3,
    title: "Sports Championship Draws Record Crowds",
    date: "2024-04-13",
    img: "https://tengrinews.kz/userdata/news/2024/news_532042/thumb_b/photo_468609.jpeg.webp",
    text: "Fans flocked to the stadium as the sports championship attracted the largest audience ever...",
  },
  {
    id: 4,
    title: "Global Markets React to Economic Summit",
    date: "2024-04-14",
    img: "https://tengrinews.kz/userdata/news/2024/news_532042/thumb_b/photo_468609.jpeg.webp",
    text: "The outcomes of the recent economic summit have led to significant reactions across global markets...",
  },
  {
    id: 5,
    title: "Breakthrough in Renewable Energy Research",
    date: "2024-04-15",
    img: "https://tengrinews.kz/userdata/news/2024/news_532042/thumb_b/photo_468609.jpeg.webp",
    text: "Scientists announce a major breakthrough in renewable energy that could reshape power consumption...",
  },
  {
    id: 6,
    title: "Healthcare Advances Promise Longer Lifespans",
    date: "2024-04-16",
    img: "https://tengrinews.kz/userdata/news/2024/news_532042/thumb_b/photo_468609.jpeg.webp",
    text: "New advances in healthcare could lead to longer, healthier lives according to recent studies...",
  },
  {
    id: 7,
    title: "Education Reform: A New Era for Schools",
    date: "2024-04-17",
    img: "https://tengrinews.kz/userdata/news/2024/news_532042/thumb_b/photo_468609.jpeg.webp",
    text: "Education reform bills have been passed, marking the beginning of a new era for school systems...",
  },
  {
    id: 8,
    title: "Celebrity Chef Opens Restaurant in City Center",
    date: "2024-04-18",
    img: "https://tengrinews.kz/userdata/news/2024/news_532042/thumb_b/photo_468609.jpeg.webp",
    text: "The much-anticipated restaurant by celebrity chef Gordon Ramsay has finally opened its doors...",
  },
  {
    id: 9,
    title: "Historic Peace Agreement Signed",
    date: "2024-04-19",
    img: "https://tengrinews.kz/userdata/news/2024/news_532042/thumb_b/photo_468609.jpeg.webp",
    text: "A historic peace agreement has been signed today, ending decades of conflict...",
  },
  {
    id: 10,
    title: "Exploration Mission to Mars Launches Successfully",
    date: "2024-04-20",
    img: "https://tengrinews.kz/userdata/news/2024/news_532042/thumb_b/photo_468609.jpeg.webp",
    text: "The latest mission to Mars has launched successfully, with astronauts set to explore the red planet...",
  },
];

app.use("/", (req, res) => {
  res.send(dataJson);
});
app.use("/:id", (req, res) => {
    const id = req.params.id*1;
    console.log(id)
    const data = dataJson.find(e=>e.id === id);
    console.log(data)
    res.send(data);
  });
  

app.listen( port,host, () => {
  console.log(`Server started on port ${host}:${port}`);
});
