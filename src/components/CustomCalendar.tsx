import React, { useEffect, useState } from "react";
import Calendar from "react-calendar";
import "./style/styleReactCalendar.css";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
interface CalendarComponentProps {
  minDate?: Date;
  maxDate?: Date;
  setMinDate: any;
  setMaxDate: any;
}

const CustomCalendar: React.FC<CalendarComponentProps> = ({
  minDate,
  maxDate,
  setMinDate,
  setMaxDate,
}) => {
  // Initialiser dateRange avec la date actuelle pour le début et la fin
  const [dateRange, setDateRange] = useState<Date[]>([new Date(), new Date()]);
  const [value, setValue] = useState<[Date, Date]>([new Date(), new Date()]);

  const [localMinDate, setLocalMinDate] = useState<Date | null>(null);
  const [isRangeComplete, setIsRangeComplete] = useState<boolean>(false);

  const onChange = (range: any) => {
    setValue(range as [Date, Date]);
    // Si une plage complète est sélectionnée, réinitialiser localMinDate
    if (Array.isArray(range) && range.length === 2) {
      setLocalMinDate(null);
      setIsRangeComplete(true);
    }
  };

  const onActiveStartDateChange = ({ activeStartDate, value, view }: { activeStartDate: any; value:any; view: string }) => {
    console.log("hhhrhhrhrhrhrhrhhrrhrhrhrrrhrhrhrhrhhrrh")
    if (!isRangeComplete && Array.isArray(value) && value.length === 1) {
      // Si une seule date est sélectionnée et que la plage n'est pas complète, définir cette date comme localMinDate
      setLocalMinDate(value[0]);
    } else if (isRangeComplete) {
      // Réinitialiser pour une nouvelle sélection
      setIsRangeComplete(false);
    }
  };


  const formatShortWeekday = (locale: any, date: any) => {
    const weekdays = ["Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa"];
    return weekdays[date.getDay()];
  };

  const formatCalendarTitle = ({ date }: any) => {
    const month = date.toLocaleDateString("fr", { month: "long" });
    const year = date.getFullYear();

    return (
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        _hover={{ background: "transparent" }}
      >
        <Text
          fontWeight={"bold"}
          fontSize={"1rem"}
          whiteSpace={"nowrap"}
          _hover={{ background: "transparent" }}
        >{`${month} ${year}`}</Text>
      </Flex>
    );
  };

  const nextMonth = new Date(
    dateRange[0].getFullYear(),
    dateRange[0].getMonth() + 1
  );

  console.log("Here Date Trigger", value);
  console.log("Here Date MinTrigger", localMinDate);
  return (
    <>
      <Flex gap={"10px"} alignItems={"center"} justifyContent={"center"}>
        <Calendar
          onChange={onChange}
          value={value}
          onActiveStartDateChange={onActiveStartDateChange}
          formatShortWeekday={formatShortWeekday}
          navigationLabel={formatCalendarTitle}
          prev2Label={null}
          next2Label={null}
          //nextLabel={null}
          selectRange={true}
          showDoubleView
          minDate={new Date()} // Pour empêcher la sélection de dates passées, si nécessaire.
          tileDisabled={({ date, view }) =>
            view === "month" && localMinDate ? date < localMinDate : false
          }
        />
      </Flex>
    </>
  );
};

export default CustomCalendar;
