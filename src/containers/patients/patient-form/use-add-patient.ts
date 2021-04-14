import { useMemo } from "react";
import { useForm, useWatch } from "react-hook-form";
import { years } from "utils";

const defaultValues = {
  Availability: "",
  AvailabilityDetail: "",
  CHOCounting: "",
  ChristianName: "",
  ComputerType: "",
  ContactDate: "",
  CurrentCGMWear: "",
  CurrentStudy: "",
  DKAExpreience: "",
  DateDetailsUpdated: "",
  DateOfBirth: "",
  DateOfDiagnosisOfT1D: "",
  DiabetesEducator: "",
  DiabetesManagementPump: "",
  DiabeticHistory: "",
  Discussionheld: "",
  DoNotCallUntil: "",
  EmailAddress: "",
  Endocrinologist: "",
  ExerciseDetail: "",
  ExerciseType: "",
  FrequencyOfSBGM: "",
  Gender: "",
  HadAbnormalkidney: false,
  HadFeetNeuropathy: false,
  HadRetionopathyDiagnosis: false,
  HadSevereHypoglycaemiaEvents: false,
  HadUnawareHypo: false,
  HasInternetAccess: false,
  Insulin: "",
  LatestHbA1cReading: "",
  LatestHbA1cReadingDate: "",
  Logistics: "",
  NextStep: "",
  OtherMedicalIssue: "",
  PWODReferral: "",
  PastCGMWear: "",
  PatientBio: "",
  PhoneNumber: "",
  PreferedContactMethod: "",
  PreferedContactTime: "",
  PreviousStudy1: "",
  PreviousStudy2: "",
  PreviousStudy3: "",
  State: "",
  StudyForConsideration: "",
  Subrub: "",
  Surname: "",
  WillComeToStVincent: false,
};

export const useAddPatient = () => {
  const {
    handleSubmit,
    register,
    control,
    formState,
    errors,
    setValue,
  } = useForm({
    defaultValues,
  });

  return {
    register,
    control,
    errors,
    setValue,
    dirty: useMemo(() => formState.isDirty, [formState.isDirty]),
    state: useWatch({ control, defaultValue: defaultValues }),
    onSubmit: handleSubmit((state) => console.log(state)),
    years: useMemo(() => years, []),
  };
};
