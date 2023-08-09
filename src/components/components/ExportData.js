import FileSaver from "file-saver";

import * as React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { token } from "./Token";

export function download(data) {
  const blob = new Blob([JSON.stringify(data)], { type: 'application/json;charset=utf-8' });
  FileSaver.saveAs(blob, "config.json");
}

const url = 'https://azwe-app-dev-dfdsin.azurewebsites.net/api/';
export async function fetchExportData() {
  try {
    let httpOptions = {
      method: 'GET',
      headers: {
        Authorization: token
      }
    };

    const packages = await (await fetch(url + 'Admin/InstallablePackages', httpOptions)).json();
    const descriptions = await (await fetch(url + 'Admin/InstallablePackageDescriptions', httpOptions)).json();
    const installables = await (await fetch(url + 'Admin/InstallablePackages', httpOptions)).json();
    const syncTemplates = await (await fetch(url + 'Admin/InstallableSyncTemplates', httpOptions)).json();
    const exePaths = await (await fetch(url + 'InstallableQuery/InstallableExecutablePaths', httpOptions)).json();

    return {
      packages,
      descriptions,
      installables,
      syncTemplates,
      exePaths
    };
  } catch (error) {
    console.log('error');
    return null;
  }
}

export const AlertSnackbars = ({ type, text }) => {
  const [open, setOpen] = React.useState(true);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  setTimeout(() => {
    handleClose();
  }, 5000);

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>{text}</Alert>
      </Snackbar>
    </Stack>
  );
}