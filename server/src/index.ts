import express from "express";
import path from "path";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use("/images", express.static(path.join(__dirname, "../public/images")));

app.get("/", (req, res) => {
  console.log(path.join(__dirname, "../public"));
  const productData = [
    {
      name: "Sol de Janeiro",
      price: 10,
      text: "Brazilian Touch™ Hand Cream",
      image: "/images/handcream.png",
      type: "bodycare",
    },
    {
      name: "Rare Beauty",
      price: 25,
      text: "Find Comfort Gentle Exfoliating Body Wash",
      image: "/images/bodywash.png",
      type: "bodycare", 
    },
    {
      name: "Caudalie",
      price: 45,
      text: "Vinopure Purifying Toner",
      image: "/images/toner.png",
      type: "skincare",
    },
    {
      name: "SK-II",
      price: 18,
      text: "Facial Treatment Essence",
      image: "/images/essence.png",
      type: "skincare",
    },
    {
      name: "Huda Beauty",
      price: 23,
      text: "Blush Filter",
      image: "/images/blush.png",
      type: "cosmetic",
    },
    {
      name: "DIOR",
      price: 25,
      text: "Backstage Glow Face Palette",
      image: "/images/eyeshadow.png",
      type: "cosmetic",
    },
  ];

  res.json(productData);
});

app.listen(9000, () => {
  console.log("Server is running on port 9000");
});
