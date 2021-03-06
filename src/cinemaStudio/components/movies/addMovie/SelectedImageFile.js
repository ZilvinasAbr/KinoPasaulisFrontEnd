import React from 'react';
import { Button } from 'react-bootstrap';

const SelectedImageFile = ({
  file,
  removeDroppedImage,
  index,
  onTitleChange,
  onDescriptionChange,
  title,
  description
}) => (
  <tr>
    <td><img src={file.preview} height={100} /></td>
    <td>
      <input
        onChange={(e) => onTitleChange(e.target.value, index)}
        value={title}
      />
    </td>
    <td>
      <input
        onChange={(e) => onDescriptionChange(e.target.value, index)}
        value={description}
      />
    </td>
    <td>
      <Button
        onClick={() => removeDroppedImage(index)}
        bsStyle="danger"
      >
        Pašalinti
      </Button>
    </td>
  </tr>
);

export default SelectedImageFile;