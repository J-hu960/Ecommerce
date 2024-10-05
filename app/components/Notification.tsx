import { useState, useEffect } from 'react';

interface props{
    message: string;
    type:string;
    visible:boolean;
    setVisible:any
}

const Notification = ({ message, type, visible, setVisible }:props) => {
  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000); // El popup se cierra automáticamente después de 3 segundos

      return () => clearTimeout(timer);
    }
  }, [visible, setVisible]);

  if (!visible) return null;

  return (
    <div style={{
      
      backgroundColor: type === 'success' ? 'indigo' : 'red',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '5px',
      zIndex: 1000,
      textAlign:'center',
      fontWeight:'bold',
      width:'300px',
      marginLeft:'auto',
      marginRight:'auto',
    }}>
      {message}
    </div>
  );
};


export default Notification