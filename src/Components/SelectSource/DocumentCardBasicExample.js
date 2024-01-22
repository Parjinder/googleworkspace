import React, { useState } from "react";
import { style } from "./styles";
import styled from "styled-components";

import { Icon } from "@fluentui/react/lib/Icon";
import { DocumentCard } from "office-ui-fabric-react/lib/DocumentCard";
import {
  Persona,
  PersonaSize,
  PersonaPresence,
} from "@fluentui/react/lib/Persona";
import EmployeeDetailModal from "./EmployeeDetailModal";
import { useBoolean } from "@uifabric/react-hooks";
import {
  Modal,
  // IIcoProps,
  // IButtoStyles,
  IconButton,
  IButtonStyles,
  IIconProps,
  Stack,
  Spinner,
  SpinnerSize,
  IExpandingCardProps,
  keyframes,
  ITheme,
  createTheme,
} from "office-ui-fabric-react";
import { getTheme } from "@fluentui/react/lib/Styling";
const NewDocumentWrapper = styled.div`
  ${style}
`;

const modalPropsStylesEmpPC = {
  main: {
    maxWidth: 1000,
    minWidth: 1000,
    maxHeight: "100%",
    // transition: 'opacity 0.3s'
  },
};

const ThemeColorsFromWindow = (window).__themeState__.theme;
const siteTheme = createTheme({
  //pass this object to your components
  palette: ThemeColorsFromWindow,
});
const iconButtonStyles = {
  root: {
    //color: theme.palette.neutralPrimary,
    marginLeft: "auto",
    marginTop: "4px",
    marginRight: "2px",
  },
  rootHovered: {
    //color: theme.palette.neutralDark,
    backgroundColor: "#ededed",
  },
};
const theme = getTheme();
let _adaptiveCard = null;
const DocumentCardBasicExample = (props) => {
 
  console.log(props);
  //const [isModalOpen, { toggle: toggleModal }] = useBoolean(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
    
  
  const hideModal=()=> {
    setIsModalOpen(false);
  }
  const openPanelForUser = (user) => {
    _adaptiveCard = (
      <EmployeeDetailModal
        user={user}
        
      />
    );
    setIsModalOpen(true);
  };
  return (
    <><NewDocumentWrapper>
      <Modal
      isOpen={isModalOpen}
      onDismiss={hideModal}
      isBlocking={true}
      styles={modalPropsStylesEmpPC}
      topOffsetFixed={false}
    >
      <div>
        <IconButton
          className="closeiconprofile"
          styles={iconButtonStyles}
          iconProps = {{iconName: 'Cancel'}}
          ariaLabel="Close popup modal"
          onClick={hideModal} />
        {_adaptiveCard}
      </div>
    </Modal>
        <div
          className="gridDiv">
            
          {props.employees.map((item) => {
            var diffStyle = {
              // backgroundImage: item.img +',linear-gradient(to Bottom Left,rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgba(255, 255, 255, 0), rgb(128, 0, 128))',
              backgroundImage: "url('" + item.image + "')",
              // backgroundImage: {{item.img, linearGradient(to top right, #fffeff00,#55435500,#55435500,#9f479f87,#863596)}},
              // backgroundImage:colorgrad,
              // backgroundImage: "linear-gradient(to Bottom Left,#ffffff00, #ffffff00,#ffffff00, #bf6fe8)!important",
              cursor: "pointer",
              backgroundRepeat: "no-repeat",
              width: "100px",
              height: "100px",
              position: "absolute",
              // top: "9px",
              borderRadius: "48%",
              zIndex: 1,
              backgroundPosition: "center",
              backgroundSize: "cover",
            };
            return (
              <>
                <DocumentCard className="docCardStyle"
                  styles={{
                    root: {
                      minWidth: "150px !important",
                    },
                  }}>
                  {" "}
                  <div className="makeCenterStyles">
                    <div
                      style={diffStyle}
                      onClick={() => openPanelForUser(item)}
                      // onMouseOver={() => openhoverDiv(item)}
                      // onMouseLeave={() => setIsShown(false)}
                      className="Onhover"
                    ></div>
                    <Persona
                      // imageUrl={colorgrad}
                      imageInitials={item.initials}
                      // presence={presence}
                      // presenceTitle={item.presence}
                      // initialsColor={item.personaColor}
                      size={PersonaSize.size100} />
                  </div>
                  <div className="nameStyles">
                    {item.name}
                  </div>
                  <div className="titleStyles">
                    <a
                      style={{
                        color: "#363636",
                        textDecoration: "none",
                      }}
                      href={"mailto:" + item.email}
                      target="_blank"
                    >
                      <Icon iconName="Mail"></Icon>
                      {item.email}
                    </a>
                  </div>
                  {!item.job || item.job == "" || item.job == "-" ? (
                    ""
                  ) : (
                    <div className="titleStylesJT">{item?.job}</div>
                  )}
                  {!item.department ||
                    item.department == "" ||
                    item.department == "-" ? (
                    ""
                  ) : (
                    <div className="titleStylesDept">{item.department}</div>
                  )}
                  {!item.location ||
                    item.location == "" ||
                    item.location == "-" ? (
                    ""
                  ) : (
                    <div className="titleStylesLoc">
                      <Icon iconName="Location"></Icon>
                      {item.location}
                    </div>
                  )}
                  {!item.workphone ||
                    item.workphone == "" ||
                    item.workphone == "-" ? (
                    ""
                  ) : (
                    <div className="titleStyles">
                      <a
                        style={{
                          color: "#363636",
                          textDecoration: "none",
                        }}
                        // href={item.phoneLink}
                        target="_blank"
                      >
                        <Icon iconName="Phone"></Icon>
                        {item.workphone}
                      </a>
                    </div>
                  )}
                  {!item.mobile || item.mobile == "" || item.mobile == "-" ? (
                    ""
                  ) : (
                    <div className="titleStyles">
                      <a
                        style={{
                          color: "#363636",
                          textDecoration: "none",
                        }}
                        href={"tel:" + item.mobile}
                        target="_blank"
                      >
                        <Icon iconName="CellPhone"></Icon>
                        {item.mobile}
                      </a>
                    </div>
                  )}
                  {!item.manager || item.manager == "" || item.manager == "-" ? (
                    ""
                  ) : (
                    <div className="titleStyles">
                      <a
                        style={{
                          color: "#363636",
                          textDecoration: "none",
                        }}
                        href={"mailto:" + item.manager}
                        target="_blank"
                      >
                        <Icon iconName="Mail"></Icon>
                        {item.manager}
                      </a>
                    </div>
                  )}
                  <div className="titleStylesCF"></div>
                </DocumentCard>
              </>
            );
          })}
        </div>
      </NewDocumentWrapper></>
 
  );
};

export default DocumentCardBasicExample;
