import React from 'react';

import Box from '@mui/material/Box';
import SegmentsFilter from "./SegmentsFilter";
import CompaniesFilter from "./CompaniesFilter";
import { styled } from '@mui/system';

const Wrapper = styled(Box)({
    display: "flex",
    flexDirection: 'column',
    width: '232px',
    gap: "20px",
    flexWrap: "wrap"
})

export default function Sidebar() {
    return (<Wrapper>
        <SegmentsFilter />
        <CompaniesFilter />
    </Wrapper>
    );
}