import React from "react";
import styled from "styled-components";
import theme from "../Theme";

import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateUtils } from "react-day-picker";
import "react-day-picker/lib/style.css";

import dateFnsFormat from "date-fns/format";
import dateFnsParse from "date-fns/parse";

function parseDate(str, format, locale) {
  const parsed = dateFnsParse(str, format, new Date(), { locale });
  if (DateUtils.isDate(parsed)) {
    return parsed;
  }
  return undefined;
}

function formatDate(date, format, locale) {
  return dateFnsFormat(date, format, { locale });
}

const ContainerInput = styled.div`
  input {
    font-family: "Roboto Slab", serif;
    box-sizing: border-box;
    background: ${theme.grisClaro};
    border: none;
    cursor: pointer;
    border-radius: 0.625rem; /* 10px */
    height: 4rem; /* 48px */
    width: 100%;
    padding: 0 1.25rem; /* 20px */
    font-size: 1.5rem; /* 24px */
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 60rem) {
    /* 950px */
    input {
      font-size: 1.25rem; /* 20px */
      text-align: start;
    }
    & > * {
      width: 100%;
    }
  }
`;

const DatePicker = ({ date, setDate }) => {
  return (
    <ContainerInput>
      <DayPickerInput
        value={date}
        onDayChange={(day) => setDate(day)}
        format="PPP"
        formatDate={formatDate}
        parseDate={parseDate}
      />
    </ContainerInput>
  );
};

export default DatePicker;
