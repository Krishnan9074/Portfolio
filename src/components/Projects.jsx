import React from 'react'
import Project from './containers/Project'
import wearingmask from './media/wearingmask.jpg'
import Button from 'react-bootstrap/Button';
import aiwolf from './media/aiwolf.jpg'
import seer from './media/seer.jpg'
import hand from './media/hand.png'
import library from './media/library.jpeg'
import { motion } from 'framer-motion'

export default function Projects() {

  return (

    <div className='main'>
      
        <div className="projects-content">
          <div className='project-main'>

              

                  <motion.div
                initial={{ y: 100, opacity: 0, scale: 1 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0,
                  ease: [0, 0.5, 0.2, 1.01]
                }}>
                  <div className='projects-box'>
                  <img className='projects-image' src={aiwolf}/>
                    <span className='projects-heading'>
                    Adensitien
                      </span><br/><br/>
                    <div className='projects-description'>
                    AI-driven project creates personalized ads for ecomm websites and platforms.
                    <br/><br/>
                    Technologies used: <br/>
                    React,Flask,Python,Tensorflow,Gen AI
                    <br/><br/><br/>
                    <a href='https://github.com/Krishnan9074/Adeinstien' className='projects-button'>GitHub</a>
                    </div>

                  </div>
                    </motion.div>
                    <motion.div
                initial={{ y: 100, opacity: 0, scale: 1 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0,
                  ease: [0, 0.5, 0.2, 1.01]
                }}>
                  <div className='projects-box'>
                  <img className='projects-image' src={hand}/>
                    <span className='projects-heading'>
                    NeuroAssist
                      </span><br/><br/>
                    <div className='projects-description'>
                    Preliminary diagnosis for neurological disorders in children using AI
                    
                    <br/><br/>
                    Technologies used: <br/>
                    TensorFlow, PyTorch, GenAI, React ,Flask
                    <br/><br/><br/>
                    <a href='https://github.com/Krishnan9074/BoltHack' className='projects-button'>GitHub</a>
                    </div>

                  </div>
                      </motion.div>
                      <motion.div
                initial={{ y: 100, opacity: 0, scale: 1 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0,
                  ease: [0, 0.5, 0.2, 1.01]
                }}>
                  <div className='projects-box'>
                  <img className='projects-image' src={wearingmask}/>
                    <span className='projects-heading'>
                    Envirowatch
                      </span><br/><br/>
                    <div className='projects-description'>
                    A IOT + ML project where the environment is sensed ,ml models are used for predictive analytics using real time data .A whatsapp chatbot gives you real timedata. 
                    
                    <br/>
                    Technologies used: <br/>
                    TensorFlow, SkLearn , IOT , twilio, GenAi
                    <br/><br/><br/>
                    <a href='https://github.com/hardikbhatia777/Face-mask-detection' className='projects-button'>GitHub</a>
                    </div>

                  </div>
                  </motion.div>
                  <motion.div
                initial={{ y: 100, opacity: 0, scale: 1 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0,
                  ease: [0, 0.5, 0.2, 1.01]
                }}>
                  <div className='projects-box'>
                  <img className='projects-image' src={library}/>
                    <span className='projects-heading'>
                      Deep Learning Ripness Predictor
                      </span><br/><br/>
                    <div className='projects-description'>
                    Deep learning model(CNN+transfer learning) detects fruit ripeness
                    
                    <br/><br /><br />
                    Technologies used: <br/>
                    TensorFlow,Pytorch,Python
                    <br/><br/><br/>
                    <a href='https://github.com/Krishnan9074/.0/blob/master/Ripeness_pred.ipynb' className='projects-button'>GitHub</a>
                    </div>

                  </div>
                  </motion.div>
                  <motion.div
                initial={{ y: 100, opacity: 0, scale: 1 }}
                animate={{ y: 0, opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.3,
                  delay: 0,
                  ease: [0, 0.5, 0.2, 1.01]
                }}>
              <div className='projects-box'>
                  <img className='projects-image' src={seer}/>
                    <span className='projects-heading'>
                    S.E.E.R
                      </span><br/><br/>
                    <div className='projects-description'>
                    Predict heatwaves and climate change through a KNN classification model. Made in 2022 as a part of NASSCOMM Grand Academic Challenge hackathon.
                    
                    <br/><br/>
                    Technologies used: <br/>
                    TensorFlow, SkLearn, Flask, FastAPI

                    <br/><br/><br/>
                    <a href='https://github.com/Krishnan9074/ML-PROJECTS/blob/main/heatwavepred.ipynb' className='projects-button'>GitHub</a>
            </div>
           
                  </div> </motion.div>
                 
          </div>
          
        </div>
    </div>
  )
}
