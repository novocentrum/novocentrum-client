import {Box, Typography} from "@mui/material";
import React, {useEffect, useState} from 'react';
import axios from "axios";
import {StyledContainer} from './styled.ts';
import TargetItem from "./components/TargetItem";
import Button from "../../../components/Button";

const AdminTargets = () => {
  const [targets, setTargets] = useState([]);
  const [inProgressTarget, setInProgressTarget] = useState(null);
  const [finalDate, setFinalDate] = useState(null);
  const [finishedTargetId, setFinishedTargetId] = useState(null);

  const getTargets = async () => {
    const targets = await axios.get('http://localhost:8080/targets/list');
    setTargets(targets.data);
    const inProgressTarget = targets.data.filter(target => {
      return target.status === 'inProgress';
    })[0];

    setFinalDate(inProgressTarget.finalDate);
  };

  const changeTargetStatus = async () => {
    const updatedTargets = await axios.post(`http://localhost:8080/targets/change-status/${finishedTargetId}`, {
      status: 'finished',
      finalDate
    });
    setTargets(updatedTargets.data);
  };

  const changeTargetFinalDate = async () => {
    const inProgressTargetId = targets.find(target => {
      return target.status === "inProgress";
    })._id;

    await axios.post(`http://localhost:8080/targets/change-finalDate/${inProgressTargetId}`, {
      finalDate
    });
  };

  useEffect(() => {
    console.log('finalDate', finalDate)
  }, [finalDate])

  const onCheckboxClick = (newTarget) => {
    changeTargetStatus(newTarget._id, finalDate);

    const idx = targets.findIndex((target) => {
      return target._id === newTarget._id;
    });

    const targetsCopy = [...targets];
    targetsCopy[idx] = newTarget;
    targetsCopy[idx + 1] = {...targetsCopy[idx + 1], status: 'inProgress'};

    setTargets(targetsCopy);

    const firstPendingTarget = targets.filter(target => {
      return target.status === 'pending';
    })[0];

    const inProgressTarget = targets.find(target => {
      return target._id === firstPendingTarget._id;
    });

    setFinalDate(null);
    setFinishedTargetId(newTarget._id);
    return setInProgressTarget(inProgressTarget._id);
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
        {targets.map(target => (
          <TargetItem
            key={target._id}
            target={target}
            isInProgressTarget={inProgressTarget === target._id}
            onCheckboxClick={onCheckboxClick}
            finalDate={finalDate}
            setFinalDate={setFinalDate}
          />
        ))}
      </Box>
      <Button
        title="Сохранить"
        onClick={changeTargetFinalDate}
        disabled={!finalDate}
      />
    </StyledContainer>
  );
};

export default AdminTargets;