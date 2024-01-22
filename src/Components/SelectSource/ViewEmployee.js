import * as React from "react";
import DocumentCardBasicExample from "./DocumentCardBasicExample";
import TileView from "./TileView";
import DetailsListBasicExample from "./DetailsListBasicExample";
import { style } from "./styles";
import styled from "styled-components";
const NewDocumentWrapper = styled.div`
  ${style}
`;
const ViewEmployee = (props) => {
    //console.log(props);
    return(

  
           
      <NewDocumentWrapper>
        <div>
      <div className="empDetailsView">
         
      
       
        {!props.isGrid ? (
          ""
        ) : (
        
           <DocumentCardBasicExample employees={props.employees} />
        )}
        {!props.isList ? (
          ""
        ) : (
          <DetailsListBasicExample employees={props.employees}  />
        )}
        {!props.isTile ? (
          ""
        ) : (
          <TileView employees={props.employees} />
        )}  
                           
      </div>
      </div>
      </NewDocumentWrapper>
  
  
    )
};

export default ViewEmployee;