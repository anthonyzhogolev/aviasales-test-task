import React from 'react';
import Card from "@mui/material/Card";
import Box from '@mui/material/Box';
import { Ticket as TicketType } from "../interfaces";
import { styled } from '@mui/system';

import { useSelector } from 'react-redux';
import { RootState } from '../slices';
import { CompaniesSelector } from "../slices/companiesSlice";

import Segment from './Segment';

import { Company } from "../interfaces";

const TicketCard = styled(Card)({
    padding: "20px",
});

const TicketHeader = styled(Box)({
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '502px',
    gap: "20px",
    flexWrap: "wrap"
});


const Price = styled(Box)(({ theme }) => ({
    fontSize: '24px',
    fontWeight: '600',
    color: theme.palette.primary.main,
    m: 1,
}));


export default function Ticket({ id, price, segments, companyId }: TicketType) {



    const company = useSelector<RootState, Company>(state => CompaniesSelector.selectById(state, companyId) as Company);

    return (<TicketCard>
        <TicketHeader>
            <Price>{`${price} Р`}</Price>
            {company && <Box><img src={company.logo} /></Box>}
        </TicketHeader>
        {
            segments.map((segment: string) => <Segment id={segment} key={`segment-${segment}`} />)
        }

    </TicketCard>);
}


