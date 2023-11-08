import { useState, useEffect } from 'react';

export default function useFormatDuration(duration) {
  const [formattedDuration, setFormattedDuration] = useState('');

  useEffect(() => {
    if (duration < 60) {
      setFormattedDuration(`${duration}мин`);
    }
    if (duration > 60) {
      const mins = String(duration % 60);
      const hours = String(duration / 60);
      setFormattedDuration(`${hours.slice(0, hours.indexOf('.'))}ч ${mins}мин`);
    }
    if (duration === 60) {
      setFormattedDuration('1ч');
    }
  }, [duration]);

  return formattedDuration;
}
