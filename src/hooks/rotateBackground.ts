import { useEffect, useState } from 'react';

const ROTATE_TIME = 5000;

const equateIndexFromPrev = (prevIndex: number, arrayLength: number) =>
  prevIndex + 1 >= arrayLength ? 0 : prevIndex + 1;

export const rotateBackground = (fetchBackgrounds: () => Promise<string[]>) => {
  const [backgroundsUrls, setBackgroundsUrls] = useState<string[]>([]);
  const [previousBackgroundUrlIndex, setPreviousBackgroundUrlIndex] =
    useState<number>(0);
  const [currenBackgroundUrlIndex, setCurrentBackgroundUrlIndex] =
    useState<number>(1);

  const rotateHandler = () => {
    setPreviousBackgroundUrlIndex(prevPrevIndex =>
      equateIndexFromPrev(prevPrevIndex, backgroundsUrls.length)
    );
    setCurrentBackgroundUrlIndex(prevIndex =>
      equateIndexFromPrev(prevIndex, backgroundsUrls.length)
    );
  };

  useEffect(() => {
    if (!backgroundsUrls.length) {
      fetchBackgrounds().then(backgroundsUrls =>
        setBackgroundsUrls(backgroundsUrls)
      );
    }
  }, [backgroundsUrls.length]);

  useEffect(() => {
    if (!backgroundsUrls.length) return;

    const intervalId = setInterval(() => rotateHandler(), ROTATE_TIME);
    return () => clearInterval(intervalId);
  }, [backgroundsUrls.length]);

  return [
    backgroundsUrls[previousBackgroundUrlIndex] || null,
    backgroundsUrls[currenBackgroundUrlIndex] || null,
  ];
};
