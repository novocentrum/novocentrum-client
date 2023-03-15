import {Box, Typography} from "@mui/material";
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {StyledContainer} from './styled.ts';
import TargetItem from "./components/TargetItem";
import Button from "../../../components/Button";

const AdminTargets = () => {
  const [targets, setTargets] = useState([]);
  const [inProgressTarget, setInProgressTarget] = useState(null);
  const [inProgressStatus, setInProgressStatus] = useState('');

  const changeTargetStatus = (id) => {
    const findedTarget = targets.find((target) => {
      return target._id === id;
    });

    const idx = targets.findIndex((target) => {
      return target._id === id;
    });

    const targetsCopy = [...targets];

    if (findedTarget.status === 'finished') {
      setInProgressStatus('inProgress');
      targetsCopy[idx] = {...findedTarget, status: 'inProgress'};
      return setTargets(targetsCopy);
    }

    if (findedTarget.status === 'inProgress') {
      setInProgressStatus('finished');
      targetsCopy[idx] = {...findedTarget, status: 'finished'}
      return setTargets(targetsCopy);
    }
  };

  const getTargets = async () => {
    const targets = await axios.get('http://localhost:8080/targets/list');
    setTargets(targets.data);
    const findedTarget = targets.data.find((target) => {
      return target.status === 'inProgress';
    });
    setInProgressTarget(findedTarget);
  };

  const onSaveClick = async () => {
    const idx = targets.findIndex((target) => {
      return target.status === 'inProgress';
    });

    const targetsCopy = [...targets];
    targetsCopy[idx] = {...targetsCopy[idx], status: 'finished'};
    targetsCopy[idx + 1] = {...targetsCopy[idx + 1], status: 'inProgress'};

    const updatedTargets = await axios.post(`http://localhost:8080/targets/change-status/${inProgressTarget._id}`, {
      status: inProgressStatus,
    });

    return setTargets(updatedTargets.data);
  };

  useEffect(() => {
    getTargets();
  }, []);

  return (
    <StyledContainer>
      <Typography variant="text16sb" mb="4px">
        Цели для реализации:
      </Typography>
      <Box mb="24px">
        {targets.map((target) => {
          return (
            <TargetItem
              key={target._id}
              target={target}
              isDisabledTarget={target.status !== 'inProgress' && target.status !== 'finished'}
              inProgressTarget={inProgressTarget}
              changeTargetStatus={changeTargetStatus}
            />
          )
        })}
      </Box>
      <Button title="Сохранить" onClick={onSaveClick} />
    </StyledContainer>
  );
};

export default AdminTargets;