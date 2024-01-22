
import React, { useState } from "react";
  import {
    Icon,
    Stack,
    ITheme,
    IconButton,
    Modal,
    Spinner,
    SpinnerSize,
    IIconProps,
    getTheme,
    IButtonStyles,
    Callout,
    PrimaryButton,
    Label,
    Link,
    DefaultButton,
    Checkbox,
    TextField,
    MessageBar,
    MessageBarType,
    Dialog,
    DialogType,
    TeachingBubble,
    DirectionalHint,
    ICalloutProps,
    ITeachingBubbleProps,
    positionCallout,
  } from "office-ui-fabric-react";
  import {
    Persona,
    PersonaSize,
    PersonaPresence,
    IPersonaStyles,
  } from "@fluentui/react/lib/Persona";
  import { createTheme } from "office-ui-fabric-react";
  import DefaultImage from "../assets/images/DefaultImg1.png";
  import { style } from "./styles";
import styled from "styled-components";

const NewDocumentWrapper = styled.div`
${style}
`;
var diffStyle:any;
const EmployeeDetailModal=(props: any) =>{
  const [user, setUser] = useState<any>(null);
  const [showManager, setshowManager] = useState(true);
  React.useEffect(() => {
    if (props.user) {
      GetDataForModal();
    }
  }, [props.user.id]);

  const GetDataForModal = () => {
    var returnObject:any = null;
    returnObject = {
      initials: props.user.initials,
      img: props.user.image,
      //customproperty:customproperty,
      name: props.user.name,
      dept: props.user.department,
      jtitle: props.user.job,
      loc: props.user.location,
      wphone: props.user.workphone,
      mobile: props.user.mobile,
      email: props.user.email,
      manager:props.user.manager,
     
    };
    diffStyle = {
      backgroundImage: "url('" + props.user.image + "')",
      backgroundRepeat: "no-repeat",
      width: "101px",
      height: "100px",
      position: "absolute",
      top: "0px",
      borderRadius: "50%",
      zIndex: 1,
      backgroundPosition: "center",
      backgroundSize: "cover",
    };
    setUser(returnObject);
    //setshowAD(true);
    return returnObject;
  }
    return(
      <>
      <NewDocumentWrapper>
      {user && (
        <div style={{ paddingBottom: "1%", overflow: "hidden" }}>
          <div className="empDetailPanel">
          <div className="empMainDetailStyles">
                <div>
                <div className="empLogo">
                  
                
                 
                    <div style={{ position: "relative" }}>
                      <div style={diffStyle}></div>
                      <Persona
                        //imageUrl={user.img}
                        imageInitials={user.initials}
                       
                        size={PersonaSize.size100}
                       
                       
                      />
                    </div>
                 

                
                </div>

                <div>
                  <div
                    style={{
                      display: "flex",
                      gap: "6px",
                      height: "22px",
                      alignItems: "center",
                    }}
                  >
                    <>
                      <div className="empTitle">
                        <span className="clpbrdspan">
                          {user.name}
                          {/* <Icon className={styles.clpbrdsicon} onClick={() =>  navigator.clipboard.writeText(user.name)} iconName="Copy"></Icon> */}
                        </span>
                      </div>
                  

                     
                    </>
                  </div>

                  <div className="empMainDetail">
                    {user.jtitle ? (
                     
                        <>
                          <span>{user.jtitle}</span> |{" "}
                        </>
                     ) : (
                      ""
                    )}
                    {user.dept ? (
                       
                        <span>{user.dept}</span>
                      
                    ) : (
                      ""
                    )}
                  </div>

                  {user.loc ? (
                    <div className="empMainDetail">{user.loc}</div>
                  ) : (
                    ""
                  )}
                 
                
                </div>
                </div>
            
                  <div>
                  <div
                    style={{
                      // marginLeft: "auto",
                      // marginRight: "10%",
                      // width: "36%",
                    }}
                  >
                    {/* <img
                      // style={{ width: "40%" }}
                      title={
                        "Company Logo"
                      }
                      src={DefaultImage}
                    /> */}
                  </div>
                  </div>
               

                
              </div>
          </div>
</div>
      )}
      </NewDocumentWrapper>
      </>
    )
}
export default EmployeeDetailModal