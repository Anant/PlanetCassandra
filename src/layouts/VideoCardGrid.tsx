import React from 'react';
import BaseGrid from './BaseGrid';
import YoutubeCard from '../components/Cards/YouTubeCard';

interface VideoCardData {
  channelTitle: string;
  title: string;
  videoId: string;
  thumbnail: any;
  description: string;
  date: string;
}

interface VideoCardGridProps {
  cardData: VideoCardData[];
}

const VideoCardGrid: React.FC<VideoCardGridProps> = ({ cardData }) => {
  return (
    <BaseGrid
    //@ts-ignore
      cardData={cardData} 
      itemsPerPage={12}
      renderItem={(card) => (
        <YoutubeCard
          channelTitle={card.channelTitle}
          title={card.title}
          videoId={card.videoId}
          //@ts-ignore
          thumbnail={card.thumbnail}
          description={card.Description}
          date={card.date}
        />
      )}
    />
  );
};

export default VideoCardGrid;
