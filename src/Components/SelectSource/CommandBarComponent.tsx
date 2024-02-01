
import * as React from "react";
// import {  ICommandBarStyles} from "office-ui-fabric-react/lib/CommandBar";
import { CommandBar, ICommandBarItemProps } from '@fluentui/react/lib/CommandBar';
import {
  MessageBar,
  MessageBarType,
  Spinner,
  SpinnerSize,
  Coachmark,
  TeachingBubbleContent,
  DirectionalHint,
  Modal,
  IconButton,
} from "office-ui-fabric-react";
import { IPanelStyles, Panel, PanelType } from "office-ui-fabric-react";
import { style } from "./styles";
import styled from "styled-components";
const NewDocumentWrapper = styled.div`
  ${style}
`;
const commandBarItemStyls = {
    root: {
      border: "none",
      height: "35px",
      backgroundColor: "#f4f4f4",
      padding: "0px 0px !important",
      justifyContent: "center",
  
      "icon":{
        padding: '8px 12px',
        margin: '0px !important'
      }
    },
    
    
  };
  export interface IShowPanelProps {
    filterByLetter:any
  }
   const CommandBarComponent: React.FunctionComponent<IShowPanelProps> = (
    props
  ) => {
    const [selectedLetter, setSelectedLetter] = React.useState("All");
    const filterByLetter = (letter:any) => {
     
        setSelectedLetter(letter);
        props.filterByLetter(letter);
      };
      const _items = [
        {
          key: "all",
          text: "All",
          onClick: () => filterByLetter("ALL"),
          id: "1",
          className:
            selectedLetter.toLowerCase() == "all" ? "activeColor" : "",
        },
        {
          key: "a",
          text:"A",
          id: "1A",
           onClick: () => filterByLetter("A"),
          className:
            selectedLetter.toLowerCase() === "a" ? "activeColor" : "",
        },
        {
          key: "b",
          text:  "B",
         onClick: () => filterByLetter("B"),
          id: "2",
          className: selectedLetter.toLowerCase() === "b" ? "activeColor" : "",
        },
        {
          key: "c",
          text:  "C",
         onClick: () => filterByLetter("C"),
          id: "3",
          className: selectedLetter.toLowerCase() === "c" ? "activeColor" : "",
        },
        {
          key: "d",
          text:  "D",
        onClick: () => filterByLetter("D"),
          id: "4",
          className: selectedLetter.toLowerCase() === "d" ? "activeColor" : "",
        },
        {
          key: "e",
          text: "E",
          onClick: () => filterByLetter("E"),
          id: "5",
          className: selectedLetter.toLowerCase() === "e" ? "activeColor" : "",
        },
        {
          key: "f",
          text:  "F",
        onClick: () => filterByLetter("F"),
          id: "6",
          className: selectedLetter.toLowerCase() === "f" ? "activeColor" : "",
        },
        {
          key: "g",
          text:  "G ",
         onClick: () => filterByLetter("G"),
          id: "7",
          className: selectedLetter.toLowerCase() === "g" ? "activeColor" : "",
        },
        {
          key: "h",
          text:  "H",
          onClick: () => filterByLetter("H"),
          id: "8",
          className: selectedLetter.toLowerCase() === "h" ? "activeColor" : "",
        },
        {
          key: "i",
          text:  "I",
        onClick: () => filterByLetter("I"),
          id: "9",
          className: selectedLetter.toLowerCase() === "i" ? "activeColor" : "",
        },
        {
          key: "j",
          text:  "J",
          id: "10",
        onClick: () => filterByLetter("J"),
          className: selectedLetter.toLowerCase() === "j" ? "activeColor" : "",
        },
        {
          key: "k",
          text:  "K",
          id: "11",
       onClick: () => filterByLetter("K"),
          className: selectedLetter.toLowerCase() === "k" ? "activeColor" : "",
        },
        {
          key: "l",
          text: "L",
          id: "12",
        onClick: () => filterByLetter("L"),
          className: selectedLetter.toLowerCase() === "l" ? "activeColor" : "",
        },
        {
          key: "m",
          text:  "M",
          id: "13",
        onClick: () => filterByLetter("M"),
          className: selectedLetter.toLowerCase() === "m" ? "activeColor" : "",
        },
        {
          key: "n",
          text:  "N",
          id: "14",
       onClick: () => filterByLetter("N"),
          className: selectedLetter.toLowerCase() === "n" ? "activeColor" : "",
        },
        {
          key: "o",
          text: "O",
          id: "15",
        onClick: () => filterByLetter("O"),
          className: selectedLetter.toLowerCase() === "o" ? "activeColor" : "",
        },
        {
          key: "p",
          text:  "P",
          id: "16",
         onClick: () => filterByLetter("P"),
          className: selectedLetter.toLowerCase() === "p" ? "activeColor" : "",
        },
        {
          key: "q",
          text: "Q",
          id: "17",
          onClick: () => filterByLetter("Q"),
          className: selectedLetter.toLowerCase() === "q" ? "activeColor" : "",
        },
        {
          key: "r",
          text:  "R",
          id: "18",
          onClick: () => filterByLetter("R"),
          className: selectedLetter.toLowerCase() === "r" ? "activeColor" : "",
        },
        {
          key: "s",
          text:  "S",
          id: "19",
        onClick: () => filterByLetter("S"),
          className: selectedLetter.toLowerCase() === "s" ? "activeColor" : "",
        },
        {
          key: "t",
          text:  "T",
          id: "20",
        onClick: () => filterByLetter("T"),
          className: selectedLetter.toLowerCase() === "t" ? "activeColor" : "",
        },
        {
          key: "u",
          text: "U",
          id: "21",
        onClick: () => filterByLetter("U"),
          className: selectedLetter.toLowerCase() === "u" ? "activeColor" : "",
        },
        {
          key: "v",
          text:  "V",
          id: "22",
          onClick: () => filterByLetter("V"),
          className: selectedLetter.toLowerCase() === "v" ? "activeColor" : "",
        },
        {
          key: "w",
          text:"W",
          id: "23",
         onClick: () => filterByLetter("W"),
          className: selectedLetter.toLowerCase() === "w" ? "activeColor" : "",
        },
        {
          key: "x",
          text: "X",
          id: "24",
        onClick: () => filterByLetter("X"),
          className: selectedLetter.toLowerCase() === "x" ? "activeColor" : "",
        },
        {
          key: "y",
          text: "Y",
          id: "25",
         onClick: () => filterByLetter("Y"),
          className: selectedLetter.toLowerCase() === "y" ? "activeColor" : "",
        },
        {
          key: "z",
          text:  "Z",
          id: "26",
          onClick: () => filterByLetter("Z"),
          className: selectedLetter.toLowerCase() === "z" ? "activeColor" : "",
        },
    
      ];
      const _farItems: ICommandBarItemProps[]= [];
      return (
        <NewDocumentWrapper>
        <div>
              <div className="classfilterDiv">
        <CommandBar
          items={_items}
          farItems={_farItems}
          styles={commandBarItemStyls}
        />
      </div>
        </div>
        </NewDocumentWrapper>
      )
}

export default CommandBarComponent;