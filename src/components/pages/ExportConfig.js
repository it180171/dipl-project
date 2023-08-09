
import * as React from 'react';
import { useQuery } from "react-query";
import ReactJson from 'react-json-view'
import { Button } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';
import '../style/export.css';
import { AlertSnackbars } from '../components/ExportData';
import { download, fetchExportData } from '../components/ExportData';

const ExportConfig = () => {
  const { data, status } = useQuery('config', fetchExportData)

  if (status === 'loading') {
    return <div className="box loadingBox"><CircularProgress className="loading" /></div>
  }
  if (status === 'error' || data === null) {
    return <AlertSnackbars type='error' text='Error message' />
  }
  return (
    <div className="box">
      <ReactJson className="jsonView" src={data} enableClipboard={false} displayDataTypes={false} />
      <div className="btnBox">
        <Button onClick={() => download(data)} className="btn" variant="contained">Download</Button>
      </div>
    </div>
  )
}

export default ExportConfig;