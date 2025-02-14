import { Box, FormControl, FormLabel, Input, NativeSelect, TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { useMemo } from 'react';
import countryList from 'react-select-country-list';
import { Continent, LocationDto } from '../../api/openAPI';
import { isNullOrEmptyOrWhiteSpaces } from '../../hooks/useValidation.ts';

interface CustomCreateEditMetadataFormProps {
    location: LocationDto;
    setLocation: (location: (prevLocation: LocationDto) => LocationDto) => void;
    householdSize: number | undefined;
    setHouseholdSize: (size?: number) => void;
    validFrom: string;
    setValidFrom: (date: string) => void;
}

const CreateEditMetadataForm = ({
    location,
    setLocation,
    householdSize,
    setHouseholdSize,
    validFrom,
    setValidFrom,
}: CustomCreateEditMetadataFormProps) => {
    const countryOptions = useMemo(() => {
        return countryList().getData();
    }, []);

    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
            <FormControl>
                <FormLabel htmlFor="householdsize">Household Size</FormLabel>
                <Input
                    sx={{
                        '&.MuiInputBase-root': {
                            marginTop: '0px',
                        },
                    }}
                    type="number"
                    value={householdSize}
                    id="householdsize"
                    name="householdsize"
                    inputProps={{ min: 0 }}
                    onChange={(e) => {
                        if (e.target.value === '') {
                            setHouseholdSize();
                            return;
                        }

                        setHouseholdSize(Number(e.target.value));
                    }}
                />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="continent">Select a Continent</FormLabel>
                <NativeSelect
                    inputProps={{
                        name: 'continent',
                        id: 'uncontrolled-native',
                    }}
                    value={location.continent}
                    onChange={(e) => {
                        setLocation((prevLocation) => ({
                            ...prevLocation,
                            continent: e.target.value as unknown as Continent | undefined,
                        }));
                    }}
                    sx={{
                        '&.MuiInputBase-root': {
                            marginTop: '0px',
                        },
                    }}>
                    <option aria-label="None" value={undefined} />
                    <option value={Continent.Africa}>Africa</option>
                    <option value={Continent.Antarctica}>Antarctica</option>
                    <option value={Continent.Asia}>Asia</option>
                    <option value={Continent.Europe}>Europe</option>
                    <option value={Continent.NorthAmerica}>North America</option>
                    <option value={Continent.Oceania}>Oceania</option>
                    <option value={Continent.SouthAmerica}>South America</option>
                </NativeSelect>
            </FormControl>
            <FormControl disabled={isNullOrEmptyOrWhiteSpaces(location.continent?.toString())}>
                <FormLabel htmlFor="country">Select a Country</FormLabel>
                <NativeSelect
                    inputProps={{
                        name: 'country',
                        id: 'uncontrolled-native',
                    }}
                    value={location.country}
                    onChange={(e) => {
                        setLocation((prevLocation) => ({ ...prevLocation, country: e.target.value }));
                    }}
                    sx={{
                        '&.MuiInputBase-root': {
                            marginTop: '0px',
                        },
                    }}>
                    <option aria-label="None" value={undefined} />
                    {countryOptions.map((co) => (
                        <option key={co.value} value={co.label} label={co.label} />
                    ))}
                </NativeSelect>
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="state">State</FormLabel>
                <TextField
                    variant="standard"
                    id="state"
                    name="state"
                    value={location.state}
                    disabled={isNullOrEmptyOrWhiteSpaces(location.country)}
                    onChange={(e) => {
                        setLocation((prevLocation) => ({ ...prevLocation, state: e.target.value }));
                    }}
                />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="city">City</FormLabel>
                <TextField
                    variant="standard"
                    id="city"
                    name="city"
                    value={location.city}
                    disabled={isNullOrEmptyOrWhiteSpaces(location.state)}
                    onChange={(e) => {
                        setLocation((prevLocation) => ({ ...prevLocation, city: e.target.value }));
                    }}
                />
            </FormControl>
            <FormControl>
                <FormLabel htmlFor="streetname">Street Name</FormLabel>
                <TextField
                    variant="standard"
                    id="streetname"
                    name="streetname"
                    value={location.streetName}
                    disabled={isNullOrEmptyOrWhiteSpaces(location.city)}
                    onChange={(e) => {
                        setLocation((prevLocation) => ({ ...prevLocation, streetName: e.target.value }));
                    }}
                />
            </FormControl>
            <DatePicker
                name="validfrom"
                label="Valid From"
                value={dayjs(validFrom)}
                disablePast
                sx={{ marginTop: 1 }}
                onChange={(date) => {
                    setValidFrom(date?.toISOString() ?? validFrom);
                }}
            />
        </Box>
    );
};

export default CreateEditMetadataForm;
