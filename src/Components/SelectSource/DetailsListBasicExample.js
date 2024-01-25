import React, { useState } from "react";
import { style } from "./styles";
import styled from "styled-components";
import {
  Persona,
  PersonaSize,
  PersonaPresence,
} from "@fluentui/react/lib/Persona";
import EmployeeDetailModal from "./EmployeeDetailModal";
import {
    Modal,
    IIconProps,
    IButtonStyles,
    IconButton,
    Icon,
    createTheme,
  } from "office-ui-fabric-react";
  import { getTheme, ITheme } from "@fluentui/react/lib/Styling";
import {
    DetailsList,
    DetailsListLayoutMode,
    IColumn,
    IDetailsColumnStyles,
    SelectionMode,
  } from "office-ui-fabric-react/lib/DetailsList";
  const ThemeColorsFromWindow = (window).__themeState__.theme;
const siteTheme = createTheme({
  //pass this object to your components
  palette: ThemeColorsFromWindow,
});
const NewDocumentWrapper = styled.div`
  ${style}
`;
const personaTextStyles = {
    primaryText: {
      lineHeight: "20px",
    },
    secondaryText: {
      lineHeight: "20px",
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
const ListStyles = {
    // root: {
    //     overflowX: "auto",
    //     selectors: {
    //         "& [role=grid]": {
    //             display: "flex",
    //             flexDirection: "column",
    //             alignItems: "normal",
    //             // height: "60vh"
    //         },
    //         ".ms-TextField": {
    //             padding: "0px 3px;"
    //         }
    //     }
    // },
    headerWrapper: {
      flex: "0 0 auto",
      selectors: {
        "& [role=presentation]": {
          selectors: {
            "& [role=row]": {
             background: theme.palette.themePrimary,
              padding: "4px 0px",
              color:'inherit',
              selectors: {
                ".ms-DetailsHeader-cellTitle": {
                  color: "#fff",
                },
                ".ms-DetailsHeader-cell:hover": {
                  color: "#fff",
                  background: theme.palette.themePrimary,
                },
              },
            },
          },
        },
      },
    },
    contentWrapper: {
      flex: "1 1 auto",
      ".ms-DetailsRow-fields": {
        alignItems: "center",
      },
    },
  };
const DetailsListBasicExample = (props) => {
    //console.log(props);
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
    let _columns = [];

    _columns.push({
      key: "0",
      name:"Name",
      fieldName: "name",
      minWidth: 215,
      maxWidth: 250,
      isResizable: true,
      isRowHeader: true,
      isPadded: true,
    });
    var mappedcustomcol = JSON.parse(props.employees[0].mappedfields);

     
    var project =
      mappedcustomcol.length > 0
        ? mappedcustomcol.filter(
            (item) => item.ExistingList == "Projects"
          )[0].ExternalList
        : "Projects";
    var skill =
      mappedcustomcol.length > 0
        ? mappedcustomcol.filter(
            (item) => item.ExistingList == "Skills"
          )[0].ExternalList
        : "Skills";
    var hobbies =
      mappedcustomcol.length > 0
        ? mappedcustomcol.filter(
            (item) => item.ExistingList == "Hobbies"
          )[0].ExternalList
        : "Hobbies";
    var dob =
      mappedcustomcol.length > 0
        ? mappedcustomcol.filter(
            (item) => item.ExistingList == "Date of Birth"
          )[0].ExternalList
        : "Date of Birth";
    var doj =
      mappedcustomcol.length > 0
        ? mappedcustomcol.filter(
            (item) => item.ExistingList == "Date of Join"
          )[0].ExternalList
        : "Date of Join";
    if (props.employees.length > 0) {
      _columns.push({
        key: "1",
        name: "Department",
        fieldName: "department",
        minWidth: 200,
        maxWidth: 250,
        isResizable: true,
        isRowHeader: true,
        isPadded: true,
      });
    }
    // if (props.employees[0].emailOn) {
  ;
    if (props.employees.length > 0) {
      _columns.push({
        key: "2",
        name: "Location",
        fieldName: "location",
        minWidth: 100,
        maxWidth: 150,
        isResizable: true,
        isRowHeader: true,
        isPadded: true,
      });
    }
  
    if (props.employees.length > 0 ) {
    
        _columns.push({
          key: "3",
          name:"Work Phone",
          fieldName: "workphone",
          minWidth: 120,
          maxWidth: 200,
          isResizable: true,
          isRowHeader: true,
          isPadded: true,
        });
    
    }
    if (props.employees.length > 0) {
  
        _columns.push({
          key: "4",
          name: "Mobile",
          fieldName: "mobile",
          minWidth: 120,
          maxWidth: 200,
          isResizable: true,
          isRowHeader: true,
          isPadded: true,
        });
    
    }
  
   
   
    if (props.employees.length > 0)  {
    _columns.push({
      key: "5",
      name: "Email",
      fieldName: "email",
      minWidth: 200,
      maxWidth: 250,
      isResizable: true,
      isRowHeader: true,
      isPadded: true,
    });
  }
  
  
   if (props.employees.length > 0)  {
      _columns.push({
        key: "6",
        name:"Manager",
        fieldName: "manager",
        minWidth: 150,
        maxWidth: 200,
        isResizable: true,
        isRowHeader: true,
        isPadded: true,
      });

      _columns.push({
        key: "7",
        name:"Date of Birth",
        fieldName: dob,
        minWidth: 150,
        maxWidth: 200,
        isResizable: true,
        isRowHeader: true,
        isPadded: true,
      });

      _columns.push({
        key: "8",
        name:"Date of Join",
        fieldName: doj,
        minWidth: 150,
        maxWidth: 200,
        isResizable: true,
        isRowHeader: true,
        isPadded: true,
      });

      _columns.push({
        key: "8",
        name:"Projects",
        fieldName: project,
        minWidth: 150,
        maxWidth: 200,
        isResizable: true,
        isRowHeader: true,
        isPadded: true,
      });

      _columns.push({
        key: "8",
        name:"Skills",
        fieldName: skill,
        minWidth: 150,
        maxWidth: 200,
        isResizable: true,
        isRowHeader: true,
        isPadded: true,
      });

      _columns.push({
        key: "8",
        name:"Hobbies",
        fieldName: hobbies,
        minWidth: 150,
        maxWidth: 200,
        isResizable: true,
        isRowHeader: true,
        isPadded: true,
      });
    }
  
    let _allItems = [];
    props.employees.map((item) => {
      var diffStyle;
     
     
      // var extColor=item.accName.indexOf('#ext') > -1;
     
        diffStyle = {
          backgroundImage:"url('" + item.image + "')",
          backgroundRepeat: "no-repeat",
          width: "40px",
          height: "41px",
          position: "absolute",
          top: "10px",
          borderRadius: "50%",
          zIndex: 1,
          backgroundPosition: "center",
          backgroundSize: "cover",
        };   
     
  
      const examplePersona = {
        //imageUrl: item.img,
        imageInitials: item.initials,
        text: item.name,
        secondaryText:
           item.job,
      };
  
      // run this function from an event handler or an effect to execute scroll
  
      const persona = (
        <>
        
           
              <div
                className="makeCenterStyles"
                style={{ cursor: "pointer" }}
                onClick={() => openPanelForUser(item)}
              >
                <div style={diffStyle}></div>
                <Persona
                  imageInitials={item.initials}
                  text={item.name}
                  secondaryText={
                   item.job
                        
                  }
                  size={PersonaSize.size40}
                  styles={personaTextStyles}
                />
              </div>
         
        
        </>
      );
  
      //console.log(item.customfld);
      var dataObj = {
        key: item.email,
        name: persona,
        email: item.email,
        location: item.location,
        job: item.job,
        workphone: item.workphone,
        mobile: item.mobile,      
        department: item.department,
        manager: item.manager,
      };
    
     
     
      var _project = item[project];
      var _skill = item[skill];
      var _hobbies = item[hobbies];
      var _dob = item[dob];
      var _doj = item[doj];
      dataObj[dob] = _dob === undefined ? "" : _dob;
      dataObj[doj] = _doj === undefined ? "" : _doj;
      dataObj[project] = _project === undefined ? "" : _project;
      dataObj[skill] = _skill === undefined ? "" : _skill;
      dataObj[hobbies] =_hobbies === undefined ? "" : _hobbies;
     
  
      _allItems.push(dataObj);
    });
    
    return(
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
        <div
        className="listView"
        id="ViewListId"
        data-is-scrollable="true"
      >
        <DetailsList
          className="listStylesClass"
          setKey="items"
          styles={ListStyles}
          items={_allItems}
          columns={_columns}
          layoutMode={DetailsListLayoutMode.justified}
          isHeaderVisible={true}
          onShouldVirtualize={() => false}
          selectionMode={SelectionMode.none}
          ariaLabelForGrid="Item details"
        />
     
      </div>
      </NewDocumentWrapper></>
    )
};

export default DetailsListBasicExample;