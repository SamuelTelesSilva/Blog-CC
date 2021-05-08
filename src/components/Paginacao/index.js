import React from 'react';
import {Container} from './styles';
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from "@material-ui/core/styles";
import { useAuth } from '../../providers/auth';

const useStyles = makeStyles(() => ({
    ul: {
      "& .MuiPaginationItem-root": {
        color: "white"
      }
    }
}));
  
const Paginacao = (props) => {
    const classes = useStyles();
    const {pages, handleChange} = useAuth();

    return(
        <Container>
            <Pagination 
                classes={{ ul: classes.ul }}
                count={pages}
                onChange={handleChange}    
            />
        </Container>
    );
}
export default Paginacao;