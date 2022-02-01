import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Card from '@mui/material/Card';
import { styled } from '@mui/system';


import { RootState } from '@store/slices';
import { CompaniesSelector } from "@store/slices/companiesSlice";
import { filtersSlice } from '@store/slices/filtersSlice';
import { Company } from "@app/interfaces";

import Title from "./SectionTitle";

const SegmentsFilterCard = styled(Card)({
    display: "flex",
    flexDirection: "column",
    padding: "20px"
})

export default function CompaniesFilter() {

    const companies = useSelector<RootState, Company[]>(CompaniesSelector.selectAll);
    const currentFilter = useSelector<RootState, string>(state => state.filters.company);

    const dispatch = useDispatch();

    const handleChangeCompany = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;

        dispatch(filtersSlice.actions.setCompany(value));

    }

    return (
        <SegmentsFilterCard>
            <Title>Компания</Title>
            <FormControl>
                <FormLabel id="demo-radio-buttons-group-label"></FormLabel>
                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue=""
                    name="radio-buttons-group"
                    onChange={handleChangeCompany}
                    value={currentFilter}
                >
                    <FormControlLabel value="" control={<Radio />} label="Все" />

                    {companies.map((company) => <FormControlLabel value={company.id} control={<Radio />} label={company.name} />)}
                </RadioGroup>
            </FormControl>
        </SegmentsFilterCard>
    );
}