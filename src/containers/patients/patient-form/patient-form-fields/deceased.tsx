import { Select, SelectOption } from "components";
import { FC, memo } from "react";

export const Deceased: FC<IPatientField> = memo(
  ({ control, state, error, setValue }) => {
    return (
      <Select
        label="Deceased"
        name="deceased"
        control={control}
        value={state}
        error={error}
        setValue={setValue}
      >
        <SelectOption value="No" selected={state === "No"}>
          No
        </SelectOption>
        <SelectOption value="Yes" selected={state === "Yes"}>
          Yes
        </SelectOption>
      </Select>
    );
  }
);
