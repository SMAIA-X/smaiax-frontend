﻿import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import {DialogProps} from "@toolpad/core";
import TextField from "@mui/material/TextField";
import {InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Visibility, VisibilityOff, Download} from "@mui/icons-material";
import React, {useState} from "react";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
import {EncryptionService} from "../../services/EncryptionService.ts";

export default function MyCustomDialog({open, onClose}: DialogProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [ssid, setSsid] = useState('');
    const [password, setPassword] = useState('');

    const handleTogglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    const handleDownload = async () => {
        const publicKey = getPublicKey();
        const encryptedMqttCredentials = getEncryptedMqttCredentials();
        const encryptionService = await EncryptionService.Create(publicKey);

        const encryptedSsid = await encryptionService.encryptData(ssid);
        const encryptedPassword = await encryptionService.encryptData(password);

        const data = {
            wifiSSID: encryptedSsid,
            wifiPassword: encryptedPassword,
            mqttCredentials: encryptedMqttCredentials
        };

        const jsonString = JSON.stringify(data, null, 2);
        const blob = new Blob([jsonString], {type: 'application/json'});

        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'device-config.json';

        link.click();
        URL.revokeObjectURL(link.href);
    };


    function onNetworkNameChange(e: React.ChangeEvent<HTMLInputElement>) {
        setSsid(e.target.value);
    }

    function onPasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        setPassword(e.target.value);
    }

    function getPublicKey() {
        return 'MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAstwXx785iU4+06dvLZ1cD/NrdNWB9mn3JJDj3MN9aWV08cLpRuFvkY+nsGNg8VSixyqdEobRmckTgQAWnWHKWmXavOxKHq9clU9WlUKLlt/uxX8GeVGz0y9vZ/mN4h815qLUM7a9qwwmp4PYsr/opY8TTiA7RqlK8ECzLdGaFh3CwgAdgxP/fAx4SSfq2kifNhi/x92psla6fahvzWGNpcMi+e49qVOIDYeSKUrZjxKtMZTH7w3BFnOReXXzTnHptniyem0NmYtpg/YtEPBs9fXonGHtAAFLkkkDlYQM4jVp4LlmRTWPcnJH6fToLpMe99kFkpEIoiCjE+Bin2QGUQIDAQAB'
    }

    // function getPrivateKey() {
    //     return '-----BEGIN PRIVATE KEY-----\n' +
    //     'MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCy3BfHvzmJTj7Tp28tnVwP82t0\n' +
    //     '1YH2afckkOPcw31pZXTxwulG4W+Rj6ewY2DxVKLHKp0ShtGZyROBABadYcpaZdq87Eoer1yVT1aV\n' +
    //     'QouW3+7FfwZ5UbPTL29n+Y3iHzXmotQztr2rDCang9iyv+iljxNOIDtGqUrwQLMt0ZoWHcLCAB2D\n' +
    //     'E/98DHhJJ+raSJ82GL/H3amyVrp9qG/NYY2lwyL57j2pU4gNh5IpStmPEq0xlMfvDcEWc5F5dfNO\n' +
    //     'cem2eLJ6bQ2Zi2mD9i0Q8Gz19eicYe0AAUuSSQOVhAziNWnguWZFNY9yckfp9Ogukx732QWSkQii\n' +
    //     'IKMT4GKfZAZRAgMBAAECggEAW6tMENckMQhGUQouhC1zgsVanK3VBys2PKp57qrO+xbBwisIjoh6\n' +
    //     'OxtqcY/tnqKnLvbbPCSXBn+1HFekP5NgN8aePlfIgUOVav0XvjY1/uTUpqo88i76wFE+gwa3Pl6K\n' +
    //     'rKNlqP+O5Dy9DvwXMz4Cid/zoAYK+2NHAi3W57PWimBo2HYcwnZvmmT+zmghjBDkP8/a6FwDFTv5\n' +
    //     'WpoSMF+Q070fJckYDSFUMIVxeTNNthkiH+7zwei+YsgvU7mo4ziqZoM2dG2teFCm5tVg7ENKaNFa\n' +
    //     'UNSqArVdk54mpmbASX/tgbX9u2+rHba1iXtkULqgYqzRvRNnUlhBSpdtv13jRQKBgQDL26KpuB3W\n' +
    //     'v0ehAJAlauLtrksgzSBlWOUOnuMpaFJ8WKU5KmW1fIbi8Z49LbYscap7vHfn7xYwc+9/tS2WfmBz\n' +
    //     '/5y9SxjxSqpHHNIWKukTH67pNP8IAy3v8jwjQShJ8euwDP3JBUBTwTr4FITub7Xnr0kXeGKGqX2f\n' +
    //     'MHlNaXJnawKBgQDgm5sMRcvlrT1Ajo8g9fPFmarUr9PqMy0DFEFe20VWzL1u3kd30zhzAZL+w1AH\n' +
    //     'mEKEqU31yIYtUnZlQPihAOz6dwgf9a+R4r56QqWaq436+Im5J5oNhCDEiyGY43r3aTmZQV9h8X+s\n' +
    //     'niQDHxewbOcKDBtJbpjHiuewJNnaY6NEMwKBgEHDiwghY07hyiPAYMARaT+v2ICua+MF+G7tBu9W\n' +
    //     'vjVrC3IToVgY4hLYS2oFEx3nVU4xkKT71javT/Xs5tYD0u3Y6iGO1m8Q3TmvrH6GPUZ0FCMbe6KE\n' +
    //     'FA+yH4BoBq1EI/pZVo3A6e2bCoD5baDV3OLvAy9VIMO8bdAq/RbiC4wdAoGBAL5MWFNPl29jFfBq\n' +
    //     'WG4OtJkIlypYRm25Kjvfn3skwFzIXv9eKKMnPD6EaOycwmOM517KqxjA6p3frhwfrgeLZzzWOPYL\n' +
    //     'DNPHjqa7bN/c1hB7HwTWvrkQ50pervqAUaDpcDmen5e2KvwviEd0wndh7WYf18ahg6Qc1ivxLPrR\n' +
    //     'THTtAoGAMG9FgKT+qNTPUBZqt8whxyDg6Z/kI6nKQuivs6fT/IWG/6A1i8OTrooomNY4C2vZ4Uv+\n' +
    //     'h0/EX/dIJvl7GSI8UpLvcOL86wSi3myO8ateg+dIWE3VO1/3KTDy3i+wl4Xe0N3mm7zqKeXmaGms\n' +
    //     'hxcNyS303JnRtDaIXgiyMQw162I=\n' +
    //     '-----END PRIVATE KEY-----'
    // }


    function getEncryptedMqttCredentials() {
        return {
            username: 'mqtt-username-encrypted',
            password: 'mqtt-password-encrypted'
        };
    }

    return (
        <Dialog fullWidth open={open} onClose={() => onClose()}>
            <DialogTitle>Device Configuration</DialogTitle>
            <DialogContent>
                <Typography
                    variant="body2"
                    component="p"
                >Please enter your home WIFI network information to configure the connector.</Typography>
                <TextField
                    label="WIFI Network Name (SSID)"
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    value={ssid}
                    onChange={onNetworkNameChange}
                />
                <FormControl variant="outlined" fullWidth margin="normal">
                    <InputLabel htmlFor="outlined-adornment-password">WIFI Password</InputLabel>
                    <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={onPasswordChange}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleTogglePasswordVisibility}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff/> : <Visibility/>}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="WIFI Password"
                    />
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => onClose()} variant="outlined">
                    Cancel
                </Button>
                <Button
                    onClick={handleDownload}
                    variant="outlined"
                    endIcon={<Download/>}
                >
                    Download
                </Button>
            </DialogActions>
        </Dialog>
    );
}