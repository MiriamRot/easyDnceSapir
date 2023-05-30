import * as React from 'react';
import Video from './video';

export default function VideoPool() {
    const [videos, setVideos] = React.useState([])
    
    React.useEffect(() => {
        setVideos(
            [{
                id: 1,
                name: 's',
                url: 'http'
            },
            {
                id: 2,
                name: 'csda',
                url: 'http'
            },
        ]
        )
    }, [])

    return (
        <>
            {videos.map(v =>
                <Video video={v} key={v.id} />
            )}
        </>
    );
}