
import { style } from "./styles";
import styled from "styled-components";
import React, { useState } from "react";


import {
  Persona,
  PersonaSize,
  PersonaPresence,
} from "@fluentui/react/lib/Persona";
import {
    Modal,
    IIconProps,
    IButtonStyles,
    IconButton,
    Icon,
    createTheme,
  } from "office-ui-fabric-react";
  import { getTheme, ITheme } from "@fluentui/react/lib/Styling";
  import EmployeeDetailModal from "./EmployeeDetailModal";
  const ThemeColorsFromWindow = (window).__themeState__.theme;
const siteTheme = createTheme({
  //pass this object to your components
  palette: ThemeColorsFromWindow,
});
const NewDocumentWrapper = styled.div`
  ${style}
`;
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
const modalPropsStylesEmpPC = {
  main: {
    maxWidth: 1000,
    minWidth: 1000,
    maxHeight: "100%",
    // transition: 'opacity 0.3s'
  },
};
const theme = getTheme();
let _adaptiveCard = null;
const TileView = (props) => {
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
        <>
        <NewDocumentWrapper>
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
    <div className="tileView">
    {props.employees.map((item) => {
      const examplePersona = {
        //imageUrl: item.img,
        imageInitials: item.initials,
      };
      var diffStyle;
    
        diffStyle = {
          backgroundImage:"url('" + item.image + "')",
          backgroundRepeat: "no-repeat",
          width: "72px",
          height: "72px",
          position: "absolute",
          top: "5px",
          borderRadius: "50%",
          zIndex: 1,
          backgroundPosition: "center",
          backgroundSize: "cover",
        };

  
    
      return (
        <div className="empView">
          
            <div className="makeCenterStyles">
            <div
                            style={diffStyle}
                          onClick={() => openPanelForUser(item)}
                          ></div>
               <Persona
                            {...examplePersona}
                            coinSize={72}
                           // presenceTitle={item.presence}
                            size={PersonaSize.size72}
                          //  initialsColor={item.personaColor}
                           // presence={presence}
                          //style={{ flexDirection: "column" }}
                          />
            </div>
        
          <div className="nameStyles">{item.name}</div>
         
        
        
        </div>
      );
    })}
    
  </div>
  </NewDocumentWrapper>
  </>
  )

}

export default TileView;