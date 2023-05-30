import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import css from './history/history.css';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import StarIcon from '@mui/icons-material/Star';


export default function UserHistory() {

    return (
        <>
            <div className='mainHistoryDiv' >
                <div className='lastVideos'>הסרטונים האחרונים שצפיתי{<List sx={{ width: '100%', maxWidth: '100%', marginLeft: 7 }}>
                    <ListItem>
                        <ListItemAvatar>
                            <StarIcon style={{ color: '#E48F9F', marginRight: 10 }} fontSize='large' />
                            <PlayCircleOutlineIcon style={{ color: '#E48F9F', marginRight: 10 }} fontSize='large' />

                        </ListItemAvatar>
                        <ListItemText primary="סרטון 1" secondary="Jan 9, 2014" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <StarIcon style={{ color: '#E48F9F', marginRight: 10 }} fontSize='large' />
                            <PlayCircleOutlineIcon style={{ color: '#E48F9F', marginRight: 10 }} fontSize='large' />
                        </ListItemAvatar>
                        <ListItemText primary="סרטון 2" secondary="Jan 7, 2014" />
                    </ListItem>
                    <ListItem>
                        <ListItemAvatar>
                            <StarIcon style={{ color: '#E48F9F', marginRight: 10 }} fontSize='large' />
                            <PlayCircleOutlineIcon style={{ color: '#E48F9F', marginRight: 10 }} fontSize='large' />
                        </ListItemAvatar>
                        <ListItemText primary="סרטון 3" secondary="July 20, 2014" />
                    </ListItem>
                </List>}</div></div>
        </>

    );
}


