import { DataTypeName } from "./data-type";

export interface Scenario {
  id: number;
  sequence: number;
  description: string;
}

export interface DataType {
  size: number;
  type: DataTypeName;
  items: Scenario[];
}


export interface StepParam {
  sequence: number;
  dataType: DataType;
  id: number;
  description: string;
  isOptional: boolean;
  value: string;
}

export interface StepAction {
  scenarioId: string;
  uuid: string;
  userId: string;
  step: number;
  isLastStep: boolean;
  params: StepParam[];
}

