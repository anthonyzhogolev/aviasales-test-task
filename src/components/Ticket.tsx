import React from 'react';
import { useSelector } from 'react-redux';
import Card from "@mui/material/Card";
import Box from '@mui/material/Box';
import { styled } from '@mui/system';

import { Ticket as TicketType } from "@app/interfaces";



import { RootState } from '@store/slices';
import { CompaniesSelector } from "@store/slices/companiesSlice";
import { Company } from "@app/interfaces";

import Segment from './Segment';

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


