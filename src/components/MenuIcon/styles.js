import styled from 'styled-components';
import { Menu } from '@styled-icons/boxicons-regular/Menu';
import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline';

export const OpenMenu = styled(Menu)`
    color: white;
    width: 35px;
    margin-left: 1px; 

    :hover{
        cursor: pointer;
    }
`;

export const CloseMenu = styled(CloseOutline)`
    color: white;
    width: 35px;
    margin-left: 1px; 
    
    :hover{
        cursor: pointer;
    }
`;