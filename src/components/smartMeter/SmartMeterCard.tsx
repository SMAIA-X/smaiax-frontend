import { Button, Typography } from '@mui/material';
import SmartMeterIcon from '../../assets/SmartMeterIcon';
import { SmartMeterOverviewDto } from '../../api/openAPI';

interface SmartMeterCardProps {
    smartMeterOverview: SmartMeterOverviewDto;
    navigateToDetails: () => void;
    showAddMetadata?: boolean;
}

const SmartMeterCard = ({ smartMeterOverview, navigateToDetails, showAddMetadata }: SmartMeterCardProps) => {
    return (
        <div
            style={{
                display: 'grid',
                gridTemplateRows: '1fr 5fr 1fr',
                gridTemplateColumns: '1fr',
                justifyItems: 'center',
                alignItems: 'center',
            }}>
            <Typography variant="h5">{smartMeterOverview.name}</Typography>
            <Button onClick={navigateToDetails}>
                <SmartMeterIcon />
            </Button>
            {showAddMetadata && (
                <Button variant="outlined" color="secondary" onClick={navigateToDetails}>
                    Add Metadata
                </Button>
            )}
        </div>
    );
};

export default SmartMeterCard;
