import React, { useContext, useEffect } from 'react';
import { List as MUIList, ListItem, ListItemAvatar, Avatar, ListItemText, ListItemSecondaryAction, IconButton, Slide } from '@material-ui/core';
import { Delete, MoneyOff } from '@material-ui/icons';
import "aos/dist/aos.css"
import { ExpenseTrackerContext } from '../../../context/context';
import useStyles from './styles';
import Aos from 'aos';


const List = () => {
  const classes = useStyles();
  const { transactions, deleteTransaction } = useContext(ExpenseTrackerContext);
  useEffect(()=>{
    Aos.init({duration: 2000});
  }, []);

  return (
    <MUIList  dense={false} className={classes.list}>
      {transactions.map((transaction) => (
        <Slide  direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem >
            <ListItemAvatar >
              <Avatar  className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText  primary={transaction.category} secondary={`₹${transaction.amount} - ${transaction.date}`} />
            <ListItemSecondaryAction>
              <IconButton  edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUIList>
  );
};

export default List;
/*data-aos="fade-right" */