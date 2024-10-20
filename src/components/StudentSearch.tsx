// components/StudentSearch.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #e3dac9;
  border-radius: 8px;
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
`;

const SearchResults = styled.div`
  margin-top: 10px;
`;

const StudentSearch = () => {
  const [query, setQuery] = useState('');
  const [results] = useState([
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    // Implement real search logic here in the future
  };

  return (
    <SearchContainer>
      <SearchInput
        type="text"
        placeholder="Search for students..."
        value={query}
        onChange={handleSearch}
      />
      <SearchResults>
        {results
          .filter((student) => student.name.toLowerCase().includes(query.toLowerCase()))
          .map((student) => (
            <div key={student.id}>{student.name}</div>
          ))}
      </SearchResults>
    </SearchContainer>
  );
};

export default StudentSearch;
