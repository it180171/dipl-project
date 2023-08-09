import CAccordian from './CAccordion';
import {Package} from '../models/Models';

/**
 * 
 * @param {{package: Package}}
 * @returns 
 */
const ImportInstallablePackage = ({instPackage}) => {
    const content = <div>
        <p><span>ID:</span><span>{instPackage.id}</span></p>
        <p><span>name:</span><span>{instPackage.id}</span></p>
        <p><span>Context menu application name:</span><span>{instPackage.id}</span></p>
        <p><span>Description:</span><span>{instPackage.id}</span></p>
        <p><span>Icon URL:</span><span>{instPackage.id}</span></p>
        <p><span>Start path:</span><span>{instPackage.id}</span></p>
        <p><span>Start Arguments:</span><span>{instPackage.id}</span></p>
        <p><span>Realease notes:</span><span>{instPackage.id}</span></p>
        <p><span>Sort order:</span><span>{instPackage.id}</span></p>
        <p><span>ID:</span><span>{instPackage.id}</span></p>
        <p><span>Installable IDs:</span><span>{instPackage.id}</span></p>


    </div>
  return (
    <div>
        {/* <CAccordian */}
        
        {/* /> */}
    </div>
  )
}

export default ImportInstallablePackage;