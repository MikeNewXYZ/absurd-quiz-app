import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import * as fs from "fs";
import OpenAI from "openai";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const openai = new OpenAI({
	apiKey: process.env.OPENAI_API_KEY,
});

app.post("/", async (req, res) => {
	try {
		const completion = await openai.chat.completions.create({
			messages: [
				{
					role: "system",
					content: fs.readFileSync("instructions.txt").toString(),
				},
			],
			model: "gpt-3.5-turbo",
		});

		res.status(200).send({
			quiz: JSON.parse(completion.choices[0].message.content).quiz,
		});
	} catch (error) {
		console.log(error);
		res.status(500).send({ error });
	}
});

const port = process.env.PORT || 3000;

app.listen(port, "0.0.0.0");
