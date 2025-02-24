import { Play } from "phosphor-react";
import {
  FormContainer,
  HomeContainer,
  MinutesInput,
  Separator,
  TaskInput,
  TimerContainer,
} from "./styles";
import { useForm } from "react-hook-form";

export const Home = () => {
  const { register, handleSubmit, watch } = useForm();

  function handleCreateNew(data: unknown) {
    console.log(data);
  }

  const task = watch("task");

  return (
    <HomeContainer data-tesid="home-container">
      <form onSubmit={handleSubmit(handleCreateNew)} action="">
        <FormContainer data-testid="form-group">
          <label htmlFor="task">The task to be done is</label>
          <TaskInput
            placeholder="name a task"
            id="task"
            list="task-list"
            {...register("task")}
          />

          <datalist id="task-list">
            <option value="Project 1" />
            <option value="Project 2" />
            <option value="Project 12" />
            <option value="Project 77" />
          </datalist>

          <label htmlFor="minutesAmount">during</label>
          <MinutesInput
            placeholder="00"
            type="number"
            id="minutesAmount"
            step={5}
            min={5}
            max={60}
            {...register("minutesAmount", { valueAsNumber: true })}
          />

          <span>minutes</span>
        </FormContainer>

        <TimerContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </TimerContainer>

        <button disabled={!task} type="submit">
          <Play />
          Start
        </button>
      </form>
    </HomeContainer>
  );
};
