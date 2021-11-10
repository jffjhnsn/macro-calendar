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

  const writeMonth = (week: CalendarDay[]): string => {
    const firstDay = week.find((day) => day.day === 1);
    if (!firstDay) {
      return "";
    }
    switch(firstDay.month) {
      case 0: {
        return "Jan";
      }
      case 1: {
        return "Feb";
      }
      case 2: {
        return "Mar";
      }
      case 3: {
        return "Apr";
      }
      case 4: {
        return "May";
      }
      case 5: {
        return "Jun";
      }
      case 6: {
        return "Jul";
      }
      case 7: {
        return "Aug";
      }
      case 8: {
        return "Sep";
      }
      case 9: {
        return "Oct";
      }
      case 10: {
        return "Nov";
      }
      case 11: {
        return "Dec";
      }
      default: {
        return "";
      }
    }
  }
  
  const generateDay = (day: CalendarDay) => {
    return (
      <TableCell id={getIdForDay(day)} className={day.month % 2 === 0 ? "shaded" : "normal"}>
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
          <TableHeader></TableHeader>
        </TableRow>
      </TableHead>
      <TableBody> 
        {calendarDays.map((week) => {
          const days = week.map(day => generateDay(day));
          console.log(getIdForDay(week[0]));
          return (
            <TableRow key={getIdForDay(week[0])}>
              {days}
              <TableCell className="extra">{writeMonth(week)}</TableCell>
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}

const Table = styled('table', {
  display: 'block',
  borderCollapse: 'collapse',
  fontSize: '$1',
});

const TableHead = styled('thead', {
  
});

const TableHeader = styled('th', {
  padding: '0 $1',
});

const TableBody = styled('tbody', {
  
});

const TableRow = styled('tr', {
  
});

const TableCell = styled('td', {
  fontSize: '$1',
  padding: '0 $1',
});

export default Calendar;