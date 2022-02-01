import React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';



export default function HeaderPanel() {
    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (
        event: React.MouseEvent<HTMLElement>,
        newAlignment: string,
    ) => {
        setAlignment(newAlignment);
    };


    return (
        <Card>
            <ToggleButtonGroup
                color="primary"
                value={alignment}
                exclusive
                onChange={handleChange}
            >
                <ToggleButton value="price">Самый дешёвый</ToggleButton>
                <ToggleButton value="time">Самый быстрый</ToggleButton>
                <ToggleButton value="both">Оптимальный</ToggleButton>
            </ToggleButtonGroup>
        </Card>
    );
}
