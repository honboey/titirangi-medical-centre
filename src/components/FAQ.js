import React, { useState } from "react"

function FAQ(props) {
    const [FAQOpen, setFAQOpen] = useState(false);
    function toggleFAQ() {
        console.log("toggleFAQ!")
        return setFAQOpen(!FAQOpen)
    }

    return (
        <li className="mb-8">
            <div className="flex items-start mb-2">
                <button className="w-1/12 pr-2 pt-2" onClick={toggleFAQ} aria-label="Reveal answer">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                    </svg>
                </button>
                <button className="text-left w-23/24" onClick={toggleFAQ}>
                    <h3 className="font-display text-2xl md:text-3xl">{props.question}</h3>
                </button>
            </div>
            <p className={FAQOpen ? "ml-1/12 lg:w-7/12" : "hidden"}>{props.answer}</p>
        </li>
    )
}

export default FAQ
