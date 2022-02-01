import { Card } from '@mui/material';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/system';

import { filtersSlice } from '@store/slices/filtersSlice';
import { RootState } from '@store/slices';


import Title from './SectionTitle';


const SegmentsFilterCard = styled(Card)({
    display: "flex",
    flexDirection: "column",
    padding: "20px"
})

export default function SegmentsFilter() {

    const dispatch = useDispatch();

    const filters = useSelector<RootState, number[]>(state => state.filters.segmentsCount);

    const handleChangeCheckbox = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = Number(e.target.value);
        const checked = Boolean(e.target.checked);

        if (checked) {
            dispatch(filtersSlice.actions.addSegmentsCount(value as number));
        } else {
            dispatch(filtersSlice.actions.removeSegmentsCount(value as number));
        }

    }

    return <SegmentsFilterCard>
        <FormGroup>
            <Title>Количество пересадок</Title>

            <FormControlLabel control={<Checkbox onChange={handleChangeCheckbox} value="0" checked={filters.length === 3} />} label="Все" />
            <FormControlLabel control={<Checkbox onChange={handleChangeCheckbox} value="1" checked={filters.includes(1)} />} label="1 пересадка" />
            <FormControlLabel control={<Checkbox onChange={handleChangeCheckbox} value="2" checked={filters.includes(2)} />} label="2 пересадки" />
            <FormControlLabel control={<Checkbox onChange={handleChangeCheckbox} value="3" checked={filters.includes(3)} />} label="3 пересадки" />
        </FormGroup>

    </SegmentsFilterCard>
};