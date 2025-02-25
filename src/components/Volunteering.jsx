import React, { useEffect, useState } from "react";
import { Element } from "react-scroll";
import eventsData from "../assets/data/events.json";

const Volunteering = () => {
  const [expanded, setExpanded] = useState({});
  const [events, setEvents] = useState([]);

  // Load events from JSON file
  useEffect(() => {
    setEvents(eventsData);
  }, []);

  // Toggle "See More / See Less"
  const toggleExpand = (eventId) => {
    setExpanded((prev) => ({
      ...prev,
      [eventId]: !prev[eventId],
    }));
  };

  return (
    <Element name="volunteering">
      <section id="volunteering" className="py-16 bg-gray-100 text-gray-900 text-center">
        <div className="container mx-auto px-6 sm:px-10 lg:px-16 xl:px-24">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
            Volunteering & Conferences
          </h2>

          {/* Events Grid (3 Cards Per Row) */}
          <div className="flex flex-wrap justify-center gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-white shadow-md rounded-lg p-6 w-full sm:w-1/2 lg:w-1/3 text-left"
              >
                <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                <p className="italic text-sm text-gray-600">{event.date}</p>
                <p className="mt-2 text-gray-700">{event.summary}</p>

                {/* See More / See Less Toggle */}
                {expanded[event.id] ? (
                  <>
                    <ul className="mt-3 list-disc list-inside text-gray-700 font-semibold">
                      {event.fullDetails.map((point, idx) => (
                        <p className="mt-2" key={idx}>{point}</p>
                      ))}
                    </ul>
                    <button
                      onClick={() => toggleExpand(event.id)}
                      className="text-cornell italic mt-3 hover:underline focus:outline-none"
                    >
                      See Less
                    </button>
                  </>
                ) : (
                  <button
                    onClick={() => toggleExpand(event.id)}
                    className="text-cornell italic mt-2 hover:underline focus:outline-none"
                  >
                    See More
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Element>
  );
};

export default Volunteering;
