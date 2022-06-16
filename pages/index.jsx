import Head from "next/head";
import { useState, useEffect } from "react";

import Button from "../components/button";
import ResultCard from "../components/card";
import SelectComponent from "../components/select";
import TextArea from "../components/textArea";
import { getScore, getAccuracyAndSpeed } from "../utils";

export default function Home() {
  const [userScoreDetail, setUserScoreDetail] = useState({
    score: 0,
    accuracy: 0,
    speed: 0,
  });
  const [paragraph, setParagraph] = useState(
    "Stay upto date on issues relating to human sexuality, emotion and responsibilities."
  );
  const [typedText, setTypedText] = useState("");
  const [selectTime, setSelectTime] = useState(1);
  const [showTime, setShowTime] = useState(0);
  const [isStartTimer, setIsStartTimer] = useState(true);
  const [isDisable, setIsDisable] = useState(false);

  // calculate accuracy, score and speed
  const calculateScore = () => {
    alert("here");
    const typedText = document.getElementById("typeText").value;
    const paragraph = document.getElementById("paragraph").value;
    const typedTextArray = typedText.split(" ");
    const paragraphArray = paragraph.split(" ");
    let score = getScore(typedTextArray, paragraphArray);

    const { accuracy, speed } = getAccuracyAndSpeed(
      score,
      typedText,
      paragraphArray,
      selectTime
    );
    setUserScoreDetail({ score, accuracy, speed });
    setIsStartTimer(true);
    setIsDisable(false);
  };

  // start timer
  const startTimer = () => {
    if (!paragraph || selectTime < 1) {
      return;
    }
    if (isStartTimer) {
      setUserScoreDetail({
        score: 0,
        accuracy: 0,
        speed: 0,
      });

      setTimeout(() => {
        setIsDisable(true);
        calculateScore(typedText, paragraph);
      }, selectTime * 60 * 1000);
      setIsStartTimer(false);
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Typing skill</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title" sx={{ mt: 5 }}>
          Typing <span>skills</span>
        </h1>

        <ResultCard userScoreDetail={userScoreDetail} />

        <TextArea
          id="paragraph"
          label="Text (you can copy and paste here)"
          typedText={paragraph}
          action={setParagraph}
          isDisable={!isStartTimer}
        />
        <SelectComponent
          selectTime={selectTime}
          setSelectTime={setSelectTime}
          disabled={!isStartTimer}
        />

        <Button
          variant="contained"
          sx={{ mt: 2 }}
          action={startTimer}
          text={userScoreDetail.speed > 0 ? "Restart" : "start"}
          disabled={!isStartTimer}
        />

        <TextArea
          id="typeText"
          label="Type text here"
          typedText={typedText}
          action={setTypedText}
          isDisable={isDisable}
        />
      </main>

      <style jsx>{`
        .container {
          min-height: 100vh;
          width: 100vw;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background-color: rgba(141, 220, 164, 0.2);
        }

        main {
          padding: 5rem 0;
          height: auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          width: 600px;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        h1 {
          margin-buttom: 5rem;
        }

        @media (max-width: 600px) {
          main {
            padding: 5rem 0;
            height: auto;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 100%;
          }
          .title {
            font-size: 2.5rem;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
