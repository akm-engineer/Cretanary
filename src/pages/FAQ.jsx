import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const FAQItem = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="border border-gray-300 rounded-lg overflow-hidden mt-4">
      <div className="flex justify-between items-center p-4 border-b border-gray-300 bg-gray-200">
        <p className="font-signature text-lg font-semibold">{question}</p>
        <button onClick={toggleExpanded} className="focus:outline-none">
          {expanded ? <FiMinus /> : <FiPlus />}
        </button>
      </div>
      {expanded && (
        <div className="p-4">
          <p className="font-signature text-base">{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQ = () => {
  return (
    <div className="bg-[#f8f9fb] p-8 flex flex-col items-center justify-center">
      <div className="pt-6">
        <h1 className="font-signature font-bold text-3xl">
          FREQUENTLY ASKED QUESTIONS
        </h1>
      </div>
      <div className="pt-4">
        <p className="text-center text-xl font-signature font-semibold">
          Quick answers to questions you may have. Can’t find what you're
          looking for?
        </p>
        <p className="text-center text-lg text-[#4A508E] font-signature font-semibold pt-2">
          Check out our full documentation
        </p>
      </div>
      <div className="mt-8 w-full max-w-[800px] ">
        <FAQItem
          question="How much does it cost to set up a store?"
          answer="It costs nothing to set up a store! Our platform offers free registration and setup."
        />
        <FAQItem
          question="What kind of digital products can I sell?"
          answer="You can sell a wide variety of digital products, including e-books, software, templates, music, videos, and more! The possibilities are endless.
"
        />
        <FAQItem
          question="Do I need technical skills to use the platform?"
          answer="No, not at all! Our platform is designed with user-friendliness in mind. You can easily navigate and set up your store without any technical expertise. It's as simple as a few clicks to get started!
"
        />
        <FAQItem
          question="Is there a limit to the number of products I can list?"
          answer="No, there's no limit! You can list as many products as you like on our platform.
"
        />
        <FAQItem
          question="How do I receive payments for my sales?"
          answer="You can receive payments securely through various payment methods, including credit cards, PayPal, and bank transfers. Choose the option that works best for you!
"
        />
        <FAQItem
          question="Can I sell internationally on this marketplace?"
          answer="Yes, absolutely! Our marketplace supports international selling, allowing you to reach customers worldwide.
"
        />
        <FAQItem
          question="What support and resources are available for sellers?"
          answer="We provide extensive support and resources for sellers, including tutorials, guides, and dedicated customer support to help you succeed.
"
        />

        <FAQItem
          question="Is there a review process for uploaded products?"
          answer="Yes, we have a review process in place to ensure the quality and integrity of uploaded products. Each product undergoes thorough review before being made available to customers.
"
        />
      </div>
    </div>
  );
};

export default FAQ;
