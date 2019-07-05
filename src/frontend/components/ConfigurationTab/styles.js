import styled from "styled-components";

export const ConfigurationContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    height: 80vh;
`;

export const ControlPointsList = styled.ul`
    list-style: none;
    width: 200px;
`;

export const ControlPointItem = styled.li`
    height: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: nowrap;
    margin: 2px;
`;
