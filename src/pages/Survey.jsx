import React, { useState, useRef } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import chevronLeft from "../assets/ChevronLeft.png";
import { useNavigate } from "react-router-dom";

const Survey = () => {
  const navigate = useNavigate();
  const splideRef = useRef(null);

  const surveyData = [
    {
      "id": 1,
      "question": "What is your primary source of income?",
      "options": {
        "A": "Salary/Wages",
        "B": "Business/Entrepreneurship",
        "C": "Investments/Passive Income",
        "D": "Allowance/Family Support"
      }
    },
    {
      "id": 2,
      "question": "How often do you create a budget?",
      "options": {
        "A": "Weekly",
        "B": "Monthly",
        "C": "Quarterly",
        "D": "Rarely/Never"
      }
    },
    {
      "id": 3,
      "question": "What percentage of your income do you save monthly?",
      "options": {
        "A": "0% - 10%",
        "B": "11% - 20%",
        "C": "21% - 30%",
        "D": "31% or more"
      }
    },
    {
      "id": 4,
      "question": "What is your preferred method for tracking expenses?",
      "options": {
        "A": "Mobile Apps",
        "B": "Spreadsheets",
        "C": "Pen and Paper",
        "D": "I don’t track my expenses"
      }
    },
    {
      "id": 5,
      "question": "How do you typically pay for purchases?",
      "options": {
        "A": "Cash",
        "B": "Credit/Debit Card",
        "C": "Mobile Wallet (e.g., Apple Pay, Google Pay)",
        "D": "Bank Transfer"
      }
    },
    {
      "id": 6,
      "question": "What is your biggest financial challenge?",
      "options": {
        "A": "Managing expenses",
        "B": "Saving consistently",
        "C": "Investing wisely",
        "D": "Earning more income"
      }
    },
    {
      "id": 7,
      "question": "Which type of financial goal is most important to you?",
      "options": {
        "A": "Short-term (e.g., buying a gadget, vacation)",
        "B": "Medium-term (e.g., buying a car, paying off debt)",
        "C": "Long-term (e.g., homeownership, retirement)",
        "D": "None of the above"
      }
    },
    {
      "id": 8,
      "question": "How comfortable are you with investing?",
      "options": {
        "A": "Very comfortable",
        "B": "Somewhat comfortable",
        "C": "Not comfortable",
        "D": "I don’t invest"
      }
    },
    {
      "id": 9,
      "question": "What motivates you to save money?",
      "options": {
        "A": "Financial security",
        "B": "Future goals",
        "C": "Avoiding debt",
        "D": "Unexpected expenses"
      }
    },
    {
      "id": 10,
      "question": "How do you prefer to learn about personal finance?",
      "options": {
        "A": "Reading articles/books",
        "B": "Watching videos/tutorials",
        "C": "Attending workshops or classes",
        "D": "Consulting a financial adviser"
      }
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState({});
  const [isComplete, setIsComplete] = useState(false);

  const handleOptionSelect = (questionId, selectedOption) => {
    setResponses((prev) => ({
      ...prev,
      [questionId]: selectedOption,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < surveyData.length - 1) {
      setCurrentQuestion((prev) => {
        const nextQuestion = prev + 1;
        splideRef.current?.go(nextQuestion); // Navigate to the next slide
        return nextQuestion;
      });
    } else {
      setIsComplete(true);
    }
  };

  const handleBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prev) => {
        const prevQuestion = prev - 1;
        splideRef.current?.go(prevQuestion); // Navigate to the previous slide
        return prevQuestion;
      });
    }
  };

  return (
    <div className="h-screen overflow-x-hidden bg-light p-1">
      {!isComplete ? (
        <>
          <img
            src={chevronLeft}
            className="h-10 m-2 cursor-pointer"
            alt="Go Back"
            onClick={handleBack}
          />

          <div className="mx-auto justify-center items-center w-72">
            <p className="text-center">
              {currentQuestion + 1}/{surveyData.length}
            </p>
            <div className="h-2 mx-auto my-1 rounded-full w-72 bg-neutral-200">
              <div
                className="bg-main rounded-full h-full"
                style={{
                  width: `${((currentQuestion + 1) / surveyData.length) * 100}%`,
                }}
              ></div>
            </div>

            <Splide
              ref={splideRef}
              options={{
                type: "slide",
                pagination: false,
                arrows: false,
                drag: false,
              }}
            >
              {surveyData.map((question) => (
                <SplideSlide key={question.id}>
                  <div>
                    <h3 className="text-2xl py-3 font-medium">
                      {question.question}
                    </h3>
                    <div>
                      {Object.entries(question.options).map(([key, value]) => (
                        <div
                          key={key}
                          className={`flex p-2 border-2 rounded-lg w-72 my-5 mx-auto cursor-pointer ${
                            responses[question.id] === key
                              ? "border-main bg-main/10"
                              : "border-neutral-300"
                          }`}
                          onClick={() => handleOptionSelect(question.id, key)}
                        >
                          <input
                            type="radio"
                            name={`question-${question.id}`}
                            className="mr-2"
                            checked={responses[question.id] === key}
                            readOnly
                          />
                          <p className="font-medium">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>

            <div>
              {currentQuestion < surveyData.length - 1 ? (
                <button
                  className="px-28 mx-2 shadow-md mt-5 py-3 bg-main text-lg text-dark font-semibold rounded-lg"
                  onClick={handleNext}
                >
                  Next
                </button>
              ) : (
                <button
                  className="px-28 mx-2 shadow-md mt-2 py-3 bg-main text-lg text-dark font-semibold rounded-lg"
                  onClick={() => setIsComplete(true)}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center justify-center h-full text-center">
          <h2 className="text-3xl font-bold mb-4">
            Thank you for completing the survey!
          </h2>
          <p className="mb-6">Your responses have been recorded.</p>
          <button
            className="px-10 py-3 bg-main text-dark font-semibold rounded-lg"
            onClick={() => navigate("/")}
          >
            Go Back Home
          </button>
        </div>
      )}
    </div>
  );
};

export default Survey;
