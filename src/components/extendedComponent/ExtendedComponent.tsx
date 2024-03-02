import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

interface QuestionProps {
  question: string;
  answer: string;
}

const ExtendedComponent: React.FC<QuestionProps> = ({ question, answer }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="w-full mx-auto">
      <div
        className={` p-4 flex justify-between items-center cursor-pointer rounded-lg ${
          isExpanded ? 'rounded-b-none' : ''
        } border-[1px] border-cardSecondColor  `}
        onClick={toggleExpansion}
      >
        <div className="font-bold">{question}</div>
        <FontAwesomeIcon
          icon={isExpanded ? faChevronUp : faChevronDown}
          className="text-gray-600"
        />
      </div>
      {isExpanded && (
        <div className="border-[1px] border-firstColor border-t-0 p-4 overflow-hidden transition-all duration-500 transform-gpu rounded-b-lg">
          <div className="font-normal">{answer}</div>
        </div>
      )}
    </div>
  );
};

export default ExtendedComponent;
