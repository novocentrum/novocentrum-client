import React, {useState} from 'react';
import {StyledContainer} from './styled.ts';
import {SectionTitle} from "../../../components/SectionTitle";
import Button from "../../../components/Button";
import TextAreaField from "../../../components/TextAreaField";
import axios from "axios";

const AdminArticles = () => {
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const changeInputHandler = (event) => {
    setMessage(event.target.value);
  };

  const createArticle = async () => {
    try {
      setIsLoading(true);
      await axios.post('https://novecentrum.onrender.com/articles/create', { text: message });
    } catch (e) {
      console.error('Error', e)
    } finally {
      setIsLoading(false);
      setMessage('');
    }
  };

  return (
    <StyledContainer>
      <SectionTitle title="Новая статья" />
      <TextAreaField
        width={700}
        rows={7}
        placeholder="Сообщение"
        value={message}
        onChange={(e) => changeInputHandler(e)}
      />
      <Button onClick={createArticle} isLoading={isLoading} />
    </StyledContainer>
  );
};

export default AdminArticles;