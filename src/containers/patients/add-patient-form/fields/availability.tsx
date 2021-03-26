import { Select, SelectOption } from "components";

export const Availability = ({ control, state }) => {
  return (
    <Select
      label="Availability"
      name="Availability"
      control={control}
      value={state["Availability"]}
    >
      <SelectOption value="Daily" selected={state["Availability"] === "Daily"}>
        Daily
      </SelectOption>
      <SelectOption
        value="Weekly"
        selected={state["Availability"] === "Weekly"}
      >
        Weekly
      </SelectOption>
      <SelectOption
        value="Fortnightly"
        selected={state["Availability"] === "Fortnightly"}
      >
        Fortnightly
      </SelectOption>
      <SelectOption
        value="Monthly"
        selected={state["Availability"] === "Monthly"}
      >
        Monthly
      </SelectOption>
    </Select>
  );
};
