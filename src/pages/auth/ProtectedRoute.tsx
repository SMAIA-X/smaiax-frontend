import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SmaiaXAbsoluteRoutes } from '../../constants/constants.ts';
import { jwtDecode, JwtPayload } from 'jwt-decode';
import { useAuthenticationService } from '../../hooks/services/useAuthenticationService.ts';
import { Box, CircularProgress } from '@mui/material';

interface ProtectedRouteProps {
    children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const { refresh } = useAuthenticationService();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkTokens = async () => {
            const accessToken = localStorage.getItem('access_token');
            const refreshToken = localStorage.getItem('refresh_token');

            if (!accessToken || !refreshToken) {
                void navigate(SmaiaXAbsoluteRoutes.SIGN_IN);
                return;
            }

            try {
                const decodedAccessToken = jwtDecode<JwtPayload & { unique_name: string; email: string }>(accessToken);

                if (!decodedAccessToken.exp) {
                    void navigate(SmaiaXAbsoluteRoutes.SIGN_IN);
                    return;
                }

                const utcNowInMs = Date.now();
                const utcExpirationDateInMs = decodedAccessToken.exp * 1000;

                if (utcExpirationDateInMs < utcNowInMs) {
                    const newTokens = await refresh({ accessToken, refreshToken });
                    localStorage.setItem('access_token', newTokens.accessToken);
                    localStorage.setItem('refresh_token', newTokens.refreshToken);
                }
            } catch (e) {
                console.error(e);
                localStorage.removeItem('access_token');
                localStorage.removeItem('refresh_token');
                void navigate(SmaiaXAbsoluteRoutes.SIGN_IN);
                return;
            } finally {
                setLoading(false);
            }
        };

        void checkTokens();
    }, [navigate, refresh]);

    if (loading) {
        return (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
                <CircularProgress size="3em" />
            </Box>
        );
    }

    return <>{children}</>;
};

export default ProtectedRoute;
