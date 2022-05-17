import styled from "styled-components";

export const AppBarContainer = styled.div`
  max-width: 500px;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const MenuButton = styled.div`
  color: #343c44;
  border-radius: 8px;
  padding: 8px 12px;
  margin: 22px 0px;
  margin-right: 30px;
  font-family: Metropolis;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  background: #fbfbfb;
  box-shadow: 0px 0px 1px rgba(117, 131, 142, 0.04),
    0px 2px 4px rgba(52, 60, 68, 0.16);
`;

export const MenuPlainButtonContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
`;

export const MenuCircleButton = styled.div`
  color: #343c44;
  padding: 10px;
  margin-right: 10px;
  font-family: Metropolis;
  font-style: normal;
  font-weight: 500;
  font-size: ${(props) => props.fontSize || "14px"};
  background: #c4c4c4;
  border-radius: ${(props) => props.borderRadius || "50%"};
`;

export const MenuCircleImageButton = styled.div`
  color: #343c44;
  padding: 7px 9px;
  margin-right: 10px;
  font-family: Metropolis;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  background: #c4c4c4;
  border-radius: ${(props) => props.borderRadius || "50%"};
`;

export const MenuPlainText = styled.div`
  font-family: Metropolis;
  text-align: justify;
  font-style: normal;
  font-weight: ${(props) => props.fontWidth || 500};
  font-size: ${(props) => props.fontSize || "14px"};
  margin: 0px 5px;
`;
