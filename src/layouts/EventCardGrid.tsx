import React from 'react';
import BaseGrid from './BaseGrid';
import EventCard from '../components/Cards/EventCard';

interface EventCardGridProps {
  cardData: {
    title: string;
    date: string;
    thumbnail: any;
  }[];
}

const EventCardGrid: React.FC<EventCardGridProps> = ({ cardData }) => {
  return (
    <BaseGrid
    //@ts-ignore
      cardData={cardData}
      itemsPerPage={12}
      renderItem={(card) => (
        <EventCard title={card.title} date={card.date} thumbnail={card.thumbnail} />
      )}
    />
  );
};

export default EventCardGrid;
