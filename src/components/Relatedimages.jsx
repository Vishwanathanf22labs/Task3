import React from "react";

const stories = [
  {
    title: "Buying guide",
    heading: "The Best Nike Sneakers to Wear in Winter",
    img: "https://via.placeholder.com/300x300?text=Story+1",
  },
  {
    title: "Buying guide",
    heading: "The Best Nike Sneakers to Wear in Winter",
    img: "https://via.placeholder.com/300x300?text=Story+2",
  },
  {
    title: "Buying guide",
    heading: "The Best Nike Sneakers to Wear in Winter",
    img: "https://via.placeholder.com/300x300?text=Story+3",
  },
  {
    title: "Buying guide",
    heading: "The Best Nike Sneakers to Wear in Winter",
    img: "https://via.placeholder.com/300x300?text=Story+4",
  },
  {
    title: "Buying guide",
    heading: "The Best Nike Sneakers to Wear in Winter",
    img: "https://via.placeholder.com/300x300?text=Story+5",
  },
   {
    title: "Buying guide",
    heading: "The Best Nike Sneakers to Wear in Winter",
    img: "https://via.placeholder.com/300x300?text=Story+5",
  },
   {
    title: "Buying guide",
    heading: "The Best Nike Sneakers to Wear in Winter",
    img: "https://via.placeholder.com/300x300?text=Story+5",
  }
];

const Relatedimages = () => {
  return (
    <div className="px-4 py-6 bg-white">
      <h2 className="text-xl font-bold mb-4">Related Stories</h2>

      <div className="flex gap-4 overflow-x-auto scrollbar-hide">
        {stories.map((story, index) => (
          <div key={index} className="min-w-[220px] flex-shrink-0">
            <img
              src={story.img}
              alt={story.title}
              className="w-full h-auto rounded-lg"
            />
            <p className="mt-2 text-sm text-gray-600">{story.title}</p>
            <h3 className="mt-1 text-base font-medium text-gray-800 leading-snug">
              {story.heading}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Relatedimages;
