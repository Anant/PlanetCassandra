import React from "react";
import { Grid, Typography, useTheme } from "@mui/material";
import ThumbnailImage from "../Cards/Thumbnail/Thumbnail";
import { IGatsbyImageData } from "gatsby-plugin-image";

interface UseCaseTitleSectionProps {
    title: string;
    thumbnail: IGatsbyImageData | null;
    Case_Stack?: {
        data: {
            Name: string;
        }[];
    };
    Case_Function?: {
        data: {
            Function_Name: string;
        }[];
    };
    Case_Industry?: {
        data: {
            Industry_Name: string;
        }[];
    };
}

const UseCaseTitleSection: React.FC<UseCaseTitleSectionProps> = ({
    title,
    thumbnail,
    Case_Stack,
    Case_Function,
    Case_Industry,
}) => {
    const theme = useTheme();

    // Destructure and map through the arrays to get the names
    const caseStackNames = Case_Stack?.map((item: { data: { Name: string; }; }) => item.data.Name) || [];
    const caseFunctionNames = Case_Function?.map((item: { data: { Function_Name: string; }; }) => item.data.Function_Name) || [];
    const caseIndustryNames = Case_Industry?.map((item: { data: { Industry_Name: string; }; }) => item.data.Industry_Name) || [];

    return (
        <Grid
            sx={{ borderBottom: "1px solid black", marginBottom: 5 }}
            container
            spacing={2}
        >
            <Grid item xs={12} sm={6}>
                <ThumbnailImage thumbnail={thumbnail} />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Typography>Stack: {caseStackNames.join(', ')}</Typography>
                <Typography>Function: {caseFunctionNames.join(', ')}</Typography>
                <Typography>Industry: {caseIndustryNames.join(', ')}</Typography>
            </Grid>
        </Grid>
    );
};

export default UseCaseTitleSection;


