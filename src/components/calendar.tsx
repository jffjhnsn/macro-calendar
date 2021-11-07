import { styled } from '../stitches.config';
import { useEffect } from 'react';

function Calendar() {
  const today = new Date();
  const daysOfYear: Date[] = [];

  useEffect(() => {
    const currentYear: number = today.getFullYear();
    const startDate = new Date(currentYear, 0, 1);
    const endDate = new Date(currentYear, 11, 31);
    
    for (const d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
      daysOfYear.push(new Date(d));
    }

  }, []);
  

  return (
    <Table>
      WIP
    </Table>
  )
}

const Table = styled('table', {

});

export default Calendar;