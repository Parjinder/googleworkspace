/* global gapi */
import React, { useState } from "react";
import { Row, Col, Spin } from "antd";
import styled from "styled-components";
import CommandBarComponent from "./CommandBarComponent";
import { gapi } from "gapi-script";
import GoogleDriveImage from "../assets/images/google.png";
import DefaultImage from "../assets/images/DefaultImg1.png";
import ViewEmployee from "./ViewEmployee";
import { style } from "./styles";

import {
  MessageBar,
  MessageBarType,
  SearchBox,
  Stack,
  Icon,
  ISearchBoxStyles,
  Spinner,
  SpinnerSize,
  PersonaInitialsColor,
  Modal,
  Label,
  DefaultButton,
  IDropdownOption,
  Dropdown,
  IDropdownStyles,
  Callout,
  IIconStyles,
  IDatePickerStyles,
  getYearEnd,
} from "office-ui-fabric-react";
const NewDocumentWrapper = styled.div`
  ${style}
`;
const messageBarWaringStyles = {
  root: {
    backgroundColor: "rgb(255, 244, 206)",
  },
};
const messageBarInfoStyles = {
  root: {
    ".ms-MessageBar-icon": {
      color: "#333",
    },
    backgroundColor: "rgb(243, 242, 241)",
  },
};
const searchBoxStyles = {
  root: {
    // width: 200,
    border: "0px",
    // marginLeft: "10px",
    float: "left",
    borderBottom: "1px solid #ddd",
    selectors: {
      "&:after": {
        border: "none",
      },
      ".ms-SearchBox-field::placeholder": {
        color: "#aaa",
      },
    },
  },
};
var CLIENT_ID =
  "236717214097-jmdc31nh8d2h5mim0it1gbdvrja94cg2.apps.googleusercontent.com";
var API_KEY = "AIzaSyARbVgWR0mkXN7Ntozoumstt2SNzLcCdqE";
const DISCOVERY_DOCS = [
  "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  "https://admin.googleapis.com/$discovery/rest?version=directory_v1",
];
const scopes =
  "https://www.googleapis.com/auth/admin.directory.group.readonly https://www.googleapis.com/auth/admin.directory.group.member.readonly https://www.googleapis.com/auth/calendar.readonly https://www.googleapis.com/auth/admin.directory.user.readonly";
