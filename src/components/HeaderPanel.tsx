import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { styled } from '@mui/system';




const StyledToogleButton = styled(ToggleButton)(({ theme }) => ({
    padding: "10px 20px",
    '&.selected': {
        backgroundColor: theme.palette.primary.main
    },
    '&:hover': {
        backgroundColor: theme.palette.secondary.main
    }
}))

export default function HeaderPanel() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };


    return (

        <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
        >
            <StyledToogleButton value="price">Самый дешёвый</StyledToogleButton>
            <StyledToogleButton value="time">Самый быстрый</StyledToogleButton>
            <StyledToogleButton value="both">Оптимальный</StyledToogleButton>
        </ToggleButtonGroup>

    );
}
