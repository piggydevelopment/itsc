import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Banner(props) {
    let [banners, setbanners] = useState(props.data);
    useEffect(() => {
        setbanners(props.data);
    }, [props.data]);

    return (
        <Box sx={{ p: 3 }}>
            <Splide
                options={{
                    type: 'loop',
                    gap: '0.5rem',
                    arrows: false,
                    padding: '8%',
                    focus: 'center',
                    rewind: true,
                    autoplay: "true",
                    autoScroll: {
                        speed: 1
                    },
                }}
            >
                {
                    banners.map(item => (
                        <SplideSlide key={item.id}>
                            <img src={item.pic_file_name} className='imgslide' alt={item.name} />
                        </SplideSlide>
                    ))
                }
            </Splide>

        </Box>
    );
}