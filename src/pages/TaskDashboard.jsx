import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Tasklist from '../components/list/TaskList';



const TaskDashboard = () => {

  const navigate = useNavigate();

  const user = localStorage.getItem('user') || null;

  useEffect(() => {
    if (!user) {
      navigate('/');
    }
  });
  return <Tasklist user={user} />;
}

export default TaskDashboard
