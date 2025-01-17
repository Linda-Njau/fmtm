import * as React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import { IconButton, Stack, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
export default function BasicDialog({ open, actions, title, onClose }) {

    return (
        <Dialog fullWidth open={open}>
            <Stack
                position={'absolute'}
                right={'1.5%'}
                top={'1.5%'}
                borderRadius={60}
                height={50}
                width={40}

            >
                <IconButton onClick={onClose}>
                    <CloseIcon color='info' />
                </IconButton>
            </Stack>
            {title != undefined ?
                <Stack p={1} direction={'row'} justifyContent={'center'}>
                    <Typography
                        variant='h2'
                        mt={'3%'}
                        fontSize={20}
                    >
                        {title}
                    </Typography>
                </Stack>
                : null}
            <Stack justifyContent={'center'} p={2}>
                {actions}
            </Stack>
        </Dialog>
    );
}
