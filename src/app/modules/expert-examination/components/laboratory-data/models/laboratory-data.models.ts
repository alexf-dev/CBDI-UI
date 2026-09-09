/**
 * Модель данных блока "Данные дополнительных и лабораторных методов обследования"
 */
export interface AdditionalMethodsDTO {
  kag: string;
  xray: string;
  ultrasound: string;
  abdominalUltrasound: string;
  heartUltrasound: string;
  ecg: string;
  eeg: string;
  other: string;
}

/**
 * Модель данных блока "Общий анализ крови"
 */
export interface BloodTestDTO {
  isNormal: boolean;
  erythrocytes: string;
  hemoglobin: string;
  colorIndex: string;
  hematocrit: string;
  platelets: string;
  leukocytes: string;
  bandNuclear: string;
  segmentedNuclear: string;
  eosinophils: string;
  basophils: string;
  lymphocytes: string;
  monocytes: string;
  esr: string;
  history: string;
}

/**
 * Модель данных блока "Биохимический анализ крови"
 * (пока заглушка, поля добавим позже по макету)
 */
export interface BiochemicalBloodTestDTO {
  // TODO: добавить поля по макету
}

/**
 * Модель данных блока "Общий анализ мочи"
 * (пока заглушка, поля добавим позже по макету)
 */
export interface UrineTestDTO {
  // TODO: добавить поля по макету
}

/**
 * Общая модель данных формы "Данные лабораторных исследований"
 * Содержит 4 вложенные модели — по одной на каждый блок
 */
export interface LaboratoryDataDTO {
  additionalMethods: AdditionalMethodsDTO;
  bloodTest: BloodTestDTO;
  biochemicalBloodTest: BiochemicalBloodTestDTO;
  urineTest: UrineTestDTO;
}
