import { css } from "styled-components";

const style = () => css`
  flex: 1;
  .edp {
    height: 100%;
    background-color: #fff;
    overflow: auto;
  }
  .labelSpanStyles {
    margin-bottom: 2%;
    width: 31%;
    float: left;
    margin-right: 2%;
  }
  .labelSpanStyles label {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    padding: 0px;
    color: #333;
  }
  .labelSpanStyles span {
    display: flex;
   
  }
  .labelSpanStylesTemp {
    margin-bottom: 1%;
    width: 31%;
    float: left;
    margin-right: 2%;
  }
  .labelSpanStylesTemp label {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    padding: 0px;
    color: #333;
  }
  .labelSpanStylesTemp a {
    color: #333;
    text-decoration: none;
  }
  .labelSpanStyles a {
    color: #333;
    text-decoration: none;
  }
  
  .labelSpanStylesTemp span a {
    color: #333 !important;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }
  .empDetailIcon {
    padding: 0px 15px;
    color: "[theme:themePrimary]";
    text-decoration: none;
    font-size: 20px;
    cursor: pointer;
  }
  .custom-row {
    height: 100vh;
    align-items: center;
    justify-content: center;
    background-color: #dfdfdf;
  }
  .labelSpanStylesTemp label {
    width: 100%;
    font-size: 14px;
    font-weight: 500;
    padding: 0px;
    color: #333;
  }
  .empMoreDetailsBlock {
    flex-wrap: wrap;
    margin-top: 1%;
    border-bottom: 1px solid #ddd;
    display: flex;
  }
  .edp .tileView .makeCenterStyles {
    width: 65%;
  }
  .personallabelSpanStyles {
    margin-top: 1%;
   //padding-bottom: 8px;
    color: #333;
    display: grid;
    grid-template-columns: 1fr 3fr;
  }
  .personallabelSpanStyles span {
    max-width: 84%;
  }
  .personallabelSpanStyles span {
    max-width: 75%;
  }
  .LeftalignPc{
    display: flex;
    width: fit-content;
  }
  .personallabelSpanStyles span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    max-width: 100%;
    
  }
  .personallabelSpanStyles label {
    // width: auto;
    font-size: 14px;
    font-weight: 500;
    padding: 0px;
  }
  .searchFiltersDiv {
    float: left;
    flex-grow: 2;
    flex-flow: wrap;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 5px;
  }
  .searchFiltersDiv>div {
    position: relative;
   
  }
  .filterDiv {
    width: 100%;
    margin-bottom: 2%;
    overflow: hidden;
  }
  .filterDiv .ms-OverflowSet-item .ms-CommandBarItem-link :hover {
    background-color: "[theme:themePrimary]";
    color: #fff;
  }
  .filterDiv .ms-CommandBar-overflowButton,
  .filterDiv .ms-OverflowSet-item .ms-CommandBarItem-link:hover {
    color: #fff !important;
  }
  .filterDiv .ms-OverflowSet-item .ms-CommandBarItem-link,
  .filterDiv .ms-CommandBar-overflowButton {
    border: 0px !important;
    background: inherit;
    color: #333;
    padding: 0px 0px !important;
  }
  .activeColor {
    background-color: "[theme:themePrimary]" !important;
    color: #fff !important;
  }
  .closeiconprofile {
    position: absolute;
    right: 10px;
    top: 0px;
    cursor: pointer;
  }
  .empDetailPanel {
    width: 100%;
    padding: 2% 3% 8px 3%;
    box-sizing: border-box;
    // height: 110vh;
  }
  .empMainDetailStyles .empLogo {
    // margin-right: 2%;
    max-width: 110px;
  }
  .empDetailIconView {
    width: 100%;
    padding-bottom: 1%;
    gap: 5px;
    border-bottom: 1px solid #ddd;
    position: relative;
    display:flex;
  }
  .empTitle {
    font-size: 16px;
    font-weight: 500;
    padding-bottom: 2px;
    color: #333;
    height: 22px;
    // display: flex;
    // align-items: center;
  }
  .empMainDetail {
    font-size: 12px;
    font-weight: 400;
    padding-bottom: 1px;
    color: #333
  }
  .empLogo {
    position: relative;
  }
  .empLogo img {
    max-width: 100%;
    // object-fit: fill;
  }
  .empMainDetailStyles {
    width: 97%;
    margin-bottom: 2%;
    // gap: 5px;
    display: flex;
    justify-content: space-between;
  }
  .activeColor i {

    color: #fff !important;
  }
  .spinnerLoadStyle {
    margin-top: 6%;
  }
  .activeColor :hover {
    background-color: #f4f4f4;
   
  }
  
.clpbrdspan {
  display: "flex";
  gap: 18px;
  align-items: "center";
  cursor: pointer;
}
  .edp .searchFiltersDiv {
    float: left;
    flex-grow: 2;
    flex-flow: wrap;
    display: flex;
    gap: 5px;
  }
  .searchBoxStyles {
    width: 100% !important;
    border: 0px;
    // margin-right: 1%;
    float: left;
    border-bottom: 1px solid #ddd;
    background: inherit;
    color:#333;
  }
  .iconsFilterDiv {
    width: 100%;
    margin-bottom: 1%;
  }
  .iconsFilterDiv>div {
    flex-flow: row nowrap;
  }
  .container {
    max-width: 100%;
    margin: 0px auto;
    height: auto;
    background-color: "[theme:themePrimary]";
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  }
  .mainDiv {
    max-width: 100%;
    position: relative;
  }
  .container .Card {
    width: 20%;
    float: left;
    background: #ddd;
    text-align: center;
  }
  .gridDiv:not(:last-child),
.edp .tileView:not(:last-child) {
  margin-bottom: 0 !important;
}

.edp .tileView:not(:first-child) {
  margin-top: 0 !important;
}
  .empDetailsView {
    width: 100%;
  }
  #ViewDiv {
    display: block !important;
    width: 100%;
    page-break-inside: avoid !important;
    position: relative !important;
    overflow-x: visible !important;
    page-break-before: auto;
    page-break-after: auto;
  
  }
  .titleStyles {
    font-size: 13px;
    font-weight: 400;
    height: auto;
    line-height: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    // padding: 0px 0px 2px;
  }
  .viewIconsStyle {
    font-size: 26px;
    font-weight: 600;
    color: "[theme:themePrimary]";
    margin-right: 8px;
    cursor: pointer;
  }

  .viewIconsStyleActive {
    font-size: 26px;
    font-weight: 600;
    color: "[theme:themePrimary]";
    margin-right: 8px;
    cursor: pointer;
    border-top: 1px solid "[theme:themePrimary]";
  }

  .viewIconsStyleT {
    font-size: 18px;
    font-weight: 600;
    color: "[theme:themePrimary]";
    margin-right: 8px;
    cursor: pointer;
    padding-top: 3px;
  }

  .viewIconsStyleActiveT {
    font-size: 18px;
    font-weight: 600;
    color: "[theme:themePrimary]";
    margin-right: 8px;
    cursor: pointer;
    border-bottom: 2px solid "[theme:themePrimary]";
    padding-top: 3px;
  }
  .titleStylesJT {
    font-size: 13px;
    font-weight: 400;
    height: auto;
    line-height: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-bottom: 2px;
    // padding: 0px 0px 2px;
    // color: #333;
  }
  .titleStylesCF {
    font-size: 13px;
    font-weight: 400;
    height: auto;
    line-height: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    max-width: 100%;
    min-width: 20%;
    // padding: 0px 0px 2px;
    // color: #333;
  }
  .titleStylesDept {
    font-size: 13px;
    font-weight: 400;
    height: auto;
    line-height: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-bottom: 2px;
    // padding: 0px 0px 2px;
    // color: #333;
  }
  .makeCenterStyles {
    width: 69%;
    margin: 0px auto;
    display: flex;
    justify-content: center;
  }
  .iconsDiv {
    width: auto;
    margin: 0px;
    gap: 10px;
   
  }
  .ms-Persona-primaryText,
  .ms-Persona-secondaryText {
    line-height: 20px;
  }
  .gridDiv {
    width: 100%;
    display: flex;
    flex-flow: wrap;
    margin-bottom: 6%;
  }
  .iconsDiv i {
    font-size: 22px;
    font-weight: 400;
    color: "[theme:themePrimary]";
    // margin-right: 8px;
    cursor: pointer;
    margin-top: 4px;
    // padding-bottom: 3px;
    height: 24px;
  }

  .iconsDivT {
    font-size: 17px;
    font-weight: 400;
    color: "[theme:themePrimary]";
    // margin-right: 8px;
    cursor: pointer;
    margin-top: 4px;
    // padding-bottom: 3px;
    height: 24px;
  }

  .iconsDivT:active {
    font-size: 22px;
    font-weight: 400;
    color: "[theme:themePrimary]";
    // margin-right: 8px;
    cursor: pointer;
    margin-top: 4px;
    // padding-bottom: 3px;
    height: 24px;
  }

  .iconsDiv i :active {
    font-size: 22px;
    font-weight: 400;
    color: "[theme:themePrimary]";
    // margin-right: 8px;
    cursor: pointer;
    margin-top: 4px;
    // padding-bottom: 3px;
    height: 24px;
  }
  .makeCenterStyles div {
    flex-direction: column;
  }
  .titleStylesLoc {
    font-size: 13px;
    font-weight: 400;
    height: auto;
    line-height: 17px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding-left: 2px;
    // padding: 0px 0px 2px;
    color: #3a3a3a;
  }
  .titleStyles a {
    color: #333;
    text-decoration: none;
  }
  .listView {
    max-width: 100%;
    position: relative;
  }
  .empView {
    float: left;
    width: 12.3%;
    text-align: center;
    padding-bottom: 5px;
    margin-bottom: 1%;
    cursor: pointer;
    border: 1px solid #ddd;
    padding-top: 0%;
    position: relative;
    overflow: hidden;
  }
  .tileView .empView {
    margin-bottom: 0%;
  }
  .tileView .nameStyles {
    padding: 5px 5px 0px 5px;
    font-size: 13px;
  }
  .tileView {
    width: 100%;
    float: left;
    margin-top: 1%;
    margin-bottom: 5%;
  }

  .tileView .makeCenterStyles {
    width: 66%;
    margin: 5px auto 0px;
    display: flex;
    justify-content: center;

  }
  .listStylesClass {
    max-height: 700px;
    max-width: 100%;
  }
  .tileView .makeCenterStyles div {
    flex-direction: column;
  }
  .row {  
    background-color: #fff;
    padding: 20px;
    height: 100%;
    min-height: 700px;
    margin: 0;
  }
  .titleStylesLoc i {
    vertical-align: middle;
    padding-right: 5px;
    color: "[theme:themePrimary]";
    font-size: 12px;
    padding-bottom: 2px;
  }
  .nameStyles {
    font-weight: 600;
    font-size: 15px;
    color: #000;
    padding: 10px 5px 5px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .docCardStyle {
    padding: 10px;
    width: 8%;
    text-align: center;
    display: inline-block;
    color: #000;
    border: none;
    flex: 0 1 0;
    min-width: 170px;
    border: 1px solid #ddd;
    margin: 0px 12px 12px 0px;
    position: relative;
    background: #fff;
    overflow: hidden;
    padding-bottom: 45px;
  }
  .source-container {
    background-color: #fff;
    display: flex;
    flex: 1,
    padding: 20px;
    margin-bottom: 20px;
    display: flex;
    min-height: 200px;
    box-shadow: 0 1px 1px 0 rgba(10,22,70,.1), 0 0 1px 0 rgba(10,22,70,.06);
    border-radius: 4px;
    cursor: pointer;
    .content-container {
      flex: 2;
      flex-direction: column;
      display: flex;
      justify-content: center;
      .title {
        font-size: 18px;
        font-weight: 600;
      }
      .content {
        font-size: 16px;
      }
    }
  
    .icon-container {
      flex: 1;
      flex-direction: row;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

export { style };
