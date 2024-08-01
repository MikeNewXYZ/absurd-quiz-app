*Note: If you want to build a new docker image in the client directory you have to recreate entry.sh file. I don't know why but docker returns "exec /entry.sh: no such file or directory" if you don't.*

# Absurd Quiz App
*A fun quiz app that generates quizzes on request with OpenAI.*

![showcase](./assets/showcase.gif)

## About
**URL:** https://absurd-quiz-app-client.onrender.com/ <br>
**Created by:** [Mike Newberry](https://github.com/MikeNewXYZ)

**_This project was created as part of an assignment for a coding course. The bulk of it was made quickly across 2 days. It uses HTML, Tailwind CSS, DaisyUI, JavaScript, OpenAI API, NodeJS and ExpressJS._**

</br>

## 💻 Installing

```console
> git clone https://github.com/MikeNewXYZ/absurd-quiz-app.git
```

### Front-end
```console
> cd client
> npm i
> npm run dev
```

### Back-end
```console
> cd server
> npm i
> npm run start
```

</br>

## How it works!

### 🎨 So many styles??!?!
[![random theme function](./assets/random-theme.png)](./client/src/lib/random-theme.js)
I had the slightly crazy idea that the style of the page should change on every refresh and also with user interaction. This was achived by using DaisyUI which comes with a huge array of preset themes. All I had to do then was to set a different theme on page initialization and whenever else I felt like it. This is done with a very simple function that you can see above.

## 🤖 How are the questions generated?
[![chatgpt api](./assets/openai-api.png)](./server/server.js)
The quiz is generated using ChatGPT, specifically using the "GPT 3.5 Turbo" model, using the OpenAI API. It simply takes in [instructions from a text file](./server/instructions.txt) and using that outputs a response in JSON. The response should contain an array of 5 questions all with a title and answers array.

## 🕺 How is the end sequence animated?
[![end sequence](./assets/end-sequence.png)](./client/src/slides/summary-slide.js)
The terminal from the end sequence is simply a component from DaisyUI. The animations however, was created using an [NPM library called typewriter-effect](https://www.npmjs.com/package/typewriter-effect). It has a very simple but powerful API allowing me to quickly build the fun end animation. The .callFunction method allowing me to call the "jsConfetti.addConfetti()" function as much as I so pleased.