//var scopes = "profile";
var allletter="ALL";
const SelectSource = (props) => {
 //console.log(props);
  const [signedInUser, setSignedInUser] = useState(false);
  const [isLoadingGoogleDriveApi, setIsLoadingGoogleDriveApi] = useState(false);
  const [isGrid, setisGrid] = useState(true);
  const [isTile, setisTile] = useState(false);
  const [isList, setisList] = useState(false);
  const [listView, setlistView] = useState(false);
  const [gridView, setgridView] = useState(false);
  const [tileView, settileView] = useState(false);
  const [isShowList, setisShowList] = useState("List");
  const [isShowTile, setisShowTile] = useState("Tile");
  const [isShowGrid, setisShowGrid] = useState("Grid");
  //const [allletter, setallletter] = useState("ALL");
  const [UserArray, setUserArray] = useState([]);
  const [showProgress, setshowProgress] = useState(false);
  const [loader, setloader] = useState(false);
  async function getAllUsersInOrg() {
    let page = "";
    let pageToken = "";
    let staffList = [];
    //alert(allletter);
    do {
      page = await gapi.client.directory.users.list({
        customer: "my_customer",
        projection: "full",
        orderBy: "givenName",
        //query:'givenName:"'+allletter+'"*',
        query:
          allletter == "ALL" ? "givenName:*" : 'givenName:"' + allletter + '"*',
        //sortOrder: "descending",
        maxResults: 100,
        pageToken: pageToken,
      });

      staffList = staffList.concat(page.result.users);

      pageToken = page.nextPageToken;
    } while (pageToken);

    return staffList;
  }
  const filterByLetter = (Letter) => {
    //allletter===Letter;
    
    //setallletter(Letter);
    allletter=Letter;
    listFiles();
  };
  async function getAllUsersInOrg1(value, mode) {
    let page = "";
    let pageToken = "";
    let staffList = [];

    do {
      page = await gapi.client.directory.users.list({
        customer: "my_customer",
        projection: "full",
        orderBy: "givenName",
        // query:'givenName:"'+value+'"* familyName:"'+value+'"*',
        query:value===undefined?allletter == "ALL" ? "givenName:*" : 'givenName:"' + allletter + '"*':
          mode === "name"
            ? 'givenName:"' + value + '"*'
            : mode === "title"
            ? "orgTitle:" + value + ""
            : mode === "department"
            ? "orgDepartment:" + value + ""
            : "",

        //sortOrder: "descending",
        maxResults: 100,
        pageToken: pageToken,
      });

      staffList = staffList.concat(page.result.users);

      pageToken = page.nextPageToken;
    } while (pageToken);

    return staffList;
  }
  function getUserOrgWPItem(user) {
    if (user.hasOwnProperty("phones")) {
      const primaryOrg = user.phones.filter((x) => x.type === "work")[0].value;

      return primaryOrg;
    } else {
      return "";
    }
  }
  function getUserOrgMBItem(user) {
    if (user.hasOwnProperty("phones")) {
      const primaryOrg = user.phones.filter((x) => x.type === "mobile")[0]
        .value;

      return primaryOrg;
    } else {
      return "";
    }
  }
  function getUserOrgMGItem(user) {
    if (user.hasOwnProperty("relations")) {
      const primaryOrg = user.relations.filter((x) => x.type === "manager")[0]
        .value;

      return primaryOrg;
    } else {
      return "";
    }
  }
  function getUserOrgEIDItem(user) {
    if (user.hasOwnProperty("externalIds")) {
      const primaryOrg = user.externalIds.filter(
        (x) => x.type === "organization"
      )[0].value;

      return primaryOrg;
    } else {
      return "";
    }
  }
  function getUserOrgLOCItem(user) {
    if (user.hasOwnProperty("locations")) {
      var bid = user.locations[0].hasOwnProperty("buildingId")
        ? user.locations[0].buildingId
        : "";
      var floorname = user.locations[0].hasOwnProperty("floorName")
        ? user.locations[0].floorName
        : "";
      var floorsection = user.locations[0].hasOwnProperty("floorSection")
        ? user.locations[0].floorSection
        : "";
      return bid + " " + floorname + " " + floorsection;
    } else {
      return "";
    }
  }

  const updateSigninStatus = (isSignedIn) => {
    if (isSignedIn) {
      // Set the signed in user
      //setSignedInUser(gapi.auth2.getAuthInstance().currentUser.je.Qt);
      setSignedInUser(true);
      setIsLoadingGoogleDriveApi(false);
      // list files if user is authenticated
      setisShowGrid("Grid");
      setisShowList("List");
      setisShowTile("Tile");
     

      listFiles();
    } else {
      // prompt user to sign in
      handleAuthClick();
    }
  };
  const listFiles = () => {
    setloader(true);
    setshowProgress(true);
    gapi.client.load("admin", "directory_v1", () => {});
    getAllUsersInOrg().then((data) => {
      console.log(data);
      if (typeof data[0] === "undefined") {
        setUserArray([]);
      } else {
        let staffMember = data.map((user) => {
          var arr123 = {};
          if (user.hasOwnProperty("customSchemas")) {
            const cfield = user.customSchemas;

            Object.keys(cfield).map((key) => {
              var exchangefld = cfield[key];

              for (var i in exchangefld) {
                arr123[i] =
                  exchangefld[i] instanceof Array
                    ? exchangefld[i].reduce((a, b) => {
                        return (
                          (a.value?.toString() || a?.toString()) +
                          " !! " +
                          b.value
                        );
                      })
                    : exchangefld[i];
              }

              return [key];
            });

            //console.log(arr123);
          }
          if (user.name.givenName != null) {
            var names = user.name.givenName.split(" "),
              initials = names[0].substring(0, 1).toUpperCase();
            if (names.length > 1) {
              initials += names[names.length - 1].substring(0, 1).toUpperCase();
            }
          }
          return {
            ...arr123,
            firstName: user.name.givenName,
            lastName: user.name.familyName,
            name: user.name.fullName,
            email: user.primaryEmail,
            id:user.id,
            job: user.hasOwnProperty("organizations")
              ? user.organizations[0].hasOwnProperty("title")
                ? user.organizations[0].title
                : ""
              : "",
            initials: initials,
            department: user.hasOwnProperty("organizations")
              ? user.organizations[0].hasOwnProperty("department")
                ? user.organizations[0].department
                : ""
              : "",
            // employeetype: user.hasOwnProperty("organizations")
            //   ? user.organizations[0].hasOwnProperty("description")
            //     ? user.organizations[0].description
            //     : ""
            //   : "",
            workphone: getUserOrgWPItem(user),
            mobile: getUserOrgMBItem(user),
            manager: getUserOrgMGItem(user),
            employeeid: getUserOrgEIDItem(user),
            location: getUserOrgLOCItem(user),
            image: user.hasOwnProperty("thumbnailPhotoUrl")
              ? user.thumbnailPhotoUrl
              : DefaultImage,
          };
        });
        //console.log(staffMember);
        setUserArray(staffMember);
      }
      setgridView(true);
      setloader(false);
      setshowProgress(false);
    });
    // const res1 = await gapi.client.directory.groups.list({
    //   customer: "my_customer",
    // });
    // console.log(res1.result.groups);

    // const res1x = await gapi.client.directory.users.list({
    //   customer: "my_customer",
    //   //viewType:'domain_public',
    //   //query: "orgUnitPath='/'",
    //   // query:'orgTitle=Developer',
    //   //query:'MyCustomField.CF2=parjinder',
    //   //query: "MyCustomField.CF4>1987-08-05",

    //   projection: "full",
    //   orderBy: "givenName",
    //   sortOrder: "descending",
    // });

    // console.log(res1x);
    // const connections1 = res1x.result.users;
    // if (!connections1 || connections1.length === 0) {
    //   console.log("No connections found.");
    //   return;
    // }
    // connections1.forEach((person) => {
    //   console.log(person);
    // });
  };
  const handleAuthClick = (event) => {
    gapi.auth2.getAuthInstance().signIn();
  };
  const initClient = () => {
    // gapi.client.load("client:auth2", () => {
    //console.log("loaded client");
    setIsLoadingGoogleDriveApi(true);

    gapi.client
      .init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: scopes,
      })
      .then(
        function () {
          // Listen for sign-in state changes.
          gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
          // gapi.auth2
          //   .getAuthInstance()
          //   .signIn()
          //   .then(async () => {
          //     gapi.client.load("admin", "directory_v1", () => {
          //       // now we can use:
          //       // gapi.client.admin
          //       // gapi.client.directory
          //     });
          //     const res1 = await gapi.client.directory.groups.list({
          //       customer: "my_customer",
          //     });
          //     console.log(res1.result.groups);

          //     const res1x = await gapi.client.directory.users.list({
          //       customer: "my_customer",
          //       //viewType:'domain_public',
          //       //query: "orgUnitPath='/'",
          //       // query:'orgTitle=Developer',
          //       //query:'MyCustomField.CF2=parjinder',
          //       //query: "MyCustomField.CF4>1987-08-05",

          //       projection: "full",
          //       orderBy: "givenName",
          //       sortOrder: "descending",
          //     });
          //     // console.log(res1x);
          //     const connections1 = res1x.result.users;
          //     if (!connections1 || connections1.length === 0) {
          //       console.log("No connections found.");
          //       return;
          //     }
          //     connections1.forEach((person) => {
          //       console.log(person);
          //     });
          //   });
        },
        function (error) {
          console.log(error);
        }
      );
  };
  const showGrid = (name) => {
    if ((name = "Grid")) {
      setisShowGrid(name);
      setisGrid(true);
      setisList(false);
      setisTile(false);
    } else {
      setisShowTile("");
      setisShowList("");
    }
  };
  const showList = (name) => {
    if ((name = "List")) {
      setisShowList(name);
      setisGrid(false);
      setisList(true);
      setisTile(false);
    } else {
      setisShowGrid("");
      setisShowTile("");
    }
  };
  const showTile = (name) => {
    if ((name = "Tile")) {
      setisShowTile(name);
      setisGrid(false);
      setisList(false);
      setisTile(true);
    } else {
      setisShowGrid("");
      setisShowList("");
    }
  };
  const clearFilters = () => {
    //setallletter("ALL");
    listFiles();
  };
  const optimization = (value, mode) => {
    gapi.client.load("admin", "directory_v1", () => {});
    getAllUsersInOrg1(value, mode).then((data) => {
      console.log(data);
      if (typeof data[0] === "undefined") {
        setUserArray([]);
      } else {
        let staffMember = data.map((user) => {
          var arr123 = {};
          if (user.hasOwnProperty("customSchemas")) {
            const cfield = user.customSchemas;

            Object.keys(cfield).map((key) => {
              var exchangefld = cfield[key];

              for (var i in exchangefld) {
                arr123[i] =
                  exchangefld[i] instanceof Array
                    ? exchangefld[i].reduce((a, b) => {
                        return (
                          (a.value?.toString() || a?.toString()) +
                          " !! " +
                          b.value
                        );
                      })
                    : exchangefld[i];
              }

              return [key];
            });

            //console.log(arr123);
          }
          if (user.name.givenName != null) {
            var names = user.name.givenName.split(" "),
              initials = names[0].substring(0, 1).toUpperCase();
            if (names.length > 1) {
              initials += names[names.length - 1].substring(0, 1).toUpperCase();
            }
          }
          return {
            ...arr123,
            firstName: user.name.givenName,
            lastName: user.name.familyName,
            name: user.name.fullName,
            email: user.primaryEmail,
            id:user.id,
            job: user.hasOwnProperty("organizations")
              ? user.organizations[0].hasOwnProperty("title")
                ? user.organizations[0].title
                : ""
              : "",
            initials: initials,
            department: user.hasOwnProperty("organizations")
              ? user.organizations[0].hasOwnProperty("department")
                ? user.organizations[0].department
                : ""
              : "",
            // employeetype: user.hasOwnProperty("organizations")
            //   ? user.organizations[0].hasOwnProperty("description")
            //     ? user.organizations[0].description
            //     : ""
            //   : "",
            workphone: getUserOrgWPItem(user),
            mobile: getUserOrgMBItem(user),
            manager: getUserOrgMGItem(user),
            employeeid: getUserOrgEIDItem(user),
            location: getUserOrgLOCItem(user),
            image: user.hasOwnProperty("thumbnailPhotoUrl")
              ? user.thumbnailPhotoUrl
              : DefaultImage,
          };
        });
        console.log(staffMember);
        setUserArray(staffMember);
      }
      setgridView(true);
    });
  };
  const handleClientLoad = () => {
    gapi.load("client:auth2", initClient);
  };

  return (
    <NewDocumentWrapper>
      {signedInUser ? (
        <>
          <div className="edp" id="mainDiv">
            {" "}
            <div className="container">
              <div className="row" style={{ position: "relative" }}>
                <div className="filterDiv">
                  <CommandBarComponent
                    // OrgChartSyncIcon={this.OrgChartSyncIcon}
                    filterByLetter={filterByLetter}
                  />
                </div>
                <div className="iconsFilterDiv">
                  <div className="searchFiltersDiv">
                    <div id="namesearchid">
                      <SearchBox
                        className="searchBoxStyles"
                        styles={searchBoxStyles}
                        placeholder={"Name Search"}
                        onEscape={clearFilters}
                        onClear={clearFilters}
                        onChange={(newValue) =>
                          //this.filterForName(newValue)
                          optimization(newValue?.target?.value, "name")
                        }
                      />
                      <a id="filter2" style={{ display: "none" }}>
                        <span
                          className="filterIconsSearchStyle"
                        >
                          <Icon
                            title={"Name Search"}
                            // onClick={() =>
                            //   searchByName()
                            // }
                            iconName="Search"
                          ></Icon>
                        </span>
                      </a>
                    </div>
                    <div id="titleid">
                      <SearchBox
                        className="searchBoxStyles"
                        styles={searchBoxStyles}
                        placeholder={"Titles"}
                        onEscape={clearFilters}
                        onClear={clearFilters}
                        onChange={(newValue) =>
                          // this.filterForTitleSearch(newValue)
                          // this.optimization(newValue)
                          optimization(newValue?.target?.value, "title")
                        }
                      />
                      <a id="filterjt" style={{ display: "none" }}>
                        <span
                          className="filterIconsSearchStyle"
                        >
                          <Icon
                            title={"Titles"}
                            // onClick={() =>
                            //   this.searchBytitletext()
                            // }
                            iconName="Search"
                          ></Icon>
                        </span>
                      </a>
                    </div>
                    <div id="departmentid">
                      <SearchBox
                        className="searchBoxStyles"
                        styles={searchBoxStyles}
                        placeholder={"Departments"}
                        onEscape={clearFilters}
                        onClear={clearFilters}
                        onChange={(newValue) =>
                          // this.filterForDeptSearch(newValue)
                          optimization(newValue?.target?.value, "department")
                        }
                      />
                      <a id="filterdept" style={{ display: "none" }}>
                        <span
                          className="filterIconsSearchStyle"
                        >
                          <Icon
                            title={"Departments"}
                            // onClick={() =>
                            //   this.searchByDepttext()
                            // }
                            iconName="Search"
                          ></Icon>
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="iconsDiv">
                  <span
                    className={
                      !isGrid ? "viewIconsStyle" : "viewIconsStyleActive"
                    }
                  >
                    <Icon
                      title={"Grid View"}
                      onClick={() => showGrid(isShowGrid)}
                      iconName="ContactCard"
                    ></Icon>
                  </span>
                  <span
                    className={
                      !isList ? "viewIconsStyle" : "viewIconsStyleActive"
                    }
                  >
                    <Icon
                      title={"List View"}
                      onClick={() => showList(isShowList)}
                      iconName="BulletedList"
                    ></Icon>
                  </span>
                  <span
                    className={
                      !isTile ? "viewIconsStyleT" : "viewIconsStyleActiveT"
                    }
                  >
                    <Icon
                      title={"Tile View"}
                      onClick={() => showTile(isShowTile)}
                      iconName="Waffle"
                    ></Icon>
                  </span>
                </div>
                <div className="mainDiv">
                  {loader ? (
                    <Spinner />
                  ) : showProgress ? (
                    <Spinner
                      size={SpinnerSize.large}
                      className="spinnerLoadStyle"
                      label={"Loading..."}
                    />
                  ) : UserArray.length == 0 ? (
                    <MessageBar
                      messageBarType={MessageBarType.info}
                      isMultiline={false}
                      styles={messageBarInfoStyles}
                      dismissButtonAriaLabel={"Close"}
                      style={{ justifyContent: "center" }}
                    >
                      {"No Records Found"}
                    </MessageBar>
                  ) : (
                    <div id="ViewDiv" style={{ overflow: "hidden" }}>
                      <ViewEmployee
                        //userlist={userlist}
                        employees={UserArray}
                        isTile={isTile}
                        isGrid={isGrid}
                        isList={isList}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        <Row gutter={16} className="custom-row">
          <Col span={8}>
            <Spin spinning={isLoadingGoogleDriveApi} style={{ width: "100%" }}>
              <div
                onClick={() => handleClientLoad()}
                className="source-container"
              >
                <div className="icon-container">
                  <div className="icon icon-success">
                    <img height="80" width="80" src={GoogleDriveImage} alt="" />
                  </div>
                </div>
                <div className="content-container">
                  <p className="title">Sign in with Google</p>
                </div>
              </div>
            </Spin>
          </Col>
        </Row>
      )}
    </NewDocumentWrapper>
  );
};

export default SelectSource;
