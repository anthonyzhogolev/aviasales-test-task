import React from 'react';

import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import { SegmentsSelector } from "../slices/segmentsSlice";
import { styled } from '@mui/system';
import { Segment as SegmentType } from "../interfaces";
import { RootState } from '../slices';
import { formatStopsCountLabel, formatFlightTime, formatDuration, formatStops } from '../utils';

const Wrapper = styled(Box)({
    display: 'flex',
    gap: "20px",
    justifyContent: "stretch",
    marginTop: "10px"
});

const Col = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: "flex-start",
    width: "140px"
});

const ColTitle = styled(Box)(({ theme }) => ({
    color: theme.palette.text.secondary,
    fontSize: "12px",
    letterSpacing: "0.5px",
    textTransform: "uppercase"
}));

const ColValue = styled(Box)(({ theme }) => ({
    color: theme.palette.text.primary,
    fontSize: "14px"
}));

export default function Segment({ id }: { id: string }) {

    const segment = useSelector<RootState, SegmentType>(state => SegmentsSelector.selectById(state, id) as SegmentType);

    if (!segment) {
        return null;
    }

    return <Wrapper>
        <Col>
            <ColTitle>{segment.origin} - {segment.destination}</ColTitle>
            <ColValue>{formatFlightTime(segment.dateStart)} – {formatFlightTime(segment.dateStart)}</ColValue>
        </Col>

        <Col>
            <ColTitle>В пути</ColTitle>
            <ColValue>{formatDuration(segment.duration)}</ColValue>
        </Col>

        <Col>
            <ColTitle>{formatStopsCountLabel(segment.stops.length)}</ColTitle>
            <ColValue>{formatStops(segment.stops)}</ColValue>
        </Col>
    </Wrapper >


}