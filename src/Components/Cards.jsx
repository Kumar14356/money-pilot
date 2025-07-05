import React from 'react';

const Cards = () => {
  const cards = [
    {
      small: 'Match in Seconds',
      heading: 'Speed',
      desc: 'Instantly match with specialist lenders that are pre-qualified and ready to fund your plans.',
      img: '/images/cardIllust1.png',
      color: "#F97171",
      smallColor: "#FFECE5",
      txtColor: "#F97171",
      button: 'How are we so fast?',
    },
    {
      small: 'Full Range of UK Lenders',
      heading: 'Access',
      desc: 'Our system gives you access to thousands of products from over 200 lenders, ensuring you the best-value finance solution.',
      img: '/images/cardIllust2.png',
      color: "#144BA7",
      smallColor: "#E6EEFF",
      txtColor: "#2B65B6",
      button: 'See our lenders',
    },
    {
      small: 'Live Chat Support',
      heading: 'Support',
      desc: 'Monitor your enquiry in real-time, while receiving specialist support from our expert team of advisors.',
      img: '/images/cardIllust3.png',
      color: "#158C8C",
      smallColor: "#E8F4F1",
      txtColor: "#00A886",
      button: 'Speak to our team',
    },
  ];

  return (
    <div className=" mx-auto py-16 px-4 flex flex-col flex-wrap lg:flex-row gap-6 justify-center font-Inter overflow-x-hidden">
      {cards.map((card, index) => (
        <div className='flex justify-center'>
        <div
          key={index}
          className="bg-[#F3F3F3] rounded-lg shadow-sm  flex flex-col w-[320px] max-w-sm lg:h-[70vh] p-2"
        >
          <div className="p-6 flex flex-col flex-grow">
            <span
              className="text-xs font-medium px-2 py-1 rounded mb-2 inline-block w-40"
              style={{
                backgroundColor: card.smallColor,
                color: card.txtColor,
              }}
            >
              {card.small}
            </span>

            <h2 className="text-xl font-bold text-[#102B52] mb-2">
              {card.heading}
            </h2>

            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {card.desc}
            </p>

            <a
              href="#"
              className="text-sm font-semibold"
              style={{ color: card.txtColor }}
            >
              {card.button}
            </a>
          </div>

          <div
            className="w-full relative flex justify-center items-end p-4 rounded-[20px]"
            style={{ backgroundColor: card.color, height: '150px' }}
          >
            <img
              src={card.img}
              alt={card.heading}
              className="relative"
              style={{ maxHeight: 'auto', top: '25px' }} 
            />
          </div>
        </div>
        </div>
      ))}
    </div>
  );
};

export default Cards;
