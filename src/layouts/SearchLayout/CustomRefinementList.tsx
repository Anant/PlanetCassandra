import React from "react";
import { RefinementList } from "react-instantsearch-hooks-web";
import { Typography } from "@mui/material";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";

const MyRefinementList = ({ attribute, label }: any) => {
  return (
    <>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: "1.25rem",
          fontFamily: "Roboto Condensed, sans-serif",
        }}
      >
        {label}
      </Typography>
      <RefinementList
        translations={{
          //@ts-ignore
          showMoreButtonText(options) {
            const IconComponent = options.isShowingMore
              ? AiOutlineUp
              : AiOutlineDown;
            const buttonText = options.isShowingMore ? "See less" : "See more";

            return (
              <>
                <IconComponent style={{ marginRight: "5px" }} /> {buttonText}
              </>
            );
          },
        }}
        sortBy={["count"]}
        attribute={attribute}
        showMore={true}
        limit={7}
      />
    </>
  );
};
export default MyRefinementList;
