'use client';

import styled from 'styled-components';

const FileUpload = styled.input.attrs({ type: 'file' })`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

export default FileUpload;
