import React, { useEffect, useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const VideoBanner = ({ setIsScrolledToNewSlide }) => {
    const playerWrapperRef = useRef(null);
    const containerRef = useRef(null);
    const [isVideoExpanded, setIsVideoExpanded] = useState(false);
    useEffect(() => {
        // Delay initialization to ensure DOM readiness
        setTimeout(() => {
            const wrapperElement = playerWrapperRef.current;
            const containerElement = containerRef.current;
            gsap.fromTo(
                wrapperElement,
                {
                    width: '200px',
                    height: '300px',
                    position: "fixed",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    zIndex: 1,

                },
                {
                    width: '100%',
                    height: '100vh  ',
                    duration: 1,
                    ease: 'none',
                    scale: 1.3,
                    scrollTrigger: {
                        trigger: wrapperElement,

                        start: 'top center',
                        end: 'bottom',
                        scrub: true,
                        onUpdate: self => {

                            if (self.progress < 0.3) {

                                gsap.set(containerElement, { position: 'fixed', height: '100vh' });
                                gsap.set(wrapperElement, { position: "fixed", height: '100vh' })

                            }

                            if (self.progress < 0.5) {

                                gsap.set(containerElement, { position: 'relative', height: '100vh' });
                            }
                            if (self.progress === 1) {

                                gsap.set(containerElement, { position: 'relative', height: '100vh' });
                                gsap.set(wrapperElement, { position: "relative", height: '100vh' })

                            }

                        },
                        onEnter: () => gsap.set(wrapperElement, { position: "fixed" }), // Set position to fixed when entering
                        onLeaveBack: () => gsap.set(wrapperElement, { position: "static" }),

                    },
                }
            );

            // Refresh ScrollTrigger to recognize the scroller
            ScrollTrigger.refresh();
        }, 2000); // Adjust delay as needed

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <div className='position-relative main-video ' >

            <div ref={containerRef}

                className={`video-container desk-view `}
                style={{
                    overflow: 'hidden',
                   
                }} > {/* Just to add scrollable space */}
                <div
                    ref={playerWrapperRef}
                    style={{
                        width: '300px',
                        height: '300px',

                        display: 'flex',
                        alignItems: 'center',
                        overflow: 'hidden',
                        position: 'relative',
                    }}
                >
                    <ReactPlayer
                        url="https://player.vimeo.com/video/505223053" // Replace with your video URL
                        width="100%"
                        height="100%"
                        muted
                        playing
                        loop
                    />
                </div>

                <div className='video-text'>
                    <p className='text-white'>Design your life and dreams</p>
                </div>
            </div>
           <div className='mob-view'>
           <div 
                
                 > 
                <div
                  className='mob-set'
                >
                    <ReactPlayer
                        url="https://player.vimeo.com/video/505223053" 
                        width="100%"
                        height="100%"
                        muted
                        playing
                        loop
                    />
                </div>

                <div className='video-text'>
                    <p className='text-white'>Design your life and dreams</p>
                </div>
            </div>
           </div>


        </div>
    );
};

export default VideoBanner;
