import React from 'react';
import {Container} from './styles';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    ul: {
      "& .MuiPaginationItem-root": {
        color: "white"
      }
    }
}));
  
const Paginacao = (props) => {
    const classes = useStyles();
    return(
        <Container>
            <Pagination 
                classes={{ ul: classes.ul }}
                count={props.count}
                onChange={props.onchange}    
            />
        </Container>
        
    );
}
export default Paginacao;