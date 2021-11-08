import { styled } from '../stitches.config';
import { useState, useEffect } from 'react';

interface CalendarDay {
  day: number; // 1-31
  month: number; // 0-11
  year: number; // full year
}

const Calendar = (props: { year: number }) => {
  // const today = new Date();
  // const [currentYear, setCurrentYear] = useState<number>(0);
  // const [daysOfYear, setDaysOfYear] = useState<Date[][]>([]);
  const [calendarDays, setCalendarDays] = useState<CalendarDay[][]>([]);
  // const daysOfYear: Date[][] = [];
  // const [firstDayOfEachWeek, setFirstDayOfEachWeek] = useState<Date[]>([]);

  useEffect(() => {
    // const currentYear: number = currentDate.getFullYear();
    // setCurrentYear(new Date().getFullYear());
    const startDate = new Date(props.year, 0, 1);
    const endDate = new Date(props.year, 11, 31);
    
    // pad first and last week with remaining days
    const startOffset = startDate.getDay();
    const endOffset = 6 - endDate.getDay();
    startDate.setDate(startDate.getDate() - startOffset);
    endDate.setDate(endDate.getDate() + endOffset);

    const daysInYear: CalendarDay[][] = [];
    // const firstDays = [];
    for (const w = startDate; w <= endDate; w.setDate(w.getDate() + 7)) {
      // console.log("adding week of", w);
      const daysInWeek: CalendarDay[] = [];
      for (let i = 0; i < 7; i++) {
        const tmpDay = new Date(w);
        tmpDay.setDate(w.getDate() + i);
        // daysInWeek.push(new Date(tmpDay));
        daysInWeek.push(dateToCalendarDay(tmpDay));
      }
      // console.log(daysInWeek);
      daysInYear.push(daysInWeek);
    }
    // setDaysOfYear(daysOfCurrentYear);
    // daysOfYear.push(...daysOfCurrentYear);
    setCalendarDays(daysInYear);
    // console.log(daysOfYear);
  }, [props.year]);

  const getIdForDate = (date: Date) => {
    return date.getFullYear() + '_' + date.getMonth() + '_' + date.getDate();
  }
  
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
  
  // const weekRows = daysOfYear.map(week => {
  //   const days = week.map(day => generateDay(day));
  //   console.log(getIdForDate(week[0]));
  //   return (
  //     <tr key={getIdForDate(week[0])}>
  //       {days}
  //     </tr>
  //   )
  // });
  // const generateWeek = (firstDateOfWeek: Date) => {
  //   const dates = [firstDateOfWeek];
  //   let currentDate = new Date(firstDateOfWeek);
  //   for (let i = 1; i < 7; i++) {
  //     currentDate.setDate(currentDate.getDate() + 1);
  //     dates.push(currentDate);
  //   }
  //   console.log(dates);
  //   return (
  //     <tr>
  //       {dates.map((date: Date) =>
  //         <td key={getIdForDate(date)}>
  //           <span>
  //             {date.getDate()}
  //           </span>
  //         </td>
  //       )}
  //     </tr>
  //   )
  // }

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