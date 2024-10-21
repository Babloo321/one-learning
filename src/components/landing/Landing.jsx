import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import './Landing.css';
import ImageSlider from './slider/ImageSlider';
import CourseCard from './coursecard/CourseCard';
const Landing = () => {
  const [showHeading, setShowHeading] = useState(true);

  // Hide the h1 after a few seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowHeading(false);
    }, 10000); // Hides h1 after 3 seconds, adjust time as needed

    return () => clearTimeout(timer); // Clean up the timer
  }, []);
  return (
    <div className="grid-container">
      <div className="grid-item left-aside">
        <Button variant="contained" color="success" className="btn">
          All Courses
        </Button>
        <Button variant="contained" color="success" className="btn">
          Hands-On|Courses
        </Button>
        <Button variant="contained" color="success" className="btn">
          Upcoming Training Program
        </Button>
        <Button variant="contained" color="success" className="btn">
          Comming Soon
        </Button>
        <Button variant="contained" color="success" className="btn">
          Online Courses
        </Button>
        <Button variant="contained" color="success" className="btn">
          Free MasterClasses
        </Button>
        <div className="image-slider">
          <ImageSlider />
          <ImageSlider />
          <ImageSlider />
          <ImageSlider />
        </div>
      </div>
      <div className="grid-item middle-column">
        {showHeading ? (
          <div className="heading-btn">
            <h1 className="heading">
              Learn From The Biggest Ultrasound Mentors!
            </h1>
            <div className="button">
              <button className="btn">Become a Member</button>
              <button className="btn">Login</button>
            </div>
          </div>
        ) : (
          <div className="video-container">
            <iframe
              className="video"
              width="600"
              height="340"
              src="https://www.youtube.com/embed/8qgJ2JrPg1k?autoplay=1&mute=1"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>

            <div className="button">
              <button className="btn">Become a Member</button>
              <button className="btn">Login</button>
            </div>
          </div>
        )}
        <div className="our-commendation">
          <h1>Our Commendation</h1>
          <img
            src="https://onelearninghealthcare.com/wp-content/uploads/2022/06/testimonialblack.png"
            alt="one-comodation"
            className="image"
          />
        </div>
        <div className="enablers-container">
          <div className="enablers-heading">
            <p>Our Enablers</p>
          </div>
          <div className="enablers-card">
            <div className="enablers-item">
              <img
                src="https://onelearninghealthcare.com/wp-content/uploads/2022/10/logo-2048x812.png"
                alt="amtz"
                className="enablers-image"
              />
            </div>
            <div className="enablers-item">
              <img
                src="https://onelearninghealthcare.com/wp-content/uploads/2022/01/LOGO-1.png 380w, https://onelearninghealthcare.com/wp-content/uploads/2022/01/LOGO-1-300x126.png 300w"
                alt="adv2"
                className="enablers-image"
              />
            </div>
            <div className="enablers-item">
              <img
                src="https://onelearninghealthcare.com/wp-content/uploads/2022/01/logo-2.png"
                alt="adv_3"
                className="enablers-image"
              />
            </div>
            <div className="enablers-item">
              <img
                src="https://onelearninghealthcare.com/wp-content/uploads/2022/01/Startup-India-Logo1-02-1024x265.png"
                alt="adv_4"
                className="enablers-image"
              />
            </div>
          </div>
        </div>

        <div className="news">
        <h1>Our|News</h1>
        <div className="new-container">
          <img
            src="https://platform.twitter.com/embed/Tweet.html?dnt=false&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&frame=false&hideCard=false&hideThread=false&id=1581983598592200706&lang=en&origin=https%3A%2F%2Fonelearninghealthcare.com%2F&sessionId=c8ac4d4cdb0074c0ae70f3e89c3849e3c4d19fa8&siteScreenName=OEdusphere&theme=light&widgetsVersion=2615f7e52b7e0%3A1702314776716&width=550px"
            alt = '' className="new-item"
          />
          <img
            src="https://platform.twitter.com/embed/Tweet.html?dnt=false&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&frame=false&hideCard=false&hideThread=false&id=1581983598592200706&lang=en&origin=https%3A%2F%2Fonelearninghealthcare.com%2F&sessionId=c8ac4d4cdb0074c0ae70f3e89c3849e3c4d19fa8&siteScreenName=OEdusphere&theme=light&widgetsVersion=2615f7e52b7e0%3A1702314776716&width=550px"
            alt = '' className="new-item"
          />
          <img
            src="https://platform.twitter.com/embed/Tweet.html?dnt=false&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZHdhdGNoX3Bpdm90c19lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&frame=false&hideCard=false&hideThread=false&id=1581983598592200706&lang=en&origin=https%3A%2F%2Fonelearninghealthcare.com%2F&sessionId=c8ac4d4cdb0074c0ae70f3e89c3849e3c4d19fa8&siteScreenName=OEdusphere&theme=light&widgetsVersion=2615f7e52b7e0%3A1702314776716&width=550px"
            alt = '' className="new-item"
          />
        </div>
      </div>
      
      </div>
      
      <div className="grid-item right-aside">
        <CourseCard />
      </div>
    </div>
  );
};

export default Landing;
