import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
	try {
	} catch (error) {
		console.log(error);
		res.status(500).send({ error });
	}
});

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0");
