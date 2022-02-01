import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Box from '@mui/material/Box';
import { styled } from '@mui/system';
import { isEqual } from 'lodash';

import HeaderPanel from './HeaderPanel';
import Ticket from './Ticket';

import { fetchTickets } from '../thunks/tickets';
import { TicketsSelector } from '../slices/ticketsSlice';
import { Ticket as TicketType } from "../interfaces";
import { RootState } from '../slices';
import { FiltersType } from '../slices/filtersSlice';


const Wrapper = styled(Box)({
    display: "flex",
    flexDirection: 'column',

    gap: "20px",
    flexWrap: "wrap"
});

export default function MainContent() {

    const dispatch = useDispatch();


    const filters = useSelector<RootState, FiltersType>(state => state.filters);

    const tickets = useSelector<RootState, TicketType[]>(TicketsSelector.selectAll, isEqual);

    useEffect(() => {

        dispatch(fetchTickets({ page: 0, filters }))

    }, [filters.segmentsCount.length, filters.company]);


    return <Wrapper>
        <HeaderPanel />
        {tickets.map((ticket) =>
            <Ticket id={ticket.id}
                price={ticket.price}
                segments={ticket.segments}
                companyId={ticket.companyId}
                key={`ticket-${ticket.id}`}
            />)
        }
    </Wrapper>
}