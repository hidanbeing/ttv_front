import React from "react";
import styled from "styled-components";

export const DropdownForm = ({
  size,
  setSize,

  type,
  setType,
  velocity,
  setVelocity,
  font,
  setFont,
}) => {
  return (
    <DropDownForm>
      <Title>[ Setting ]</Title>

      <SelectDiv>
        <SelectWrapper>
          <Label>사이즈</Label>
          <Select value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="small">가로 (1920, 1080)</option>
            <option value="medium">세로 (1080, 1920)</option>
          </Select>
        </SelectWrapper>

        <SelectWrapper>
          <Label>목소리</Label>
          <Select value={type} onChange={(e) => setType(e.target.value)}>
            <option value="ko-KR-Wavenet-A">명랑한 여자목소리</option>
            <option value="ko-KR-Wavenet-B">차분한 여자목소리</option>
            <option value="ko-KR-Wavenet-D">명랑한 남자목소리</option>
            <option value="ko-KR-Wavenet-C">차분한 남자목소리</option>
          </Select>
        </SelectWrapper>

        <SelectWrapper>
          <Label>폰트</Label>
          <Select value={font} onChange={(e) => setFont(e.target.value)}>
            <option value="NotoSansKR">NotoSansKR</option>
            <option value="서울남산장체">서울남산장체</option>
          </Select>
        </SelectWrapper>

        <SelectWrapper>
          <Label>속도</Label>
          <Select
            value={velocity}
            onChange={(e) => setVelocity(e.target.value)}
          >
            <option value="0.5">0.5</option>
            <option value="1.0">1</option>
            <option value="1.5">1.5</option>
            <option value="2.0">2.0</option>
          </Select>
        </SelectWrapper>
      </SelectDiv>
    </DropDownForm>
  );
};

const Title = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin: 30px;
`;

const SelectDiv = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #24146810;
  border-radius: 15px;
  padding: 5px;
`;

const DropDownForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 30px;
  font-family: "Gowun Dodum", sans-serif;
  padding: 20px;
`;

const SelectWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 5px;
  font-size: 14px;
  color: #333;
  font-family: "Gowun Dodum", sans-serif;
  font-weight: bold;
`;

const Select = styled.select`
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid #ccc;
  background-color: #fff;
  font-size: 14px;
  color: #333;
  transition: all 0.3s ease;
  font-family: "Gowun Dodum", sans-serif;

  &:hover {
    border-color: #888;
  }

  &:focus {
    border-color: #555;
    outline: none;
  }
`;
