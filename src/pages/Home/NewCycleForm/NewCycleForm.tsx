import { useFormContext } from "react-hook-form";
import * as S from "./style";
import { useContext } from "react";
import { CyclesContext } from "../../../context/CyclesContext";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <S.FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <S.TaskInput
        list="task-suggestions"
        id="task"
        type="text"
        placeholder="Dê um nome para seu projeto"
        {...register("task")}
        disabled={!!activeCycle}
      />
      <datalist id="task-suggestions">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="Projeto 4" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <S.MinutesAmountInput
        // step={5}
        placeholder="00"
        type="number"
        id="minutesAmount"
        {...register("minutesAmount", { valueAsNumber: true })}
        disabled={!!activeCycle}
      />

      <span>minutos</span>
    </S.FormContainer>
  );
}
