"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Faq = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-2xl mx-auto my-10">
      <h1 className="text-5xl text-center font-bold mb-6">
        Frequently Asked Questions
      </h1>
      <p className="text-center text-lg mt-10">
        Monitask is a cost-effective and simple solution for tracking employee
        performance. Competitively-priced with unique functionality.
      </p>
      <div className="mt-10 space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border rounded-lg text-[#5470CB] shadow-sm p-4 ${
              openIndex === index ? "bg-[#F6FAFF]" : "bg-white"
            }`}
          >
            <button
              className="w-full flex justify-between items-center text-left text-lg font-medium"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5" />
              ) : (
                <ChevronDown className="h-5 w-5" />
              )}
            </button>
            {openIndex === index && (
              <p className="mt-2 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
