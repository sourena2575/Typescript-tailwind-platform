import { Switch } from "components";
import { FC, memo } from "react";

export const HadretionopathyDiag: FC<IPatientField> = memo(
  ({ control, state }) => {
    return (
      <Switch
        label="Had Retionopathy Diagnosis?"
        name="HadRetionopathyDiagnosis"
        control={control}
        checked={state}
      />
    );
  }
);
