import { SmartMeterDto } from '../../api/openAPI';
import { Box, Button, Drawer, InputLabel, Select, Typography, useMediaQuery } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import MenuItem from '@mui/material/MenuItem';
import Grid from '@mui/material/Grid2';
import { useState } from 'react';
import { MediaQueryMobileMaxWidthStr } from '../../constants/constants.ts';
import CreateEditMetadataDialog from '../dialogs/CreateEditMetadataDialog.tsx';
import { useDialogs } from '@toolpad/core';
import { formatToLocalDateTime } from '../../utils/helper.ts';

interface MetadataDrawerProps {
    smartMeter: SmartMeterDto;
    isDrawerOpen: boolean;
    setIsDrawerOpen: (isDrawerOpen: boolean) => void;
    reloadSmartMeter: () => void;
}

const MetadataDrawer = ({ smartMeter, isDrawerOpen, setIsDrawerOpen, reloadSmartMeter }: MetadataDrawerProps) => {
    const [selectedValidFrom, setSelectedValidFrom] = useState<string | undefined>(undefined);
    const selectedMetadata = smartMeter.metadata.find((meta) => meta.validFrom === selectedValidFrom);
    const dialogs = useDialogs();

    const openCreateEditMetadataDialog = async () => {
        await dialogs.open(CreateEditMetadataDialog, {
            smartMeterId: smartMeter.id,
            metadata: selectedMetadata,
            reloadSmartMeter: () => {
                reloadSmartMeter();
            },
        });
    };

    const isSmallScreen = useMediaQuery(MediaQueryMobileMaxWidthStr);
    const marginTop = isSmallScreen ? 7 : 8;

    const validFromLabel = 'Valid From';

    return (
        <div>
            <Drawer
                anchor="right"
                open={isDrawerOpen}
                onClose={() => {
                    setIsDrawerOpen(false);
                }}
                sx={{
                    width: 400,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': { width: 400, padding: 2, boxSizing: 'border-box', marginTop: marginTop },
                }}>
                <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
                    <Typography variant="h6">Metadata</Typography>
                </Box>

                <FormControl fullWidth>
                    <InputLabel id="validFrom-label">{validFromLabel}</InputLabel>
                    <Select
                        labelId="validFrom-label"
                        value={selectedValidFrom}
                        onChange={(e) => {
                            setSelectedValidFrom(e.target.value);
                        }}
                        label={validFromLabel}>
                        {smartMeter.metadata.map((metadata) => (
                            <MenuItem key={metadata.id} value={metadata.validFrom}>
                                {formatToLocalDateTime(metadata.validFrom)}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>

                {selectedMetadata ? (
                    <Grid container spacing={2} direction="column" mt={2}>
                        <Grid>
                            <Typography variant="subtitle2" color="textSecondary">
                                Street
                            </Typography>
                            <Typography variant="body1">{selectedMetadata.location?.streetName ?? 'N/A'}</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="subtitle2" color="textSecondary">
                                City
                            </Typography>
                            <Typography variant="body1">{selectedMetadata.location?.city ?? 'N/A'}</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="subtitle2" color="textSecondary">
                                State
                            </Typography>
                            <Typography variant="body1">{selectedMetadata.location?.state ?? 'N/A'}</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="subtitle2" color="textSecondary">
                                Country
                            </Typography>
                            <Typography variant="body1">{selectedMetadata.location?.country ?? 'N/A'}</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="subtitle2" color="textSecondary">
                                Continent
                            </Typography>
                            <Typography variant="body1">{selectedMetadata.location?.continent ?? 'N/A'}</Typography>
                        </Grid>
                        <Grid>
                            <Typography variant="subtitle2" color="textSecondary">
                                Household Size
                            </Typography>
                            <Typography variant="body1">{selectedMetadata.householdSize ?? 'N/A'}</Typography>
                        </Grid>

                        <Button
                            variant="contained"
                            size="large"
                            onClick={() => {
                                void openCreateEditMetadataDialog();
                            }}>
                            Edit
                        </Button>
                    </Grid>
                ) : (
                    <Typography variant="body1" color="textSecondary" mt={2}>
                        Select a validFrom to view metadata details.
                    </Typography>
                )}
            </Drawer>
        </div>
    );
};

export default MetadataDrawer;
