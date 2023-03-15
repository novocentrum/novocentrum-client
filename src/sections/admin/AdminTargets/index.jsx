import {Box, Typography} from "@mui/material";
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {StyledContainer} from './styled.ts';
import TargetItem from "./components/TargetItem";
import Button from "../../../components/Button";

const AdminTargets = () => {
  const [targets, setTargets] = useState([]);
  const [inProgressTargetIndex, setInProgressTargetIndex] = useState(null);
  const [inProgressStatus, setInProgressStatus] = useState('');

  const getTargets = async () => {
    const targets = await axios.get('http://localhost:8080/targets/list');
    setTargets(targets.data);
    const idx = targets.data.findIndex((target) => {
      return target.status === 'inProgress';
    });
    setInProgressTargetIndex(idx);
  };

  // const changeTargetStatus = async () => {
  //   const updatedTargets = await axios.post(`http://localhost:8080/targets/change-status/${finishedTargetId}`, {
  //     status: 'finished',
  //   });
  //   setTargets(updatedTargets.data);
  // };

  const onSaveClick = async () => {
    const idx = targets.findIndex((target) => {
      return target.status === 'inProgress';
    });

    const inProgressTarget = targets.find((target) => {
      return target.status === 'inProgress';
    });

    const targetsCopy = [...targets];
    targetsCopy[idx] = {...targetsCopy[idx], status: 'finished'};
    targetsCopy[idx + 1] = {...targetsCopy[idx + 1], status: 'inProgress'};

    const inProgressIndex = targetsCopy.findIndex((target) => {
      return target.status === 'inProgress';
    });

    const updatedTargets = await axios.post(`http://localhost:8080/targets/change-status/${inProgressTarget._id}`, {
      status: inProgressStatus,
    });
    console.log('updatedTargets', updatedTargets.data)

    setInProgressTargetIndex(inProgressIndex);
    return setTargets(updatedTargets.data);
  };

  useEffect(() => {
    console.log('targets', targets);
    console.log('inProgressStatus', inProgressStatus)
  }, [targets, inProgressStatus])

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
              setInProgressStatus={setInProgressStatus}
            />
          )
        })}
      </Box>
      <Button title="Сохранить" onClick={onSaveClick} />
    </StyledContainer>
  );
};

export default AdminTargets;