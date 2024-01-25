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
import { style } from "./styles";
import styled from "styled-components";

const NewDocumentWrapper = styled.div`
  ${style}
`;
var diffStyle: any;
const EmployeeDetailModal = (props: any) => {
  const [user, setUser] = useState<any>(null);
  const [showManager, setshowManager] = useState(true);
  React.useEffect(() => {
    if (props.user) {
      console.log(props);
      GetDataForModal();
    }
  }, [props.user.id]);

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
      DateofBirth: _dob === undefined ? "" : _dob,
      DateofJoin: _doj === undefined ? "" : _doj,
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
                      //href={user.chatLink}
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
                      //href={user._mailboxlink}
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
                      //href={user.phoneLink}
                      title={user.wphone}
                      target="_blank"
                    >
                      {/* <Icon icon={call16Filled} /> */}
                      <Icon iconName="Phone"></Icon>
                    </a>
                  </div>
                )}

                <div>
                  <a
                    className="empDetailIcon"
                    //href={user.videoLink}
                    title={"Video Call"}
                    target="_blank"
                  >
                    <Icon iconName="Video"></Icon>
                  </a>
                </div>

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
                      //href={user._mailboxlink}
                      title={user.email}
                      target="_blank"
                    >
                      {user.email}
                    </a>
                    {/* <Icon  className={styles.clpbrdsicon} onClick={() => EmailTextCopy } iconName="Copy"></Icon> */}
                  </span>
                </div>

                <div className="labelSpanStylesTemp">
                  <label>{"WorkPhone"}</label>

                  <span className="clpbrdspan">
                    <a
                    // href={user.phoneLink}
                    // title={user.wphone}
                    // target="_blank"
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
                  <label>{"Birthday"}</label>

                  <span>{user.DateofBirth}</span>
                </div>

                <div className="labelSpanStyles">
                  <label>{"Date of Joining"}</label>

                  <span>{user.DateofJoin}</span>
                </div>
              </div>
              <div>
                <div className="personallabelSpanStyles">
                  <label>{"About Me"}</label>
                  <span>{user.AboutMe}</span>
                </div>

                <div className="personallabelSpanStyles">
                  <label>{"Schools"}</label>
                  <span>{user.School ? user.School : ""}</span>
                </div>

                {/* {console.log(user.projects)} */}

                <div className="personallabelSpanStyles">
                  <label>{"Projects"}</label>
                  <span>{user.Projects ? user.Projects : ""}</span>
                </div>

                <div className="personallabelSpanStyles">
                  <label>{"Skills"}</label>
                  <span>{user.Skills ? user.Skills : ""}</span>
                </div>

                <div className="personallabelSpanStyles">
                  <label>{"Hobbies"}</label>
                  <span>{user.Hobbies ? user.Hobbies : ""}</span>
                </div>

                {/* {props.user.nonm365 || props.user.mobnonm365 ? (
                  <Stack className={styles.personallabelSpanStyles}>
                    <label>
                      {props.langcode.Pronouns
                        ? props.langcode.Pronouns
                        : "Pronouns"}
                    </label>
                    <span>{user.pronouns ? user.pronouns : ""}</span>
                  </Stack>
                ) : (
                  ""
                )} */}

                {/* {
              <Stack className={styles.personallabelSpanStyles}>
              <label>Industry experience</label>
              <span>{user.customproperty ? user.customproperty : ""}</span>
            </Stack>
            } */}

                {/* {!props.user.nm365customcolumn ||
                props.user.nm365customcolumn == "" ||
                props.user.nm365customcolumn == "-"
                  ? ""
                  : NM365Array.map((item, key) => {
                      return (
                        <Stack
                          className={styles.personallabelSpanStyles}
                          style={{ paddingTop: "5px" }}
                        >
                          {item.split(":")[3] == "true" ? (
                            ""
                          ) : (
                            <>
                              <label style={{ fontWeight: 500 }}>
                                {item.split(":")[0]}
                              </label>
                              <span key={key}>{item.split(":")[1]}</span>
                            </>
                          )}
                        </Stack>
                      );
                    })} */}
                {/* {!props.user.customcolumn ||
                props.user.customcolumn == "" ||
                props.user.customcolumn == "-"
                  ? ""
                  : props.user.customfld.split(";").map((item, key) => {
                      return (
                        <Stack className={styles.personallabelSpanStyles}>
                          {item.split(":")[4] != "undefined" ? (
                            item.split(":")[3] == "true" ? (
                              ""
                            ) : (item.split(":")[1] == " "?"":
                              <>
                                <label style={{ fontWeight: 500 }}>
                                  {item.split(":")[0]}
                                </label>
                                <span key={key}>{item.split(":")[1]?.replace(/#@#/g, ";")}</span>
                              </>
                            )
                          ) : (
                            ""
                          )}
                        </Stack>
                      );
                    })} */}
              </div>
            </div>
          </div>
        )}
      </NewDocumentWrapper>
    </>
  );
};
export default EmployeeDetailModal;
