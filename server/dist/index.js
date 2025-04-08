"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
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
//# sourceMappingURL=index.js.map