import { useCallback, useMemo } from 'react';
import { Box, Stack, Tooltip, Typography } from '@mui/material';
import vrooli from 'assets/Vrooli-logo.png';
import email from 'assets/email.svg';
import discord from 'assets/discord.svg';
import github from 'assets/github.svg';
import twitter from 'assets/twitter.svg';
import youtube from 'assets/youtube.svg';
import { SxProps } from "@mui/material"
import { CSSProperties } from "@mui/styles";

/**
 * Disables text highlighting
 */
const noSelect: SxProps = {
    WebkitTouchCallout: 'none', /* iOS Safari */
    WebkitUserSelect: 'none', /* Safari */
    MozUserSelect: 'none',
    msUserSelect: 'none', /* Internet Explorer/Edge */
    userSelect: 'none', /* Non-prefixed version, currently
    supported by Chrome, Edge, Opera and Firefox */
} as CSSProperties;

export const Links = () => {

    const openLink = useCallback((link: string) => { window.open(link, '_blank', 'noopener,noreferrer') }, []);

    // 2D array of [image, alt/tooltip, link?, onClick?]
    const iconNavData = [
        [twitter, "Follow us on Twitter", "https://twitter.com/VrooliOfficial"],
        [discord, "Join our Discord", "https://discord.gg/Zj47TUeY"],
        [github, "Source Code", "https://github.com/MattHalloran/Vrooli"],
        [email, "Send us an email", "mailto:support@vrooli.com"],
        [youtube, "Subscribe to our YouTube account", "https://youtube.com/channel/UC4qvcwbFxx06vBD3wKjXscg"],
    ]
    const iconProps = {
        width: '24px',
        height: '24px',
    }
    const iconNav = useMemo(() => {
        return iconNavData.map(([img, alt, link], index) => {
            return (
                <Tooltip key={`nav-item-${index}`} title={alt}>
                    <Box onClick={() => openLink(link)} sx={{cursor: 'pointer'}}>
                        <img src={img} alt={alt} {...iconProps} />
                    </Box>
                </Tooltip>
            )
        })
    }, [iconProps, iconNavData, openLink])

    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "100vh",
        }}>
            <Box id='main-container' sx={{
                background: "#072781",
                maxWidth: "800px",
                borderRadius: 2,
                boxShadow: "0 0 35px 0 rgba(0,0,0,0.5)",
                textAlign: "center",
                padding: "2em",
            }}>
                <Box id='main-info'>
                    <Box sx={{
                        ...noSelect,
                        display: 'contents'
                    }}>
                        <img
                            id="main-logo"
                            src={vrooli}
                            onClick={() => openLink("https://vrooli.com")}
                            alt="Vrooli Logo"
                            style={{
                                height: '75px',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                display: 'block',
                                marginBottom: '8px',
                                cursor: 'pointer',
                            }}
                        />
                    </Box>
                    <Typography variant="h3" component="h1" mb={1}>Vrooli</Typography>
                    <Typography
                        variant="h6"
                        mb={2}
                        color="#aaf1f9"
                    >Coming March 15</Typography>
                </Box>
                <Stack direction="row" spacing={3} sx={{ ...noSelect, justifyContent: 'space-evenly' }}>
                    {iconNav}
                </Stack>
            </Box>
        </Box>
    );
}