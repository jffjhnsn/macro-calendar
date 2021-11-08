import { styled } from '../stitches.config';
import { useState, useEffect } from 'react';

interface CalendarDay {
  day: number; // 1-31
  month: number; // 0-11
  year: number; // full year
}

const Calendar = (props: { year: number }) => {
  const [calendarDays, setCalendarDays] = useState<CalendarDay[][]>([]);

  useEffect(() => {
    const startDate = new Date(props.year, 0, 1);
    const endDate = new Date(props.year, 11, 31);
    
    // pad first and last week with remaining days
    const startOffset = startDate.getDay();
    const endOffset = 6 - endDate.getDay();
    startDate.setDate(startDate.getDate() - startOffset);
    endDate.setDate(endDate.getDate() + endOffset);

    const daysInYear: CalendarDay[][] = [];
    for (const w = startDate; w <= endDate; w.setDate(w.getDate() + 7)) {
      const daysInWeek: CalendarDay[] = [];
      for (let i = 0; i < 7; i++) {
        const tmpDay = new Date(w);
        tmpDay.setDate(w.getDate() + i);
        daysInWeek.push(dateToCalendarDay(tmpDay));
      }
      daysInYear.push(daysInWeek);
    }
    setCalendarDays(daysInYear);
  }, [props.year]);

  const getIdForDay = (day: CalendarDay) => {
    return day.year + '_' + day.month + '_' + day.day;
  }

  const dateToCalendarDay = (date: Date) => {
    return {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear(),
    }
  }
  
  const generateDay = (day: CalendarDay) => {
    return (
      <TableCell id={getIdForDay(day)}>
        <span>
          {day.day}
        </span>
      </TableCell>
    )
  }

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableHeader>S</TableHeader>
          <TableHeader>M</TableHeader>
          <TableHeader>T</TableHeader>
          <TableHeader>W</TableHeader>
          <TableHeader>T</TableHeader>
          <TableHeader>F</TableHeader>
          <TableHeader>S</TableHeader>
        </TableRow>
      </TableHead>
      <TableBody> 
        {calendarDays.map(week => {
          const days = week.map(day => generateDay(day));
          console.log(getIdForDay(week[0]));
          return (
            <TableRow key={getIdForDay(week[0])}>
              {days}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

const Table = styled('table', {
  display: 'block'
});

const TableHead = styled('thead', {
  
});

const TableHeader = styled('th', {
  
});

const TableBody = styled('tbody', {
  
});

const TableRow = styled('tr', {
  
});

const TableCell = styled('td', {
  
});

export default Calendar;