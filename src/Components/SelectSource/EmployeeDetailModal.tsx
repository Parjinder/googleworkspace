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
  Shimmer,
} from "office-ui-fabric-react";
import {
  Persona,
  PersonaSize,
  PersonaPresence,
  IPersonaStyles,
} from "@fluentui/react/lib/Persona";
import { createTheme } from "office-ui-fabric-react";
import DefaultImage from "../assets/images/DefaultImg1.png";
import { gapi } from "gapi-script";
import { style } from "./styles";
import styled from "styled-components";

const NewDocumentWrapper = styled.div`
  ${style}
`;
var diffStyle: any;
var diffStyleMan:any;
const EmployeeDetailModal = (props: any) => {
  const [user, setUser] = useState<any>(null);
  const [showManager, setshowManager] = useState(true);
  React.useEffect(() => {
    if (props.user) {
      console.log(props);
      GetDataForModal();
    }
  }, [props.user.id]);
  function formatBDate1(d:any) {
    if (d != "") {
      // var numbers = d.match(/\d+/g);
      // var date1 = new Date(numbers[2], numbers[1]-1, numbers[0]);
      if (d === null || d === undefined) {
      } else {
        if (d.indexOf("T") > 0) {
          var __date = new Date(d.split("T")[0].split('-'));
          // var str =
          //   (__date.getMonth() > 8
          //     ? __date.getMonth() + 1
          //     : "0" + (__date.getMonth() + 1)) +
          //   "/" +
          //   (__date.getDate() > 9 ? __date.getDate() : "0" + __date.getDate()) +
          //   "/" +
          //   __date.getFullYear();
            const monthNames = [
              "Jan",
              "Feb",
              "Mar",
              "Apr",
              "May",
              "June",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ];
            //let date = new Date(d);
            var dd = __date.getDate();
            var mm = monthNames[__date.getMonth()];
            return (d = mm + " " + dd);
        }
       
      }
    }
  }
  function formatDate2(d:any) {
    if (d.indexOf("T") > 0) {
      var __date = new Date(d.split("T")[0].split('-'));
     
        //let date = new Date(d);
        var dd = __date.getDate();
        var mm = __date.getMonth() + 1;
        var yyyy = __date.getFullYear();
        return (d = mm + "/" + dd + "/" + yyyy);
    }
    else{
    let date = new Date(d);
    var dd = date.getDate();
    var mm = date.getMonth() + 1;
    var yyyy = date.getFullYear();

    return (d = mm + "/" + dd + "/" + yyyy);
    }
  }
  async function getAllUsersGrpMInOrg(userEmail:any) {
    let page:any = "";
    let pageToken = "";
    let staffList:any = [];
    //alert(allletter);
    do {
      page = await gapi.client.directory.members.list({
        groupKey: userEmail,     
        maxResults: 100,
        pageToken: pageToken,
      });

      staffList = staffList.concat(page.result.members);

      pageToken = page.nextPageToken;
    } while (pageToken);

    return staffList;
  }
  
  async function getAllUsersGrpInOrg(userEmail:any) {
    let page:any = "";
    let pageToken = "";
    let staffList:any = [];
    //alert(allletter);
    do {
      page = await gapi.client.directory.groups.list({
        userKey: userEmail,     
        maxResults: 100,
        pageToken: pageToken,
      });

      staffList = staffList.concat(page.result.groups);

      pageToken = page.nextPageToken;
    } while (pageToken);

    return staffList;
  }
  const GetDataForModal = () => {
    var returnObject: any = null;
    var mappedcustomcol = JSON.parse(props.user.mappedfields);

    var aboutme =
      mappedcustomcol.length > 0
        ? mappedcustomcol.filter(
            (item: any) => item.ExistingList == "About Me"
          )[0].ExternalList
        : "About Me";
    var school =
      mappedcustomcol.length > 0
        ? mappedcustomcol.filter(
            (item: any) => item.ExistingList == "School"
          )[0].ExternalList
        : "School";
    var project =
      mappedcustomcol.length > 0
        ? mappedcustomcol.filter(
            (item: any) => item.ExistingList == "Projects"
          )[0].ExternalList
        : "Projects";
    var skill =
      mappedcustomcol.length > 0
        ? mappedcustomcol.filter(
            (item: any) => item.ExistingList == "Skills"
          )[0].ExternalList
        : "Skills";
    var hobbies =
      mappedcustomcol.length > 0
        ? mappedcustomcol.filter(
            (item: any) => item.ExistingList == "Hobbies"
          )[0].ExternalList
        : "Hobbies";
    var dob =
      mappedcustomcol.length > 0
        ? mappedcustomcol.filter(
            (item: any) => item.ExistingList == "Date of Birth"
          )[0].ExternalList
        : "Date of Birth";
    var doj =
      mappedcustomcol.length > 0
        ? mappedcustomcol.filter(
            (item: any) => item.ExistingList == "Date of Join"
          )[0].ExternalList
        : "Date of Join";
        var memberof=[];
        getAllUsersGrpInOrg(props.user.email).then((data:any) => {
             
          //console.log(data);
          if (data.length) {
           
            data.forEach((group:any) => {

              getAllUsersGrpMInOrg(group.email).then((data1) => {

                data1.filter((person:any) => person.email == props.user.email);
                console.log(data1)
              });
             
            });
          } 
        })
    var _aboutme = props.user[aboutme];
    var _school = props.user[school];
    var _project = props.user[project];
    var _skill = props.user[skill];
    var _hobbies = props.user[hobbies];
    var _dob = props.user[dob];
    var _doj = props.user[doj];
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
      manager: props.user.manager,
      AboutMe: _aboutme === undefined ? "" : _aboutme,
      School: _school === undefined ? "" : _school,
      Projects: _project === undefined ? "" : _project,
      Skills: _skill === undefined ? "" : _skill,
      Hobbies: _hobbies === undefined ? "" : _hobbies,
      DateofBirth: _dob === undefined ? "" :formatBDate1(_dob+"T"),
      DateofJoin: _doj === undefined ? "" : formatDate2(_doj+"T"),
      EmployeeId:props.user.employeeid,
      BuildingId:props.user.buildingid,
      FloorName:props.user.floorname,
      FloorSection:props.user.floorsection,
      Address:props.user.address,
      CostCenter:props.user.costcenter,
      managerprofilecard:props.user.managerprofilecard
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
    diffStyleMan = {
      backgroundImage: "url('" + props.user.managerprofilecard.image + "')",
      backgroundRepeat: "no-repeat",
      width: "56px",
      height: "56px",
      position: "absolute",
      top: "0px",
      borderRadius: "50%",
      zIndex: 1,
      backgroundPosition: "center",
      backgroundSize: "cover",
    };
    setUser(returnObject);
    setshowManager(true);
    //setshowAD(true);
    return returnObject;
  };
  return (
    <>
      <NewDocumentWrapper>
        {user && (
          <div style={{ paddingBottom: "1%", overflow: "hidden" }}>
            <div className="empDetailPanel">
              <div className="empMainDetailStyles">
                <div className="LeftalignPc">
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
                      {user.dept ? <span>{user.dept}</span> : ""}
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
                    style={
                      {
                        // marginLeft: "auto",
                        // marginRight: "10%",
                        // width: "36%",
                      }
                    }
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
              <div className="empDetailIconView">
                {user.email && (
                  <div>
                    <a
                      //style={{ paddingLeft: "0px" }}
                      className="empDetailIcon"
                      href={"mailto:"+user.email}
                      title={user.email}
                      target="_blank"
                    >
                      <Icon iconName="Message"></Icon>
                    </a>
                  </div>
                )}
                {user.email && (
                  <div>
                    <a
                      className="empDetailIcon"
                     href={"mailto:"+user.email}
                      title={user.email}
                      target="_blank"
                    >
                      <Icon iconName="Mail"></Icon>
                    </a>
                  </div>
                )}
                {user.wphone && (
                  <div>
                    <a
                      className="empDetailIcon"
                      href={"tel:"+user.wphone}
                      title={user.wphone}
                      target="_blank"
                    >
                      {/* <Icon icon={call16Filled} /> */}
                      <Icon iconName="Phone"></Icon>
                    </a>
                  </div>
                )}

                {/* <div>
                  <a
                    className="empDetailIcon"
                    //href={user.videoLink}
                    title={"Video Call"}
                    target="_blank"
                  >
                    <Icon iconName="Video"></Icon>
                  </a>
                </div> */}

                {/* <Panel
                    type={PanelType.custom}
                    customWidth="650px"
                    headerText="Edit profile"
                    isOpen={isOpenCustomNM1}
                    onDismiss={dismissPanelCustomNM1}
                    closeButtonAriaLabel={
                      props.langcode.Close ? props.langcode.Close : "Close"
                    }
                  >
                    <Pivot
                      style={{ paddingTop: "15px" }}
                      //styles={PivotStyles}
                      aria-label="Large Link Size Pivot Example"
                    //linkSize="large"
                    >
                      <PivotItem>
                        <Editprofile
                          editid={user.Id}
                          langcode={props.langcode}
                        />
                      </PivotItem>
                    </Pivot>
                  </Panel> */}

                <div>
                  <IconButton
                    className="editicon"
                    styles={{
                      root: {
                        position: "absolute",
                        // top: "40px",
                        right: "0px",
                        // cursor: "pointer",
                        // color: theme.palette.neutralPrimary,
                        //  marginLeft: "auto",
                        //  marginTop: "4px",
                        // marginRight: "2px",
                      },
                      rootHovered: {
                        //color: theme.palette.neutralDark,
                        backgroundColor: "#ededed",
                      },
                      icon: {
                        color: "#ce8704",
                      },
                    }}
                    title="Edit profile"
                    iconProps={{ iconName: "Edit" }}
                    ariaLabel="Edit profile"
                    // onClick={openPanelCustomNM1}
                  />
                </div>
              </div>
              <div className="empMoreDetailsBlock">
                <div className="labelSpanStylesTemp">
                  <label>{"Email"}</label>

                  <span className="clpbrdspan">
                    <a
                       href={"mailto:"+user.email}
                      title={user.email}
                      target="_blank"
                    >
                      {user.email}
                    </a>
                    {/* <Icon  className={styles.clpbrdsicon} onClick={() => EmailTextCopy } iconName="Copy"></Icon> */}
                  </span>
                </div>

                <div className="labelSpanStylesTemp">
                  <label>{"Work Phone"}</label>

                  <span className="clpbrdspan">
                    <a
                      href={"tel:"+user.wphone}
                    title={user.wphone}
                    target="_blank"
                    >
                      {user.wphone}
                    </a>
                    {/* <Icon className={styles.clpbrdsicon} onClick={() =>  navigator.clipboard.writeText(user.wphone)} iconName="Copy"></Icon> */}
                  </span>
                </div>

                <div className="labelSpanStylesTemp">
                  <label>Mobile</label>

                  <span className="clpbrdspan">
                    <a
                      href={"tel:" + user.mobile}
                      title={user.mobile}
                      target="_blank"
                    >
                      {user.mobile}
                    </a>
                    {/* <Icon className={styles.clpbrdsicon} onClick={() =>  navigator.clipboard.writeText(user.mobile)} iconName="Copy"></Icon> */}
                  </span>
                </div>

                <div className="labelSpanStyles">
                  <label>{"Employee ID"}</label>

                  <span>{user.EmployeeId}</span>
                </div>

                <div className="labelSpanStyles">
                  <label>{"Cost center"}</label>

                  <span>{user.CostCenter}</span>
                </div>
              </div>
              <div>
                <div className="personallabelSpanStyles">
                  <label>{"Building id"}</label>
                  <span>{user.BuildingId}</span>
                </div>

                <div className="personallabelSpanStyles">
                  <label>{"Floor name"}</label>
                  <span>{user.FloorName ? user.FloorName : ""}</span>
                </div>

                {/* {console.log(user.projects)} */}

                <div className="personallabelSpanStyles">
                  <label>{"Floor section"}</label>
                  <span>{user.FloorSection ? user.FloorSection : ""}</span>
                </div>

                <div className="personallabelSpanStyles">
                  <label>{"Address"}</label>
                  <span>{user.Address ? user.Address : ""}</span>
                </div>

                <div className="personallabelSpanStyles">
                  <label>{"MemberOf"}</label>
                  {/* <span>{user.Hobbies ? user.Hobbies : ""}</span> */}
                </div>

                {showManager && (
                <div className="empManagerStyle">
                        <h4>
                          {"Manager"}
                        </h4>
                       
                          <div>
                            <div
                              style={{ cursor: "pointer" }}
                              // onClick={() =>
                              //   GetDataForModal(props.user.managerprofilecard.email)
                              // }
                              className="empManagerLogo"
                            >
                              
                                <div>
                                  <Persona
                                    imageUrl={
                                      props.user.managerprofilecard.image
                                        
                                    }
                                    //imageInitials={user.manager.initials}
                                    //imageAlt={user.manager.initials}
                                   // presence={manpresence}
                                    //presenceTitle={manpresencestatus}
                                    size={PersonaSize.size56}
                                  />
                                </div>
                             
                            </div>
                            <div>
                              <div className="managerNameDet">
                                <span className="clpbrdspan">
                                  {props.user.managerprofilecard.name}
                                  {/* <Icon className={styles.clpbrdsicon} onClick={() =>  navigator.clipboard.writeText(user.manager.name)} iconName="Copy"></Icon> */}
                                
                                </span>
                              </div>
                              <div className="managerNameDet">
                                {props.user.managerprofilecard.department}
                              </div>
                              <div className="managerNameDet">
                                {props.user.managerprofilecard.job}
                              </div>
                            </div>
                          </div>
                        
                       
                      </div>)}
               
              </div>
            </div>
          </div>
        )}
      </NewDocumentWrapper>
    </>
  );
};
export default EmployeeDetailModal;
