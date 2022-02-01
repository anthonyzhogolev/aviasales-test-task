import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Card from '@mui/material/Card';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../slices';
import { CompaniesSelector } from "../slices/companiesSlice";
import { filtersSlice } from '../slices/filtersSlice';

import { Company } from "../interfaces";

export default function CompaniesFilter() {

    const companies = useSelector<RootState, Company[]>(CompaniesSelector.selectAll);
    const currentFilter = useSelector<RootState, string>(state => state.filters.company);

    const dispatch = useDispatch();

    const handleChangeCompany = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const value = e.target.value;

        dispatch(filtersSlice.actions.setCompany(value));

    }

    return (
        <Card>
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
        </Card>
    );
}