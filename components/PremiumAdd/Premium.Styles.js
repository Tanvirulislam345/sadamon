import styled from "styled-components";

export const AdContiner = styled.div`
  font: Metropolis;
  background: ${(props) => props.color || "#d4d9df"};
  border-radius: ${(props) => props.borderRadius || "15px"};
  max-width: 500px;
  width: 100%;
  margin-bottom: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const ButtonAd = styled.button`
  width: 100%;
  font-weight: 700;
  font-size: 13px;
  line-height: 16px;
  padding: 12px 0px;
  border-radius: 5px;
  border: none;
  color: ${(props) => props.color || "#ffffff"};
  background: ${(props) => props.background || "#fa631a"};
`;
